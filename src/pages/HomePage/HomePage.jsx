import React from 'react'
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import Notes from '../../components/Notes/Notes'
import News from '../../components/News/News'
import Weather from '../../components/Weather/Weather'
import Timer from '../../components/Timer/Timer'
import style from './HomePage.module.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const handleBrowse = ()=>{
    navigate('/movies')

  }
  return (
    <>

        <div className={style.wrapper}>
        <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>


        <div style={{display:'flex',alignItems:'center',gap:'0.8rem'}}>
          <div>
              
        <ProfileCard />
        <Weather/>
          </div>

          <div>
        <Notes/>

          </div>

        

        </div>
          <div>
          <Timer/>

          </div>


        </div>
        <div>
        <News/>

        </div>

        </div>  
        <button className={style.browse} onClick={handleBrowse}>Browse</button>
    </>
  )
}

export default HomePage