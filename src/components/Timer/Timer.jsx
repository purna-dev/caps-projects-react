import React, { useState } from 'react'
import style from './Timer.module.css'
import up from '../../assets/icons/up.png'
import down from '../../assets/icons/down.png'
import styled,{ keyframes,css } from 'styled-components'


function Timer() {
    let [hour,sethour] = useState(0)
    let [minute,setminute] = useState(0)
    let [seconds,setseconds] = useState(0)

    let [timer,settimer] = useState({
        hr:0,
        min:0,
        sec:0
    })


    
//         let spin = keyframes`
//         from {background-color: red;}
//   to {background-color: yellow;}
//       `;
      
//         let stylesCir = styled.div`
//             padding:'0.3rem',border:'7px solid #FF6A6A',
//             width:'230px',height:'230px',
//             borderRadius:'50%',
//             transition:'all 0.3s',
//             animation: ${spin} 2s linear infinite
            
            
//         `
    

    const handleUp = (event)=>{

        console.log(event)
       if(event === 'hour'){
         
        if(hour>=12){
            sethour(12)
        }
        else{
            sethour(++hour)

        }
       }

       if(event === 'minute'){
         
        if(minute>=60){
            setminute(60)
        }
        else{
            setminute(++minute)

        }
       }

       if(event === 'seconds'){
         
        if(seconds>=60){
            setseconds(60)
        }
        else{
            setseconds(++seconds)

        }
       }

    }
    const handleDown = (event)=>{
        if(event === 'hour'){
            if(hour<=0){
                sethour(0)
            }
            else{
                sethour(--hour)
    
            }
        }


        if(event === 'minute'){
            if(minute<=0){
                setminute(0)
            }
            else{
                setminute(--minute)
            }
        }

        if(event === 'seconds'){
            if(seconds<=0){
                setseconds(0)
            }
            else{
                setseconds(--seconds)
            }
        }
    }

    const handleStart = (hour,minute,seconds)=>{
        console.log(hour,minute,seconds)
        
        settimer({hr:0,min:0,sec:0})
        timer.sec = 0;
        timer.min =0;
        timer.hr = 0;
        console.log(timer)

        function start(){
            console.log('start')

            if(hour>0 && minute>0 && seconds>0 || minute > 0 && hour > 0&&seconds===0){

                settimer({...timer,hr:timer.hr,min:timer.min,sec:++timer.sec})
                if(timer.sec === 60){
                settimer({...timer,hr:timer.hr,min:++timer.min,sec:0})
                timer.sec = 0;

                    console.log('60sec')
                }
                if(timer.min === 60){
                settimer({...timer, hr:++timer.hr})
                timer.min = 0;


                }
                if(timer.hr === 12){
                    timer.hr =0
                }
                const interval = setTimeout(start,100)

                
                // settimer({...timer, sec:0})

                



            
                if(timer.hr === hour && timer.min === minute && timer.sec === seconds){
                    clearTimeout(interval)
                }

            }


            if(hour>0 && seconds===0 && minute === 0){

                settimer({...timer,hr:timer.hr,min:timer.min,sec:++timer.sec})
                if(timer.sec === 60){
                settimer({...timer,hr:timer.hr,min:++timer.min,sec:0})
                timer.sec = 0;

                    console.log('60sec')
                }
                if(timer.min === 60){
                settimer({...timer, hr:++timer.hr})
                timer.min = 0;


                }
                const interval = setTimeout(start,100)

                
                // settimer({...timer, sec:0})

                



            
                if(timer.hr === hour){
                    clearTimeout(interval)
                }

            }

            if(seconds > 0 && hour===0 && minute === 0){

                settimer({sec:++timer.sec})


                const interval = setTimeout(start,100)

            
                if(timer.sec === seconds){
                    clearTimeout(interval)
                }

            }
            if(minute > 0 && hour === 0&&seconds===0){
                let newsec = 0


                settimer({...timer,hr:timer.hr,min:timer.min,sec:++timer.sec})
                if(timer.sec === 60){
                settimer({...timer,hr:timer.hr,min:++timer.min,sec:newsec})

                    console.log('60sec')
                }
                if(timer.sec>=60){
                    console.log('increased')
                // settimer({...timer, sec:0})
                timer.sec = 0;
                    console.log(timer)
                    // clearTimeout(interval)

                }
                const interval = setTimeout(start,100)

                
                // settimer({...timer, sec:0})

                



            
                if(timer.min === minute){
                    clearTimeout(interval)
                }

            }

            if(minute > 0 && hour === 0&& seconds>0){

                let newsec = 0


                settimer({...timer,hr:timer.hr,min:timer.min,sec:++timer.sec})
                if(timer.sec === 60){
                settimer({...timer,hr:timer.hr,min:++timer.min,sec:newsec})

                    console.log('60sec')
                }
                if(timer.sec>=60){
                    console.log('increased')
                // settimer({...timer, sec:0})
                timer.sec = 0;
                    console.log(timer)
                    // clearTimeout(interval)

                }
                const interval = setTimeout(start,100)

                
                // settimer({...timer, sec:0})

                



            
                if(timer.min === minute && timer.sec === seconds){
                    clearTimeout(interval)
                }

            }




            

        }

        start();
    }

  return (
    <div className={style.container}>
    
    <div className={style.left}>


    <div className={style.circle}>

    <div style={{
        padding:'0.3rem',border:'7px solid #FF6A6A',
            width:'155px',height:'155px',
            borderRadius:'50%',
            transition:'all 0.3s',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
    }}>

    <div className={style.time}>
        {timer.hr>10?'':'0'}{timer.hr} : {timer.min>10?'':'0'}{timer.min} : {timer.sec>10?'':'0'}{timer.sec}
    </div>
      

    </div>

    </div>

    </div>

   <div className={style.r}> 
    <div className={style.right}>

    <div>
        <span>Hours</span>
        <div>
            <button onClick={()=>handleUp('hour')}>
                <img src={up}/>
            </button>
            <p>{hour<10?'0':''}{hour}</p>
            <button onClick={()=>handleDown('hour')}>
                <img src={down}/>
            </button>
        </div>
    </div>

    <div style={{fontSize:'2.3rem',marginTop:'1.5rem',fontWeight:'200'}}>:</div>
    
    <div>
        <span>Minutes</span>

        <div>
            <button onClick={()=>handleUp('minute')}>
                <img src={up}/>
            </button>
            <p>{minute<10?'0':''}{minute}</p>
            <button onClick={()=>handleDown('minute')}>
                <img src={down}/>
            </button>
        </div>
    </div>
    <div style={{fontSize:'2.3rem',marginTop:'1.5rem',fontWeight:'200'}}>:</div>


    <div>
        <span>Seconds</span>
        <div>
            <button onClick={()=>handleUp('seconds')}>
                <img src={up}/>
            </button>
            <p>{seconds<10?'0':''}{seconds}</p>
            <button onClick={()=>handleDown('seconds')}>
                <img src={down}/>
            </button>
        </div>
    </div>


    

    </div>

    <button className={style.start} onClick={()=>handleStart(hour,minute,seconds)}>Start</button>



    </div>
    
    
    </div>
  )
}

export default Timer