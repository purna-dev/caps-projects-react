import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './GenreCard.module.css'
import action from '../../assets/genreimg/action.png'
import drama from '../../assets/genreimg/drama.png'
import romance from '../../assets/genreimg/romance.png'
import thriller from '../../assets/genreimg/thriller.png'
import western from '../../assets/genreimg/western.png'
import horrer from '../../assets/genreimg/horrer.png'
import fantasy from '../../assets/genreimg/fantasy.png'
import music from '../../assets/genreimg/music.png'
import friction from '../../assets/genreimg/friction.png'


function GenreCard() {

    const navigate = useNavigate()

    let [lengthErr,setlengthErr] = useState(false);

    const [categories,setcategories] = useState([]);

    

    const genre =[
        {
            id:'Action',
            color:'#FF5209',
            img:action,

        },
        {
            id:'Drama',
            color:'#D7A4FF',
            img:drama,

        },{
            id:'Romance',
            color:'#148A08',
            img:romance,

        },{
            id:'Thriller',
            color:'#84C2FF',
            img:thriller,

        },{
            id:'Western',
            color:'#902500',
            img:western,

        },{
            id:'Horror',
            color:'#7358FF',
            img:horrer,

        },{
            id:'Fantasy',
            color:'#FF4ADE',
            img:fantasy,

        },{
            id:'Music',
            color:'#E61E32',
            img:music,

        },{
            id:'Fiction',
            color:'#6CD061',
            img:friction,

        }
    ]
    // let arr = []

    // genre.forEach((e,i)=>{
     
    //     arr.push(e.id)
    // })
    // console.log(arr)

    

    const removecategory = (category)=>{
      console.log(category)
      let newArr = categories.filter((value)=>{
        return value !==category;

      })
    //   console.log(newArr)
      setcategories(newArr)


      
    }


    const handleNext = ()=>{
        if(categories.length<3){
            setlengthErr(true)
            return;
        }
            localStorage.setItem('genre',categories)

            navigate('/')

    }

    
    useEffect(()=>{
        console.log(categories)
        if(categories.length>=3){
            setlengthErr(false)
            return;
        }
      },[categories])
  
    

    
  return (
    <>
    <div className={style.container}>
    <div className={style.text}>
        <h1>Super app</h1>
        <p>Choose your entertainment category</p>

        <div className={style.category}>
          
            {categories.map((category,i)=>(
                <div key={i} > 


                
                {category} 

                <button onClick={()=>removecategory(category)}>X</button>
                
                 </div>
            ))}
        </div>

        <div className={style.err}>
            
        {lengthErr?  <p >❗ Minimum 3 category required</p>:<></>}
        </div>

    </div>

    
    <div className={style.grid}>

    {
        genre.map((ele,i)=>{
            return <Block data={ele} key={i} setcategories={setcategories} categories={categories} />
        })
    }

    <div className={style.next}>
        <button onClick={handleNext}>next page</button>
    </div>

    </div>
    </div>
    </>

  )
}

const Block = ({data,categories,setcategories})=>{
    let [isselected,setisselected] = useState(false);
    useEffect(()=>{
        const val = categories.includes(data.id) === true;
        setisselected(val);
    })



    

    // console.log(isselected)
    const handleClick = (value)=>{

        // setcategories([...categories,value])

        

        let check = categories.filter((list)=>{
            return list === value;

        })
        console.log(check)
        console.log(check.length)

        if(!check.length){
        setcategories([...categories,value])
            

        }else{
            // categories.pop();
            // let x = categories.indexOf(value)
            // categories.splice(x,1);

            // setcategories([...new Set(categories)])
            let newArr = categories.filter((list)=>{
                return list !==value;
        
              })
              setcategories(newArr)

            // console.log(categories)
        // setcategories([...categories,value])

        }


        // console.log(data)
    // console.log(categories)


    }

    

   return <div onClick={()=>{ 
    handleClick(data.id) 
    setisselected(!isselected) 
   }} style={{height:'155px',width:'165px',padding:'0.5rem',borderRadius:'0.6rem' ,cursor:'pointer',border:`${isselected?'5px solid green':'5px solid white'}`,backgroundColor:`${data.color}`}}> 
            <p style={{fontSize:'1.1rem'}}>{data.id}</p>
            <img src={data.img} style={{width:'100%',marginTop:'1.1rem'}}/>
          </div>
}

export default GenreCard