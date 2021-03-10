import './App.scss';
import React,{useState} from "react"
import {motion, AnimatePresence} from 'framer-motion'

const orang = [
  {id:0,nama:"Raden Haryosatyo Wisjnunandono",angkatan:"2020",jurusan:"STEI (belom jurusan)",funfact:"Gabisa makan bihun, mau masuk if ato el, masuk arc karena ingin bisa bikin hal yang bisa dilihat hasilnya, dari Jakarta"},
  {id:1,nama:"Marcellus Michael Herman Kahari",angkatan:"2020",jurusan:"STEI (belom jurusan)",funfact:"Keos tapi belum nyicil, rencana jurusan IF, alasan masuk ARC ingin mempelajari web development lebih lanjut, Asal Semarang"},
  {id:2,nama:"Anggoro Maliky",angkatan:"2020",jurusan:"STEI (belum peminatan)",funfact:"Anak STEI tapi bukan weaboo, Rencana jurusan IF/STI, Alasan masuk ARC untuk memperdalam webdev dan butuh unit untuk mengisi waktu, Asal Magetan"},
  {id:3,nama:"Rizky Akbar Asmaran",angkatan:"2020",jurusan:"STEI (belum peminatan)",funfact:"lulus tahun 2019 masuk tahun 2020 dan gapunya temen selama semester pertama, Rencana jurusan IF, Alasan masuk ARC karena ga punya unit terus tertarik webdev, Asal daerah Jakarta"},
  {id:4,nama:"Nando",angkatan:"",jurusan:"",funfact:""}, 
  {id:4,nama:"Nando",angkatan:"",jurusan:"",funfact:""}, 
  {id:4,nama:"Nando",angkatan:"",jurusan:"",funfact:""}, 
]

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

function App() {
  const [selector, setSelector] = useState(0)
  const [welcome, setWelcome] = useState(true)
  const [content, setContent] = useState(false)
  return (
    <div className="app">
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
      exit={{y:500}}
      transition={{duration:1, type:"spring",damping:8}}
      className="glass">
        <header>
          <h1>Tugas ARC</h1>
          <hr/>
          <span>M. S. Mazaya</span>
          <span>16720208</span>
          <hr/>
          <div className="buttons">
            {orang.map(x=><motion.button
            className={x.id}
            onClick={()=>setSelector(x.id)}
            whileHover={{
              backgroundColor:"#6C5CE7",
              y:-5,
              color:"white",
            }}
            >{x.nama.split(' ')[0]}</motion.button>)}
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
        </div>
      </motion.section>}
    </AnimatePresence>
    </div>
  );
}

export default App;
