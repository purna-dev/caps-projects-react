import React, { useEffect, useState } from 'react'
import style from './Movies.module.css'
import profile from '../../assets/profileimg/profiled.png'
import { useNavigate } from 'react-router-dom'
import { getMoviesData } from '../../apis/movies'

function Movies() {

    const [moviesData,setmoviesData] = useState([])
    const [genrelist,setgenrelist] = useState([])
    const navigate = useNavigate()
    const handleProfile = ()=>{
        navigate('/')
    }
    
    const getGenre = ()=>{
        if(localStorage.getItem('genre')){
            let g = localStorage.getItem('genre')
            // console.log(g)
            // newArr = g.split(',')
            setgenrelist(...genrelist,g.split(','))
            
            
        }

    }


    

    const getMovies = async()=>{
        let data = await getMoviesData()
        console.log(data[0].then((e)=>console.log(e)))
        console.log(data)
        data.forEach((d,i)=>{
            d.then((e)=>{
                console.log(e)
                setmoviesData(...moviesData,e)
            }).catch((err=>console.log(err)))
        })
        // data[0].then((e)=>setmoviesData(e)).catch((err)=>console.log(err))
        console.log(moviesData)

    }

    useEffect(()=>{
        getGenre()
        // console.log(genre)
        getMovies()
        console.log(moviesData)
        console.log(genrelist[0])


    },[])

    
  return (
    <div className={style.container}>

    <header>
        <h2>Super App</h2>
        <div className={style.profile} onClick={handleProfile}>
        <img src={profile}/>

        </div>
    </header>

    <section>
        <h3>Entertainment according to your choice</h3>
        <div>
            
            
            
                {genrelist.map((data,i)=>{
                   return (
                    <div>
                    <p>{genrelist[i]}</p>
                    <div className={style.poster}>
                    {moviesData[i]?.map((d,index)=>{
                        return (<img src={d.Poster}/>)
                    })}
                    </div>
                    </div>
                    
                    )
            })}
            
        </div>

    </section>

    </div>
  )
}

export default Movies