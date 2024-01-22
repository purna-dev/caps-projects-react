import {useEffect, useState} from 'react'
import { getWeathersData } from '../../apis/weather'
import style from '../../components/Weather/Weather.module.css'
import { WiCelsius,WiThermometer,WiStrongWind,WiHumidity } from "weather-icons-react";
function Weather() {

    const [weatherdata,setweatherdata] = useState({
        date:'',
        time:'',
        condition:{
            icon:'',
            text:''
        },
        temp:'',
        pressure:'',
        wind:'',
        humidity:''
    })
    
    const [date,setdate] = useState([])

    let x;
    useEffect(()=>{
        fetchWeathers()

        

    },[])

    const fetchWeathers = async()=>{
        const data = await getWeathersData();
        console.log(data.data.current)
        const {condition,humidity,last_updated,pressure_mb,temp_c,wind_kph} = data.data.current;
        // setweatherdata({...weatherdata,date:})

        // console.log(condition)
        setweatherdata({...weatherdata,date:last_updated,condition:{...condition,icon:condition.icon,text:condition.text},temp:temp_c,pressure:pressure_mb,wind:wind_kph,humidity:humidity})
        // return data.data.articles\
        // const {description, title, urlToImage} = data.data.articles[16];
        // setnewsdata({...newsdata,content:description,title:title,imgNews:urlToImage})
        let newDate = weatherdata.date.split(' ')
        console.log(date[0])

        // console.log(newDate[0])
        // const d = new Date(newDate[0])
        // console.log(d)
        setdate(newDate)
        
    
    }




  return (
    <div className={style.container}>

    <div className={style.head}>

    <p >
    {/* {x[2]}-{x[1]}-{x[0]} */}
    {date[0]}
    
    </p>
    <p>
        {date[1]} {date[1]>12?'PM':'AM'}
    </p>

    </div>
    <div className={style.body}>

    <div>
        <img style={{width:'80px'}} src={weatherdata.condition.icon}/>
        <span style={{fontSize:'1.5rem',fontWeight:'300'}}>
        {weatherdata.condition.text}
        
        </span>
    </div>

    <div style={{height:'55px',backgroundColor:'white',borderLeft:'1px solid #fff'}}>

    </div>

    <div>
        <p style={{display:'flex',alignItems:'center',fontSize:'2rem'}}>
            {weatherdata.temp}<WiCelsius size={70} color='#fff'/>
        </p>
        <div>
            <p style={{display:'flex',alignItems:'center',fontSize:'1rem',gap:'0.5rem',width:'120px'}}>
               <WiThermometer size={45} /> {weatherdata.pressure} mbar pressure
            </p>
        </div>
    </div>

    <div style={{height:'55px',backgroundColor:'white',borderLeft:'1px solid #fff'}}>

</div>

    <div>
        <div >
            
                
            
            <p style={{display:'flex',alignItems:'center',fontSize:'1rem',width:'130px',gap:'0.5rem'}}> <WiStrongWind size={45} /> {weatherdata.wind} Km/h Wind</p> 
        </div>
        <div>

        <p style={{display:'flex',alignItems:'center',fontSize:'1rem',width:'130px',marginTop:'0.9rem',gap:'0.5rem'}}>
            <WiHumidity size={45}/>
        {weatherdata.humidity}%
        Humidity
        </p>
        

        </div>
    </div>

    



    </div>



    </div>
  )
}

export default Weather