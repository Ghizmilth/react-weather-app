import React, { useState } from 'react';


const Searchbar = (props) => {

    const { updateSelectedCity } = props;
    const initialInputState = { city: " " };
    const [newCity, setCity] = useState(initialInputState);
    const city = newCity;

    const handleChange = e => {
        setCity({...newCity, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        updateSelectedCity(city.cityName);
        e.preventDefault();
    }

    console.log(city);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="cityName" placeholder="Input City" onChange={handleChange}  />
                <input type="submit" value="Check Weather"/>
            </form>
        </div>
    )
};

export default Searchbar;