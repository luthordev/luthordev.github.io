const _0x3ebdd8=_0x3745;(function(_0x5e87e4,_0x3bb9a3){const _0x529d32=_0x3745,_0x18ab31=_0x5e87e4();while(!![]){try{const _0x161050=-parseInt(_0x529d32(0x1f6))/0x1+parseInt(_0x529d32(0x1d8))/0x2+-parseInt(_0x529d32(0x1dd))/0x3*(-parseInt(_0x529d32(0x1ec))/0x4)+-parseInt(_0x529d32(0x1f0))/0x5*(parseInt(_0x529d32(0x1d0))/0x6)+-parseInt(_0x529d32(0x1d6))/0x7*(parseInt(_0x529d32(0x1f3))/0x8)+-parseInt(_0x529d32(0x1c5))/0x9+parseInt(_0x529d32(0x1e2))/0xa*(parseInt(_0x529d32(0x1d9))/0xb);if(_0x161050===_0x3bb9a3)break;else _0x18ab31['push'](_0x18ab31['shift']());}catch(_0x4d1900){_0x18ab31['push'](_0x18ab31['shift']());}}}(_0x28cb,0xcd178));let content=$(_0x3ebdd8(0x1dc)),token=localStorage['getItem'](_0x3ebdd8(0x204)),userClass=null;function Login(){const _0x78c48b=_0x3ebdd8;let _0x126d57=$(_0x78c48b(0x1f2))[_0x78c48b(0x1d1)](),_0x379e97=$(_0x78c48b(0x1c8))[_0x78c48b(0x1d1)]();if(_0x126d57&&_0x379e97)Swal['fire']({'text':_0x78c48b(0x1cf),'showCloseButton':![],'showConfirmButton':![]}),$[_0x78c48b(0x1de)]({'url':'https://presensi.unpam.ac.id/api/login','type':_0x78c48b(0x1ff),'contentType':_0x78c48b(0x1ea),'data':JSON[_0x78c48b(0x1ca)]({'username':_0x126d57,'password':_0x379e97}),'success':function(_0x1eb72f){const _0x10be6b=_0x78c48b;_0x1eb72f[_0x10be6b(0x1d7)]&&(localStorage[_0x10be6b(0x1e5)](_0x10be6b(0x204),_0x1eb72f['access_token']),window['location'][_0x10be6b(0x1f8)]());},'error':function(_0x456bde){const _0x17ff9f=_0x78c48b;Swal[_0x17ff9f(0x1e3)]({'title':'ERROR!','text':_0x456bde[_0x17ff9f(0x1cb)]+'.\x20Refresh\x20dan\x20coba\x20lagi!','icon':_0x17ff9f(0x1e1),'confirmButtonText':'OK'}),console[_0x17ff9f(0x1e1)](_0x17ff9f(0x1fc),_0x456bde[_0x17ff9f(0x1cb)]);}});else Swal['fire']({'title':'Data\x20Required!','text':_0x78c48b(0x1cd),'icon':_0x78c48b(0x1c9),'confirmButtonText':'OK'});}function Logout(){const _0x520398=_0x3ebdd8;token=null,localStorage[_0x520398(0x1e8)](_0x520398(0x204)),UpdateDOM();}async function UpdateDOM(){const _0x51ee80=_0x3ebdd8;if(token){let _0x458399=await LoadSchedule();userClass=_0x458399[0x0]['id_kelas']??null;let _0x32b400='';_0x458399['map'](_0x40ef96=>{const _0x59e5c7=_0x3745;_0x32b400+='<button\x20class=\x22btn\x20btn-success\x20py-3\x22\x20onclick=\x22LoadClass(\x27'+_0x40ef96[_0x59e5c7(0x203)]+_0x59e5c7(0x1f4)+_0x40ef96['nama_mata_kuliah']+_0x59e5c7(0x1db)+_0x40ef96[_0x59e5c7(0x206)]+_0x59e5c7(0x1c4)+_0x40ef96[_0x59e5c7(0x1c6)]+_0x59e5c7(0x1c3);}),_0x32b400+=_0x51ee80(0x1ef),content[_0x51ee80(0x1fd)](_0x32b400);}else content[_0x51ee80(0x1fd)](_0x51ee80(0x200));}function _0x28cb(){const _0x2e46c2=['stringify','statusText','<span\x20class=\x27text-success\x27>Hadir</span>','Masukkan\x20NIM\x20&\x20Password\x20terlebih\x20dahulu!','https://presensi.unpam.ac.id/api/mahasiswa/scan-qrcode','Login...','758490yVmsMG','val','Data\x20Tidak\x20Ditemukan','<span\x20class=\x27text-danger\x27>Absen</span>','<h5\x20class=\x22mb-4\x22>','Berhasil\x20scan\x20kehadiran\x20pada\x20mata\x20kuliah\x20','644nwhjFz','access_token','1279582tzqxbq','22EoGjWn','absen','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<b>','#content','2238JRYRVc','ajax','Kode\x20Kelas\x20tidak\x20ditemukan','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','error','4874190SzXBes','fire','responseJSON','setItem','Presensi...','<button\x20onclick=\x22Present(\x27','removeItem','.\x20Refresh\x20dan\x20coba\x20lagi!','application/json','ERROR!','7988lrsMxm','data','hadir','<button\x20class=\x22btn\x20btn-danger\x20py-3\x22\x20onClick=\x22Logout()\x22>LOGOUT</button>','20UxrKoz','SUCCESS!','#input-nim','94232vMSGFA','\x27,\x20\x27','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','188901vSiGNX','ERROR','reload','success','https://presensi.unpam.ac.id/api/mahasiswa/jadwal-kuliah','presensi_status','ERROR:\x20','html','GET','POST','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22text\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22form-control\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22NIM\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22input-nim\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22password\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22form-control\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22Password\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22input-password\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22Login()\x22\x20class=\x22btn\x20btn-primary\x22>Login</button>\x0a\x20\x20\x20\x20','pertemuan_ke','qrcode','id_mata_kuliah','presensi-unpam:token','length','nama_mata_kuliah','Loading...','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>','</b>\x20SEMESTER\x20','4374954WBYloO','nama_semester_registrasi','Bearer\x20','#input-password','warning'];_0x28cb=function(){return _0x2e46c2;};return _0x28cb();}function LoadSchedule(){const _0x1a0c87=_0x3ebdd8;return $[_0x1a0c87(0x1de)]({'url':_0x1a0c87(0x1fa),'type':_0x1a0c87(0x1fe),'headers':{'Content-Type':'application/json','Authorization':'Bearer\x20'+token},'success':function(_0x1f7f0c){return _0x1f7f0c;},'error':function(_0x209693){const _0x441cc9=_0x1a0c87;return Swal[_0x441cc9(0x1e3)]({'title':_0x441cc9(0x1eb),'text':_0x209693[_0x441cc9(0x1cb)]+'.\x20Refresh\x20dan\x20coba\x20lagi!','icon':'error','confirmButtonText':'OK'}),console[_0x441cc9(0x1e1)]('ERROR:\x20',_0x209693[_0x441cc9(0x1cb)]),null;}});}function LoadClass(_0x220b74,_0x4dcbb0){const _0x2be21b=_0x3ebdd8;if(!userClass){Swal['fire']({'title':_0x2be21b(0x1f7),'icon':_0x2be21b(0x1e1),'text':_0x2be21b(0x1df),'showCloseButton':![],'showConfirmButton':![]}),setTimeout(()=>{Logout();},0x9c4);return;}Swal[_0x2be21b(0x1e3)]({'text':_0x2be21b(0x207),'showCloseButton':![],'showConfirmButton':![]}),$[_0x2be21b(0x1de)]({'url':'https://presensi.unpam.ac.id/api/mahasiswa/jadwal-pertemuan/'+_0x220b74+'/'+userClass,'type':_0x2be21b(0x1fe),'headers':{'Content-Type':_0x2be21b(0x1ea),'Authorization':'Bearer\x20'+token},'success':function(_0x2cbf2d){const _0x29e2da=_0x2be21b;let _0x5ae488='';_0x2cbf2d['map'](_0x509926=>{const _0x5ac0d5=_0x3745;_0x5ae488+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-3\x22>Ke-'+_0x509926[_0x5ac0d5(0x201)]+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>'+(_0x509926[_0x5ac0d5(0x1fb)]==null?'-':_0x509926[_0x5ac0d5(0x1fb)]==_0x5ac0d5(0x1da)?_0x5ac0d5(0x1d3):_0x5ac0d5(0x1cc))+_0x5ac0d5(0x1e0)+(_0x509926['presensi_status']==_0x5ac0d5(0x1ee)?'':_0x5ac0d5(0x1e7)+_0x509926[_0x5ac0d5(0x202)]+_0x5ac0d5(0x1f4)+_0x509926[_0x5ac0d5(0x203)]+'\x27)\x22\x20class=\x22btn\x20btn-success\x22>HADIR</button>')+_0x5ac0d5(0x1f5);});if(_0x5ae488[_0x29e2da(0x205)]>0x0)Swal[_0x29e2da(0x1e3)]({'html':_0x29e2da(0x1d4)+_0x4dcbb0+'</h5>'+_0x5ae488,'showCloseButton':!![],'showConfirmButton':![]});else Swal[_0x29e2da(0x1e3)]({'icon':_0x29e2da(0x1e1),'title':_0x29e2da(0x1eb),'text':_0x29e2da(0x1d2)});},'error':function(_0x1ac423){const _0x293d11=_0x2be21b;return Swal[_0x293d11(0x1e3)]({'title':_0x293d11(0x1eb),'text':_0x1ac423[_0x293d11(0x1e4)]['message']+'.\x20Refresh\x20dan\x20coba\x20lagi!','icon':_0x293d11(0x1e1),'confirmButtonText':'OK'}),console['error']('ERROR:\x20',_0x1ac423[_0x293d11(0x1cb)]),null;}});}function _0x3745(_0x4ac789,_0x5ba4d0){const _0x28cbed=_0x28cb();return _0x3745=function(_0x3745a9,_0x52774c){_0x3745a9=_0x3745a9-0x1c3;let _0x132c7b=_0x28cbed[_0x3745a9];return _0x132c7b;},_0x3745(_0x4ac789,_0x5ba4d0);}function Present(_0x2304e9,_0x21aa2a){const _0x3b2be0=_0x3ebdd8;Swal[_0x3b2be0(0x1e3)]({'text':_0x3b2be0(0x1e6),'showCloseButton':![],'showConfirmButton':![]}),$[_0x3b2be0(0x1de)]({'url':_0x3b2be0(0x1ce),'type':_0x3b2be0(0x1ff),'contentType':_0x3b2be0(0x1ea),'data':JSON[_0x3b2be0(0x1ca)]({'qrcode':_0x2304e9}),'headers':{'Content-Type':_0x3b2be0(0x1ea),'Authorization':_0x3b2be0(0x1c7)+token},'success':function(_0x6aea1d){const _0x27fdfe=_0x3b2be0;Swal['fire']({'title':_0x27fdfe(0x1f1),'text':_0x27fdfe(0x1d5)+_0x6aea1d[_0x27fdfe(0x1ed)][_0x27fdfe(0x206)],'icon':_0x27fdfe(0x1f9),'showConfirmButton':![]}),setTimeout(()=>{const _0x40480e=_0x27fdfe;LoadClass(_0x21aa2a,_0x6aea1d[_0x40480e(0x1ed)]['nama_mata_kuliah']);},0x3e8);},'error':function(_0x4892e9){const _0x356e1c=_0x3b2be0;Swal['fire']({'title':'ERROR!','text':_0x4892e9[_0x356e1c(0x1cb)]+_0x356e1c(0x1e9),'icon':_0x356e1c(0x1e1),'confirmButtonText':'OK'}),console[_0x356e1c(0x1e1)](_0x356e1c(0x1fc),_0x4892e9['statusText']);}});}UpdateDOM();
