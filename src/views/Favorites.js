import { React } from 'react'
import { useHistory } from 'react-router-dom'
import List from '../cmps/List'
import { useDispatch } from 'react-redux';
import { setCurrCity } from '../store/actions/index'


const Favorites = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const onSelectCity = (city) => {
        dispatch(setCurrCity(city))
        history.push('/')
    }
    return (
        <div className="favorites-page">
            <p>Below you'll find your favorites. Clicking a favorite city will show you it's weather forecast.</p>
            <div className="ui horizontal divider">
                Your Favorites
</div>
            <List onSelect={onSelectCity} listType={'favorites'} />
        </div>
    );
}

export default Favorites;