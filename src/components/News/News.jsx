import {useState,useEffect} from 'react'
import { getNewsData } from '../../apis/news'
import style from '../../components/News/News.module.css'

function News() {

    let [newsdata,setnewsdata] = useState({
        content:'',
        title:'',
        imgNews:''
    });

    useEffect(()=>{
       fetchNews()
        // console.log(newsdata[1].urlToImage)
       

    },[])

    const fetchNews = async()=>{
        const data = await getNewsData();
        console.log(data.data.articles[2].description)
        
        // return data.data.articles\
        const {description, title, urlToImage} = data.data.articles[16];
        setnewsdata({...newsdata,content:description,title:title,imgNews:urlToImage})
    
    }
    console.log(newsdata.imgNews)

  return (
    <div className={style.container}>
    <div className={style.head}>

    <img src={newsdata.imgNews}/>
    <div className={style.title}>
    <p>
    {newsdata.title}  
    </p>

    </div>

    </div>

    <div className={style.content}>
   <p>
    {newsdata.content}
   </p>


    </div>
    
    
    
    </div>
  )
}

export default News