import axios from 'axios';

const url = 'https://community-open-weather-map.p.rapidapi.com/weather';


export const fetchWeather = async (city) => {
    try{
        const { data } = await axios.get(url,
            { headers: {
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key":"90e168cd4bmsh429567830c6d00fp1363b4jsneeb95050d853",
                    "useQueryString":true
                },     params:{
                    // 'callback':'test',
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





