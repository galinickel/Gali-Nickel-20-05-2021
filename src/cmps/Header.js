import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toggleUnit, toggleMode } from '../store/actions/index'
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    const dispatch = useDispatch()
    const unit = useSelector((state) => state.unit)
    const dayMode = useSelector((state) => state.dayMode)
    const date = new Date()
    const hours = date.getHours()
    useEffect(() => {
        if (hours < 18 && hours < 5) dispatch(toggleMode)
    }, [hours])
    const renderUnit = () => {
        return unit ? 'C' : 'F'
    }
    const renderDayMode = () => {
        return dayMode ? <><i className="sun icon"></i>Day Mode</> : <><i className="moon icon"></i>Night Mode</>
    }
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <h3>Weather</h3>
            </Link>
            <div className="right menu">
                <Link to="/favorites" className="item">
                    <h3>Favorites</h3>
                </Link>
                <button
                    className=" ui button"
                    onClick={() => dispatch(toggleUnit)}>
                    {renderUnit()}°
                        </button>
                <button
                    className=" ui labeled icon button"
                    onClick={() => dispatch(toggleMode)}>
                    {renderDayMode()}
                    
                </button>
            </div>
        </div>
    );
}
export default Header;