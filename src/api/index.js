import axios from 'axios';
require('dotenv').config();

const url = 'https://community-open-weather-map.p.rapidapi.com/weather';

export const fetchWeather = async (city) => {
    try{
        const { data } = await axios.get(url,
            { headers: {
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_WEATHER_API_KEY,
                    "useQueryString":true
                },     params:{
                    "units":"imperial",
                    "mode": "",
                    "q":city
                }
    })
    console.log(data);
    return data;

    } catch(error) {
        console.log(error);
    }
}





