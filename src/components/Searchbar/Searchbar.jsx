import React, { useState } from 'react';


const Searchbar = (props) => {

    const { updateSelectedCity } = props;
    const [newCity, setCity] = useState("");


    const handleChange = e => {
        setCity(e.target.value);
        console.log(newCity);
    }

    const handleSubmit = e => {
        updateSelectedCity(newCity);
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