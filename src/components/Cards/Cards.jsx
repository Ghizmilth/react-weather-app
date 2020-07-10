import React from 'react';



const Cards = (props) => {


    console.log("this are in card: " + props.data);
    const {selectedCity}  = props;


    return (
        <div>
            {/*<p>{selectedCity}</p>*/}
        </div>
    )
};

export default Cards;