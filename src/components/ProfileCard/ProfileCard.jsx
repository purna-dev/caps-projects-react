import {useEffect, useState} from 'react'
import profile from '../../assets/profileimg/profile.png'

import style from '../ProfileCard/ProfileCard.module.css'



function ProfileCard() {

    let [userdetails,setuserdetails] = useState({});
    let [genre,setgenre] = useState([]);


    

    const getUserdata = ()=>{
        

        if(localStorage.getItem('userdata')){
            setuserdetails(JSON.parse(localStorage.getItem('userdata')))
        }
        if(localStorage.getItem('genre')){
            let x = localStorage.getItem('genre')
            console.log(x)
            const newArr = x.split(',')

            setgenre(newArr)
        }
    }
    console.log(genre)
    useEffect(()=>{
        getUserdata();

    },[])
  return (
    <div className={style.card}>

    <div className={style.photo}>

    <img src={profile}/>

    </div>
    <div className={style.text}>

    <p>{userdetails.name}</p>
    <p>{userdetails.email}</p>

    <h2>{userdetails.username}</h2>

    <div className={style.genre}>

    {genre.map((genreData,i)=>(
        <div key={i} >{genreData}</div>
    ))}

    </div>


    </div>
    
    
    </div>
  )
}

export default ProfileCard