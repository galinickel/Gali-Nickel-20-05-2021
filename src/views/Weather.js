import React from 'react'
import SearchBar from '../cmps/SearchBar'
import WeatherDisplay from '../cmps/WeatherDisplay'


const Weather = () => {
    return (
        <div className="ui container">
            
            <SearchBar />
            <WeatherDisplay/>
        </div>
    );
}
export default Weather;