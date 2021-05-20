import { combineReducers } from 'redux';
import cityListReduer from './cityListReducer'
import weatherReducer from './weatherReducer'
import selectedCityReducer from './selectedCityReducer'
import favoritesReducer from './favoritesReducer'

export default combineReducers(
    {
        cityList: cityListReduer,
        weather: weatherReducer,
        city: selectedCityReducer,
        favoriteCities: favoritesReducer
    }
);
