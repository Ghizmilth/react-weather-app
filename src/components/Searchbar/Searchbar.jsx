import React, { useState } from 'react';


const Searchbar = (props) => {

    const { updateSelectedCity } = props;
    const [newCity, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSelectedCity(newCity);
        e.target.reset();
        console.log(newCity);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="cityName" placeholder="Input City" onChange={handleChange} />
                <button type="submit">Check Weather</button>
            </form>
        </div>
    )
};

export default Searchbar;