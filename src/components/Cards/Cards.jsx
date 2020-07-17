import React, { useState, useEffect } from 'react';



const Cards = (props)  => {

    const { selectedCity } = props;
    console.log(selectedCity);

    return (
        <div>
            <p>This is Cards component of { selectedCity.cod } </p>
            <p>This is Cards component of { selectedCity.id } </p>
        </div>
    )
};

export default Cards;