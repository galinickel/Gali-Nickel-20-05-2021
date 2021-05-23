import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, getFavorites } from '../store/actions/index'

import ListItem from './ListItem'

const List = props => {
    const dispatch = useDispatch()
    const cityList = useSelector((state) => state.cityList)
    const favoriteCities = useSelector((state)=>state.favoriteCities)
    const [favoritesToDisplay, setFavoritesToDisplay] = useState([])
    const { listType } = props

    useEffect(() => {
        dispatch(getFavorites()).then(res => {
            setFavoritesToDisplay(res.payload)
        })
    }, [favoritesToDisplay.length])

    const toggleFavoriteCity = city => {
        dispatch(toggleFavorite(city))
        setFavoritesToDisplay([])
    }

    const renderContents = renderArr => {
        if (listType === 'searchOptions') if (cityList === [] || !cityList) return
        return renderArr.map(city => {
            const isInFavorites = favoritesToDisplay.find((favoriteCity) => favoriteCity.Key === city.Key)
            return <ListItem
            isInFavorites={isInFavorites}
            city={city}
            listType={listType}
            toggleFavoriteCity={toggleFavoriteCity}
            key={city.Key}
            />       
        })
    }
    return (<div className={listType === 'favorites' ? 'ui container' : null}>
        <div className={listType === 'favorites' && favoritesToDisplay.length ? 'ui relaxed grid ' : 'ui divided list'}>
            {listType === 'searchOptions'  && renderContents(cityList)}
            {listType === 'favorites' && renderContents(favoritesToDisplay)}
            {listType === 'favorites' && !favoritesToDisplay.length && <div className="favorites-empty-msg"> <p>
                It seems awfully empty in here! Why not search some cities, and add them to your favorites?</p></div>}
        </div>
    </div>)
}

export default List