import React, { useState } from 'react';
import "./App.css";
import { Searchbar, Cards } from './components';

function App() {

    // This is used to get info from Searchbar and pass it to Cards component
    const [ selectedCity, setSelectedCity] = useState([]);


    const updateSelectedCity = newCity =>  {
        setSelectedCity(newCity);
    };

    console.log("this is CURRENT city:   " + selectedCity);

      return (
        <div className="App">
          <Searchbar updateSelectedCity={updateSelectedCity} />
          <Cards selectedCity={selectedCity}/>
        </div>
    )
}

export default App;
