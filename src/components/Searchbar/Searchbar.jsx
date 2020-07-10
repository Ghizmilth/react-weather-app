import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../../api';


const Searchbar = (props) => {

    const { updateSelectedCity } = props;
    const [newCity, setCity] = useState("")

    const [apiData, setData] = useState({});

    // useEffect( () => {
        const fetchAPI = async () => {
            setData(await fetchWeather(newCity));
        }

    // });

    console.log(apiData);

    const handleChange = e => {
        setCity(e.target.value);
        console.log(newCity);
    }

    const handleSubmit = e => {
        updateSelectedCity(newCity);
        fetchAPI();
        e.preventDefault();
    }

    console.log(newCity);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="cityName" placeholder="Input City" onChange={handleChange} />
                <input type="submit" value="Check Weather"/>
            </form>
        </div>
    )
};

export default Searchbar;