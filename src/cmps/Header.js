import { React } from 'react'
import { Link } from 'react-router-dom'
import { toggleUnit } from '../store/actions/index'
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    const dispatch = useDispatch()
    const unit = useSelector((state) => state.unit)

    const renderUnit = () => {
        return unit ? 'C' : 'F'
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
                    className="mini ui button"
                    onClick={() => dispatch(toggleUnit)}>{renderUnit()}°</button>
            </div>
        </div>
    );
}
export default Header;