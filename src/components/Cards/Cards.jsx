import React from 'react';



const Cards = (props) => {



    const { selectedCity } = props;


    return (
        <div>
            <p>{selectedCity}</p>
        </div>
    )
};

export default Cards;