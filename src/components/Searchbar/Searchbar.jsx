import React, { useState } from 'react';
import  SearchIcon  from "@material-ui/icons/Search";
import { Button, Input } from "@material-ui/core";
import styles from './Searchbar.module.css';


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
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input className="searchInput" name="cityName" color="primary" placeholder="e.g. San Francisco" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={styles.button}
                    startIcon={<SearchIcon />}
                >
                </Button>
            </form>
        </div>
    )
};

export default Searchbar;