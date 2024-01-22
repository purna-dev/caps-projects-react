import axios from "axios";

export const getMoviesData = ()=>{


    // const [genre,setgenre] = useState([]);
    let newArr = []

    let newData =[]



    const getGenre = ()=>{
        if(localStorage.getItem('genre')){
            let g = localStorage.getItem('genre')
            // console.log(g)
            newArr = g.split(',')
            
            
        }

    }

    getGenre()


// console.log(newArr)
    try{
       let movieList = newArr.map(async(e,i)=>{

        const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${e}`

            // console.log(api)
            const res = await axios.get(api)
        // console.log(res.data.Search.slice(0,4))
        newData.push(res.data.Search.slice(0,4))
        // console.log(newData)
        return newData;
        })

                return movieList


        
        // const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=horror`
        // console.log(api)
        // const res = await axios.get('api')
        // return res
        // console.log(res)

    }catch(err){
        console.log(err)
    }


//     useEffect(()=>{
// getGenre();
//     },[])

}