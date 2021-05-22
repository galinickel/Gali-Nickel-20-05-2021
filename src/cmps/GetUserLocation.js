
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrCity } from '../store/actions/index'


const GetUserLocation = () => {
    const dayMode = useSelector((state) => state.dayMode)
    const [msg, setMsg] = useState('Click to check the forecast for your location!')
    const dispatch = useDispatch()
    const success = position => { dispatch(setCurrCity(position.coords.latitude, position.coords.longtitude)) }
    const error = err => {console.log(err);
    setMsg('Please allow this app to access your location.')}
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    return (
        <div>
            <button
                className={dayMode ? 'ui button labeled icon' : 'ui button inverted basic labeled violet icon'}
                onClick={getLocation}
            >
                <i class="location arrow icon"></i>
Search My Location
            </button>
            <p>{msg}</p>
        </div>
    )
}


export default GetUserLocation

