import {useState,useEffect} from 'react'
import style from '../Notes/Notes.module.css'

function Notes() {
    let [note,setnote] = useState('')


    const handleChange = (e)=>{
        console.log(e.target.value)
        setnote(e.target.value)
        localStorage.setItem('notes',JSON.stringify(e.target.value))

    }
    useEffect(()=>{

        const getnote = localStorage.getItem('notes')
        if(getnote){
            setnote(JSON.parse(getnote))
        }

        
    },[])
  return (
    <div className={style.note}>
        <h2>All notes</h2>
        <textarea style={{width:'290px',height:'430px',overflow:'auto',backgroundColor:'transparent',border:'none',outline:'none'}} value={note} onChange={handleChange} />
    </div>
  )
}

export default Notes