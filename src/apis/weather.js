import axios from 'axios'
const KEY = '?apikey=dWRWgogZNXfdk0HgKAeRAkpJ0nnMq5Yf'
const SEARCH_URL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`
const WEATHER_URL = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`

export const weatherAPI = {
    query,
    getWeather
}

async function query(term) {
    return axios.get(SEARCH_URL + KEY + '&q=' + term + '&language=en-us').then(res=>{
        return res.data
    })
}

async function getWeather(city) {
    return axios.get(WEATHER_URL + city.Key + KEY + '&language=en-us&details=true&metric=true').then(res=>  {
        return res.data
    })
}