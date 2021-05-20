import { React } from 'react'
import List from '../cmps/List'


const Favorites = () => {
    return (
        <div className="ui container">
            <List listType={'favorites'}  />
        </div>
    );
}

export default Favorites;