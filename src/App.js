import React, { useState } from 'react';
import "./App.css";
import { Searchbar, Cards } from './components';
import { fetchWeather } from './api';
import {Container, Typography} from "@material-ui/core";

function App() {

    const [ selectedCity, setSelectedCity ] = useState([]);


    const updateSelectedCity = async (newCity) =>  {
        setSelectedCity(await fetchWeather(newCity));
    };

      return (
          <div className="App">
          <Container maxWidth="md">
                  <Typography variant="h3"  gutterBottom>
                      Check the weather in any city in the world!
                  </Typography>
                  <Searchbar updateSelectedCity={updateSelectedCity} />
              <Cards selectedCity={selectedCity}/>

        </Container>
          </div>
    )
}

export default App;
