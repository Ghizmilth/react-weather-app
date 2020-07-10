import React, { useState } from 'react';
import { fetchWeather } from '../../api';


const Searchbar = (props) => {

    const { updateSelectedCity } = props;
    const [newCity, setCity] = useState("")

    let apiData = {};

    const fetchAPI = async () => {
        apiData = (await fetchWeather(newCity));

    }
    const handleChange = e => {
        setCity(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateSelectedCity(newCity);

        fetchAPI();
    }


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