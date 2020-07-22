import React from 'react';
import { Card, Typography, CardContent } from "@material-ui/core";
import styles from './Cards.module.css';


const Cards = ({ selectedCity: { name, coord, main, visibility, wind, weather, sys, timezone} })  => {

    if(coord == null){
        return "";
    } else {

        return (
            <div>
            <Card className={styles.root}>
            <CardContent>
                <Typography className={styles.title} gutterBottom>
                    {name}, {sys['country']}
                </Typography>
                <Typography variant="h5" component="h2">
                    {main['temp']}°F
                </Typography>
                <Typography className={styles.pos}>
                    Feels like: {main.feels_like}°F - Conditions: {weather[0].description}
                </Typography>
                <Typography variant="body2" component="p">
                    Min temp: {main.temp_min}°F - Max temp: {main.temp_max}°F
                </Typography>
                <Typography variant="body2" component="p">
                    Humidity: {main.humidity}%, Visibility: {visibility/1000} Miles
                    <br />
                    Wind: {wind.speed}mph
                </Typography>
            </CardContent>
        </Card>
            </div>

        )
    }

};

export default Cards;