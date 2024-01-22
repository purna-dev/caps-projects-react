import axios from "axios";

export const getWeathersData = async ()=>{
    try{
        const api = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Bokaro`
        // console.log(api)
        const res = await axios.get(api)
        return res
        // console.log(res)

    }catch(err){
        console.log(err)
    }
}