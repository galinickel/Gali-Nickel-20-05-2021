import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <h3>Weather</h3>
            </Link>
            <div className="right menu">
                <Link to="/favorites" className="item">
                    <h3>Favorites</h3>
                </Link>
            </div>
        </div>
    );
}
export default Header;