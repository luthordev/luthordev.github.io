let content = $("#content");
let token = localStorage.getItem("presensi-unpam:token");
let userClass = null;

function Login() {
  let nim = $("#input-nim").val();
  let password = $("#input-password").val();

  if (nim && password) {
    Swal.fire({
      text: "Login...",
      showCloseButton: false,
      showConfirmButton: false,
    });

    $.ajax({
      url: "https://presensi.unpam.ac.id/api/login",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ username: nim, password }),
      success: function (data) {
        if (data.access_token) {
          localStorage.setItem("presensi-unpam:token", data.access_token);
          window.location.reload();
        }
      },
      error: function (error) {
        Swal.fire({
          title: "ERROR!",
          text: error.statusText + ". Refresh dan coba lagi!",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("ERROR: ", error.statusText);
      },
    });
  } else
    Swal.fire({
      title: "Data Required!",
      text: "Masukkan NIM & Password terlebih dahulu!",
      icon: "warning",
      confirmButtonText: "OK",
    });
}

function Logout() {
  token = null;
  localStorage.removeItem("presensi-unpam:token");
  UpdateDOM();
}

async function UpdateDOM() {
  if (token) {
    let schedules = await LoadSchedule();
    userClass = schedules[0].id_kelas ?? null;
    let el = "";
    schedules.map((schedule) => {
      el += `<button class="btn btn-success py-3" onclick="LoadClass('${schedule.id_mata_kuliah}', '${schedule.nama_mata_kuliah}')">
                <b>${schedule.nama_mata_kuliah}</b> SEMESTER ${schedule.nama_semester_registrasi}
            </button>`;
    });
    el += `<button class="btn btn-danger py-3" onClick="Logout()">LOGOUT</button>`;
    content.html(el);
  } else
    content.html(`
        <input
            type="text"
            class="form-control"
            placeholder="NIM"
            id="input-nim"
        />
        <input
            type="password"
            class="form-control"
            placeholder="Password"
            id="input-password"
        />
        <button onclick="Login()" class="btn btn-primary">Login</button>
    `);
}

function LoadSchedule() {
  return $.ajax({
    url: "https://presensi.unpam.ac.id/api/mahasiswa/jadwal-kuliah",
    type: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      return data;
    },
    error: function (error) {
      Swal.fire({
        title: "ERROR!",
        text: error.statusText + ". Refresh dan coba lagi!",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("ERROR: ", error.statusText);
      return null;
    },
  });
}

function LoadClass(code, name) {
  if (!userClass) {
    Swal.fire({
      title: "ERROR",
      icon: "error",
      text: "Kode Kelas tidak ditemukan",
      showCloseButton: false,
      showConfirmButton: false,
    });
    setTimeout(() => {
      Logout();
    }, 2500);
    return;
  }

  Swal.fire({
    text: "Loading...",
    showCloseButton: false,
    showConfirmButton: false,
  });

  $.ajax({
    url: `https://presensi.unpam.ac.id/api/mahasiswa/jadwal-pertemuan/${code}/${userClass}`,
    type: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      let el = "";
      data.map((row) => {
        el += `
        <div class="row mb-3">
            <div class="col-3">Ke-${row.pertemuan_ke}</div>
            <div class="col-6">${
              row.presensi_status == null
                ? "-"
                : row.presensi_status == "absen"
                ? "<span class='text-danger'>Absen</span>"
                : "<span class='text-success'>Hadir</span>"
            }</div>
            <div class="col-3">
            ${
              row.presensi_status == "hadir"
                ? ""
                : `<button onclick="Present('${row.qrcode}', '${row.id_mata_kuliah}')" class="btn btn-success">HADIR</button>`
            }
            </div>
        </div>
        `;
      });

      if (el.length > 0)
        Swal.fire({
          html: `<h5 class="mb-4">${name}</h5>` + el,
          showCloseButton: true,
          showConfirmButton: false,
        });
      else
        Swal.fire({
          icon: "error",
          title: "ERROR!",
          text: "Data Tidak Ditemukan",
        });
    },
    error: function (error) {
      Swal.fire({
        title: "ERROR!",
        text: error.responseJSON.message + ". Refresh dan coba lagi!",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("ERROR: ", error.statusText);
      return null;
    },
  });
}

function Present(qrcode, classCode) {
  Swal.fire({
    text: "Presensi...",
    showCloseButton: false,
    showConfirmButton: false,
  });

  $.ajax({
    url: "https://presensi.unpam.ac.id/api/mahasiswa/scan-qrcode",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ qrcode: qrcode }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      Swal.fire({
        title: "SUCCESS!",
        text: `Berhasil scan kehadiran pada mata kuliah ${data.data.nama_mata_kuliah}`,
        icon: "success",
        showConfirmButton: false,
      });

      setTimeout(() => {
        LoadClass(classCode, data.data.nama_mata_kuliah);
      }, 1000);
    },
    error: function (error) {
      Swal.fire({
        title: "ERROR!",
        text: error.statusText + ". Refresh dan coba lagi!",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("ERROR: ", error.statusText);
    },
  });
}

UpdateDOM();
