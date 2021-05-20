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
                "Date": "2021-05-20T07:00:00+03:00",
                "EpochDate": 1621483200,
                "Sun": {
                    "Rise": "2021-05-20T05:41:00+03:00",
                    "EpochRise": 1621478460,
                    "Set": "2021-05-20T19:34:00+03:00",
                    "EpochSet": 1621528440
                },
                "Moon": {
                    "Rise": "2021-05-20T12:57:00+03:00",
                    "EpochRise": 1621504620,
                    "Set": "2021-05-21T02:25:00+03:00",
                    "EpochSet": 1621553100,
                    "Phase": "WaxingGibbous",
                    "Age": 9
                },
                "Temperature": {
                    "Minimum": {
                        "Value": 22.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 27.6,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "RealFeelTemperature": {
                    "Minimum": {
                        "Value": 21.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 31.6,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "RealFeelTemperatureShade": {
                    "Minimum": {
                        "Value": 21.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 26.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "HoursOfSun": 12.3,
                "DegreeDaySummary": {
                    "Heating": {
                        "Value": 0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Cooling": {
                        "Value": 7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "AirAndPollen": [
                    {
                        "Name": "AirQuality",
                        "Value": 0,
                        "Category": "Good",
                        "CategoryValue": 1,
                        "Type": "Ozone"
                    },
                    {
                        "Name": "Grass",
                        "Value": 0,
                        "Category": "Low",
                        "CategoryValue": 1
                    },
                    {
                        "Name": "Mold",
                        "Value": 0,
                        "Category": "Low",
                        "CategoryValue": 1
                    },
                    {
                        "Name": "Ragweed",
                        "Value": 0,
                        "Category": "Low",
                        "CategoryValue": 1
                    },
                    {
                        "Name": "Tree",
                        "Value": 0,
                        "Category": "Low",
                        "CategoryValue": 1
                    },
                    {
                        "Name": "UVIndex",
                        "Value": 11,
                        "Category": "Extreme",
                        "CategoryValue": 5
                    }
                ],
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false,
                    "ShortPhrase": "Sunshine and humid",
                    "LongPhrase": "Sunshine and humid",
                    "PrecipitationProbability": 0,
                    "ThunderstormProbability": 0,
                    "RainProbability": 0,
                    "SnowProbability": 0,
                    "IceProbability": 0,
                    "Wind": {
                        "Speed": {
                            "Value": 13,
                            "Unit": "km/h",
                            "UnitType": 7
                        },
                        "Direction": {
                            "Degrees": 334,
                            "Localized": "NNW",
                            "English": "NNW"
                        }
                    },
                    "WindGust": {
                        "Speed": {
                            "Value": 31.5,
                            "Unit": "km/h",
                            "UnitType": 7
                        },
                        "Direction": {
                            "Degrees": 327,
                            "Localized": "NNW",
                            "English": "NNW"
                        }
                    },
                    "TotalLiquid": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Rain": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Snow": {
                        "Value": 0,
                        "Unit": "cm",
                        "UnitType": 4
                    },
                    "Ice": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "HoursOfPrecipitation": 0,
                    "HoursOfRain": 0,
                    "HoursOfSnow": 0,
                    "HoursOfIce": 0,
                    "CloudCover": 5
                },
                "Night": {
                    "Icon": 35,
                    "IconPhrase": "Partly cloudy",
                    "HasPrecipitation": false,
                    "ShortPhrase": "Warm with patchy clouds",
                    "LongPhrase": "Warm with patchy clouds",
                    "PrecipitationProbability": 1,
                    "ThunderstormProbability": 0,
                    "RainProbability": 1,
                    "SnowProbability": 0,
                    "IceProbability": 0,
                    "Wind": {
                        "Speed": {
                            "Value": 7.4,
                            "Unit": "km/h",
                            "UnitType": 7
                        },
                        "Direction": {
                            "Degrees": 355,
                            "Localized": "N",
                            "English": "N"
                        }
                    },
                    "WindGust": {
                        "Speed": {
                            "Value": 24.1,
                            "Unit": "km/h",
                            "UnitType": 7
                        },
                        "Direction": {
                            "Degrees": 292,
                            "Localized": "WNW",
                            "English": "WNW"
                        }
                    },
                    "TotalLiquid": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Rain": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Snow": {
                        "Value": 0,
                        "Unit": "cm",
                        "UnitType": 4
                    },
                    "Ice": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "HoursOfPrecipitation": 0,
                    "HoursOfRain": 0,
                    "HoursOfSnow": 0,
                    "HoursOfIce": 0,
                    "CloudCover": 33
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            }
        ]
    }
    const dispatch = useDispatch()
    const currCity = useSelector((state) => state.city)
    const unit = useSelector((state) => state.unit)

    // const weather = useSelector((state) => state.weather)

    // useEffect(() => {
    //     dispatch(getWeather(currCity))
    //     console.log(weather,'weather!!!');
    // },[currCity.LocalizedName])

    const icon = weather.DailyForecasts[0].Day.Icon

    const renderImg = () => {
        if (icon < 10) return <img src={`https://developer.accuweather.com/sites/default/files/0${icon}-s.png`} />
        else return <img src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} />
    }
    const renderDegrees = () => {
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