import axios from "axios";

export const getNewsData = async ()=>{
    try{
        const api = `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_API_KEY}`
        // console.log(api)
        const res = await axios.get(api)
        return res
        // console.log(res)

    }catch(err){
        console.log(err)
    }
}