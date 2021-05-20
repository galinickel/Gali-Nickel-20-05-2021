import { React, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/actions/index'

const WeatherDisplay = (props) => {
    const weather = {
        "Headline": {
            "EffectiveDate": "2021-05-22T08:00:00+03:00",
            "EffectiveEpochDate": 1621659600,
            "Severity": 4,
            "Text": "Pleasant this weekend",
            "Category": "mild",
            "EndDate": null,
            "EndEpochDate": null,
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2021-05-19T07:00:00+03:00",
                "EpochDate": 1621396800,
                "Sun": {},
                "Moon": {},
                "Temperature": {},
                "RealFeelTemperature": {},
                "RealFeelTemperatureShade": {},
                "HoursOfSun": 13,
                "DegreeDaySummary": {},
                "AirAndPollen": [],
                "Day": {},
                "Night": {},
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            }
        ]
    }
    const dispatch = useDispatch()
    const currCity = useSelector((state) => state.city) || {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        },
        "id": "WM8brNU"
    }


    return <div>Displaying weather for:
        {currCity.LocalizedName}
        {console.log(currCity,'currCity')}
    </div>
}

export default WeatherDisplay