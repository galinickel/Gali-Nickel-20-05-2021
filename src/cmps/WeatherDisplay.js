import { React, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/actions/index'

const WeatherDisplay = () => {
    const dispatch = useDispatch();
    const currCity = useSelector((state) => state.city);
    const unit = useSelector((state) => state.unit);
    let icon;
    const weather = useSelector((state) => state.weather);

    useEffect(() => {
        dispatch(getWeather(currCity))
    }, [currCity]);


    (function () {
        if (weather.DailyForecasts) icon = weather.DailyForecasts[0].Day.Icon;
    })()
    const renderImg = () => {
        if(!icon) return
        else if (icon < 10) return <img src={`https://developer.accuweather.com/sites/default/files/0${icon}-s.png`} alt="weather icon"/>
        else return <img src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} alt="weather icon"/>
    }
    const renderDegrees = () => {
        if(!icon) return
        const degrees = weather.DailyForecasts[0].Temperature.Maximum.Value
        return unit ? degrees : degrees * 9 / 5 + 32
    }
    return (<><div>
        <div className="ui card">
            <div className="content">
                <h3 className="header">
                    {currCity.LocalizedName}
                </h3>
                <p>
                    {renderImg()}
                    {renderDegrees()}
                </p>
            </div>
        </div>
    </div>
    </>)
}

export default WeatherDisplay