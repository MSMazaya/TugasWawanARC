(this.webpackJsonptugasarc=this.webpackJsonptugasarc||[]).push([[0],{25:function(a,n,e){},27:function(a,n,e){},40:function(a,n,e){"use strict";e.r(n);var t=e(1),s=e.n(t),i=e(14),c=e.n(i),r=(e(25),e(11)),u=e.n(r),l=e(15),j=e(10),o=(e(27),e(44)),b=e(43),d=e(20),h=e.n(d),m=e(2),k=[{id:0,nama:"Raden Haryosatyo Wisjnunandono",angkatan:"2020",jurusan:"STEI (belom jurusan)",funfact:"Gabisa makan bihun, mau masuk if ato el, masuk arc karena ingin bisa bikin hal yang bisa dilihat hasilnya, dari Jakarta",status:"cakru"},{id:1,nama:"Marcellus Michael Herman Kahari",angkatan:"2020",jurusan:"STEI (belom jurusan)",funfact:"Keos tapi belum nyicil, rencana jurusan IF, alasan masuk ARC ingin mempelajari web development lebih lanjut, Asal Semarang",status:"cakru"},{id:2,nama:"Anggoro Maliky",angkatan:"2020",jurusan:"STEI (belum peminatan)",funfact:"Anak STEI tapi bukan weaboo, Rencana jurusan IF/STI, Alasan masuk ARC untuk memperdalam webdev dan butuh unit untuk mengisi waktu, Asal Magetan",status:"cakru"},{id:3,nama:"Rizky Akbar Asmaran",angkatan:"2020",jurusan:"STEI (belum peminatan)",funfact:"lulus tahun 2019 masuk tahun 2020 dan gapunya temen selama semester pertama, Rencana jurusan IF, Alasan masuk ARC karena ga punya unit terus tertarik webdev, Asal daerah Jakarta",status:"cakru"},{id:4,nama:"James Chandra",angkatan:"2019",jurusan:"IF",funfact:"Lagi magang di TaniHub, Lagi berencana buat daftar jadi DSC Lead 2020 (gokil), pesannya kak James ke Cakru itu ''Nathaniel Jason php.''",status:"kru"},{id:5,nama:"Nathaniel Jason",angkatan:"2019",jurusan:"IF",funfact:"Lagi magang di Bukit Vista, Aslinya member TEC juga tapi lagi nggak aktif, pesannya ke cakru itu ''Tetap semangat, jangan skip day dan tugas, niscaya aman dari pencoretan.''",status:"kru"}];function g(a){return new Promise((function(n){return setTimeout(n,a)}))}var O=function(){var a=Object(t.useState)(0),n=Object(j.a)(a,2),e=n[0],s=n[1],i=Object(t.useState)(!0),c=Object(j.a)(i,2),r=c[0],d=c[1],O=Object(t.useState)(!1),f=Object(j.a)(O,2),p=f[0],x=f[1],y=Object(t.useState)(!1),C=Object(j.a)(y,2),v=C[0],w=C[1],S=Object(t.useState)("cakru"),A=Object(j.a)(S,2),I=A[0],N=A[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)(h.a,{isOpen:v,onRequestClose:function(){return w(!1)},children:[Object(m.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(m.jsx)("img",{style:{maxHeight:"80vh",alignSelf:"center"},src:"kru"===I?"kru.png":"cakru.jpg",alt:"dokumentasi"})}),Object(m.jsx)("i",{class:"fas fa-times 300",style:{fontSize:"30px",position:"absolute",right:"2vw",top:"2vh"},onClick:function(){return w(!1)}})]}),Object(m.jsx)(o.a,{children:r&&Object(m.jsx)(b.a.div,{initial:{y:-500},animate:{y:0},exit:{y:-700,type:"Inertia"},transition:{duration:1,type:"spring",damping:8},className:"glass welcome",children:Object(m.jsxs)("div",{className:"welcome",children:[Object(m.jsx)("h1",{children:"Selamat Datang!"}),Object(m.jsx)("p",{children:"Di Website Tugas ARC Muhammad Sulthan Mazaya - 16720208"}),Object(m.jsx)(b.a.button,{onClick:Object(l.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return d(!1),a.next=3,g(1800);case 3:x(!0);case 4:case"end":return a.stop()}}),a)}))),whileHover:{backgroundColor:"#6C5CE7",y:-5,color:"white"},children:"Lihat Hasil"})]})})}),Object(m.jsx)(o.a,{children:p&&Object(m.jsxs)(b.a.section,{initial:{y:500},animate:{y:0},exit:{y:800},transition:{duration:1,type:"spring",damping:8},className:"glass",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"Tugas ARC"}),Object(m.jsx)("hr",{}),Object(m.jsx)("span",{children:"M. S. Mazaya"}),Object(m.jsx)("span",{children:"16720208"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"switch",children:[Object(m.jsx)("i",{class:"fas fa-angle-left",onClick:function(){return N("kru"===I?"cakru":"kru")}}),Object(m.jsx)("strong",{children:I}),Object(m.jsx)("i",{class:"fas fa-angle-right",onClick:function(){return N("kru"===I?"cakru":"kru")}})]}),Object(m.jsx)("div",{className:"buttons",children:k.filter((function(a){return a.status===I})).map((function(a){return Object(m.jsx)(b.a.button,{className:a.id,onClick:function(){return s(a.id)},whileHover:{backgroundColor:"#6C5CE7",y:-5,color:"white"},children:("kru"===I?"Kak ":"")+a.nama.split(" ")[0]})}))})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"Profile Narasumber"}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Nama     : "}),k[e].nama]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Angkatan : "}),k[e].angkatan]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Jurusan  : "}),k[e].jurusan]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Facts    : "}),k[e].funfact]})]}),Object(m.jsxs)("div",{className:"flex-col",children:[Object(m.jsx)(b.a.button,{whileHover:{backgroundColor:"#6C5CE7",y:-5,color:"white"},onClick:function(){return w(!0)},children:"Lihat Dokumentasi"}),Object(m.jsx)(b.a.button,{whileHover:{backgroundColor:"#6C5CE7",y:-5,color:"white"},className:"home",onClick:Object(l.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return x(!1),a.next=3,g(1800);case 3:d(!0);case 4:case"end":return a.stop()}}),a)}))),children:"Back to home"})]})]})]})})]})},f=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(n){var e=n.getCLS,t=n.getFID,s=n.getFCP,i=n.getLCP,c=n.getTTFB;e(a),t(a),s(a),i(a),c(a)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),f()}},[[40,1,2]]]);
//# sourceMappingURL=main.c12fccda.chunk.js.map