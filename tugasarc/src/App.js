import './App.scss';
import React,{useState} from "react"
import {motion, AnimatePresence} from 'framer-motion'
import Modal from 'react-modal'
const orang = [
  {id:0,nama:"Raden Haryosatyo Wisjnunandono",angkatan:"2020",jurusan:"STEI (belom jurusan)",funfact:"Gabisa makan bihun, mau masuk if ato el, masuk arc karena ingin bisa bikin hal yang bisa dilihat hasilnya, dari Jakarta",status:"cakru"},
  {id:1,nama:"Marcellus Michael Herman Kahari",angkatan:"2020",jurusan:"STEI (belom jurusan)",funfact:"Keos tapi belum nyicil, rencana jurusan IF, alasan masuk ARC ingin mempelajari web development lebih lanjut, Asal Semarang",status:"cakru"},
  {id:2,nama:"Anggoro Maliky",angkatan:"2020",jurusan:"STEI (belum peminatan)",funfact:"Anak STEI tapi bukan weaboo, Rencana jurusan IF/STI, Alasan masuk ARC untuk memperdalam webdev dan butuh unit untuk mengisi waktu, Asal Magetan",status:"cakru"},
  {id:3,nama:"Rizky Akbar Asmaran",angkatan:"2020",jurusan:"STEI (belum peminatan)",funfact:"lulus tahun 2019 masuk tahun 2020 dan gapunya temen selama semester pertama, Rencana jurusan IF, Alasan masuk ARC karena ga punya unit terus tertarik webdev, Asal daerah Jakarta",status:"cakru"},
  {id:4,nama:"James Chandra",angkatan:"2019",jurusan:"IF",funfact:"Lagi magang di TaniHub, Lagi berencana buat daftar jadi DSC Lead 2020 (gokil), pesannya kak James ke Cakru itu ''Nathaniel Jason php.''",status:"kru"}, 
  {id:5,nama:"Nathaniel Jason",angkatan:"2019",jurusan:"IF",funfact:"Lagi magang di Bukit Vista, Aslinya member TEC juga tapi lagi nggak aktif, pesannya ke cakru itu ''Tetap semangat, jangan skip day dan tugas, niscaya aman dari pencoretan.''",status:"kru"}, 
]

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

function App() {
  const [selector, setSelector] = useState(0)
  const [welcome, setWelcome] = useState(true)
  const [content, setContent] = useState(false)
  const [modal, setModal] =  useState(false)
  const [status, setStatus] = useState("cakru")
  return (
    <div className="app">
      <Modal
      isOpen={modal} onRequestClose={()=>setModal(false)}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img style={{maxHeight:"80vh", alignSelf:"center"}} src={status==='kru'?"kru.png":'cakru.jpg'} alt="dokumentasi"/>
        </div>
        <i class="fas fa-times 300" style={{fontSize:"30px",position:"absolute",right:"2vw",top:"2vh"}}
        onClick={()=>setModal(false)}
        ></i>
        </Modal>
      <AnimatePresence>
      {welcome && <motion.div
      initial={{y:-500}}
      animate={{y:0}}
      exit={{y:-700,type:'Inertia'}}
      transition={{duration:1, type:"spring",damping:8}}
      className="glass welcome">
        <div className="welcome">
          <h1>Selamat Datang!</h1>
          <p>Di Website Tugas ARC Muhammad Sulthan Mazaya - 16720208</p>
          <motion.button
          onClick={async ()=>{
            setWelcome(false);
            await timeout(1800);
            setContent(true)
          }}
          whileHover={{
            backgroundColor:"#6C5CE7",
            y:-5,
            color:"white",}}
          >Lihat Hasil</motion.button>
        </div>
      </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
      {content && <motion.section 
      initial={{y:500}}
      animate={{y:0}}
      exit={{y:800}}
      transition={{duration:1, type:"spring",damping:8}}
      className="glass">
        <header>
          <h1>Tugas ARC</h1>
          <hr/>
          <span>M. S. Mazaya</span>
          <span>16720208</span>
          <hr/>
          <div className="switch">
            <i class="fas fa-angle-left" onClick={()=>setStatus(status === "kru" ? "cakru" : "kru")}></i>
            <strong>{status}</strong>
            <i class="fas fa-angle-right" onClick={()=>setStatus(status === "kru" ? "cakru" : "kru")}></i>
          </div>
          <div className="buttons">
            {orang.filter(x=>x.status===status).map(x=><motion.button
            className={x.id}
            onClick={()=>setSelector(x.id)}
            whileHover={{
              backgroundColor:"#6C5CE7",
              y:-5,
              color:"white",
            }}
            >{ (status === 'kru' ? "Kak " : "") + x.nama.split(' ')[0]}</motion.button>)}
          </div>
        </header>
        <div 
        className="content">
          <h1>Profile Narasumber</h1>
            <div className="card">
              <p><strong>Nama     : </strong>{orang[selector].nama}</p>
              <br/>
              <p><strong>Angkatan : </strong>{orang[selector].angkatan}</p>
              <br/>
              <p><strong>Jurusan  : </strong>{orang[selector].jurusan}</p>
              <br/>
              <p><strong>Facts    : </strong>{orang[selector].funfact}</p>
            </div>
            <div className="flex-col">
              <motion.button
            whileHover={{
              backgroundColor:"#6C5CE7",
              y:-5,
              color:"white",
            }}
            onClick={()=>setModal(true)}
            >Lihat Dokumentasi</motion.button>
              <motion.button
              whileHover={{
                backgroundColor:"#6C5CE7",
                y:-5,
                color:"white",
              }}
              className="home"
              onClick={async ()=>{
                setContent(false);
                await timeout(1800);
                setWelcome(true);
              }}
              >Back to home</motion.button>
            </div>
        </div>
      </motion.section>}
    </AnimatePresence>
    </div>
  );
}

export default App;
