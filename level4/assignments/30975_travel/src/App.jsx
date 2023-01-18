import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api/travelAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([])
   const [coordinates, setCoordinates] = useState({})
   // const [coordinates, setCoordinates] = useState({lat:  39.75735349299652, lng: -105.01069408854967})
    const [bounds, setBounds] = useState(  null )

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coordinates: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    console.log(coordinates, bounds)

    useEffect(() => {
        ////////////----------------------->
        getPlacesData(bounds.sw, bounds.ne)
        // getPlacesData()
            .then((data)=>{
                console.log(data)
                    setPlaces(data);
            })
    }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}><List places={places}/></Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                />
                </Grid>
            </Grid>
        </>
    )
}

export default App;