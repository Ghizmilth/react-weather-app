import React, { useState } from 'react';


const Searchbar = (props) => {

    const { updateSelectedCity } = props;
    const initialInputState = { city: " " };
    const [eachCity, setCity] = useState(initialInputState);
    const city = eachCity;

    const handleChange = e => {
        setCity({eachCity, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateSelectedCity(eachCity);
    }

    console.log(city);

    return (
        <div>
            <form>
                <input name="cityName" placeholder="Input City" onChange={handleChange}  />
                <input type="submit" value="Check Weather" onSubmit={handleSubmit} />
            </form>
        </div>
    )
};

export default Searchbar;