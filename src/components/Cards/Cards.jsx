import React from 'react';

const Cards = ({ selectedCity: { name, coord, main, visibility, wind, weather, sys, timezone} })  => {

    // const { selectedCity } = props;
    console.log(name);
    // const today = new Date();
    // const dd = String(today.getDate()).padStart(2, '0');
    // const mm = String(today.getMonth() + 1).padStart(2, '0');
    // const yyyy = today.getFullYear();

    if(coord == null){
        return "Select your City";
    } else {
        return (
            <div>
            City: {name}, {sys['country']} <br />
            Sunrise: { sys.sunrise } <br/>
            Sunset: { sys.sunset } <br/>
            Coordinates: Longitude and Latitude: { coord['lon'] }, { coord['lat'] } <br />
            Current Temperature: {main['temp']}, {weather[0].description}<br />
            Fees Like: {main.feels_like}<br />
            Max Temp: {main.temp_max}, Min Temp: {main.temp_min}<br />
            Humidity: {main.humidity}<br />
            Visibility: {visibility}<br />
            Wind: {wind.speed}<br />
            </div>
            // renderObject()
        )
    }

};

export default Cards;