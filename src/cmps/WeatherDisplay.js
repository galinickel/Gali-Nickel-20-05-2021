import { React, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/actions/index'

const WeatherDisplay = () => {
    const dispatch = useDispatch();
    const currCity = useSelector((state) => state.city);
    const dayMode = useSelector((state) => state.dayMode)
    const unit = useSelector((state) => state.unit);
    const weather = useSelector((state) => state.weather);
    let icon;

    useEffect(() => {
        dispatch(getWeather(currCity))
    }, [dispatch, currCity]);

    (function () {
        if (weather.DailyForecasts) { dayMode ? icon = weather.DailyForecasts[0].Day.Icon : icon = weather.DailyForecasts[0].Night.Icon }
    })()

    const renderImg = () => {
        if (!icon) return
        else if (icon < 10) return <img src={`https://developer.accuweather.com/sites/default/files/0${icon}-s.png`} alt="weather icon" />
        else return <img src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} alt="weather icon" />
    }
    const renderDegrees = () => {
        if (!icon) return
        const degrees = weather.DailyForecasts[0].Temperature.Maximum.Value
        return unit ? degrees : degrees * 9 / 5 + 32
    }


    return (<><div>
        <div className="ui card">
            <div className="content">
                {weather.DailyForecasts && <><h3 className="header">
                    {currCity.LocalizedName}
                </h3>
                    <p className="ui description">
                        {renderImg()}
                        {renderDegrees()} °
                </p>
                    {/* {weather.DailyForecasts[0].Day.ShortPhrase} */}</>}
                {!weather.DailyForecasts &&
                    <div>
                        <h4>Error</h4>
                        <p>We're having some technical difficulties! Please try again later.</p></div>
                }
            </div>
        </div>
    </div>
    </>)
}

export default WeatherDisplay