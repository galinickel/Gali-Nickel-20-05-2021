import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { toggleFavorite, getFavorites,getWeather } from '../store/actions/index'

const List = props => {
    const dispatch = useDispatch()
    const cityList = useSelector((state) => state.cityList)
    const [favoritesToDisplay, setFavoritesToDisplay] = useState([])
    const { listType } = props
    
    useEffect(() => {
        dispatch(getFavorites()).then(res => {
            setFavoritesToDisplay(res.payload)
        })
    }, [favoritesToDisplay.length])

    const toggleFavoriteCity = city => {
        setFavoritesToDisplay([])
        dispatch(toggleFavorite(city))
    }


    const renderContents = renderArr => {
        if (listType === 'searchOptions') if (cityList === [] || !cityList) return
        return renderArr.map((city, idx) => {
            const isInFavorites = favoritesToDisplay.find((favoriteCity) => favoriteCity.Key === city.Key)
            return (
                <div className={`item ui ${listType === 'favorites' ? 'card favorite-item five wide column' : null} `}
                    key={idx}>
                    <div
                        className="header"
                        key={city.Key}
                        onClick={() => props.onSelect(city)}
                        tabIndex="0">
                        <i className={`${city.Country.ID.toLowerCase()} flag`}></i>
                        {city.LocalizedName}
                    </div>
                    <div>
                    </div>
                    <div
                        className="description"
                        onClick={() => toggleFavoriteCity(city)}
                        key={city.LocalizedName}>
                        <i className="plus circle icon"></i>
                        {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                    </div>
                </div>)
        })
    }
    return (<div className={listType==='favorites'?'ui container' : null}>
        <div className={listType==='favorites'&& favoritesToDisplay.length ? 'ui relaxed grid ' : 'ui divided list'}>
            {listType === 'searchOptions' && renderContents(cityList)}
            {listType === 'favorites' && renderContents(favoritesToDisplay)}
            {listType === 'favorites' && !favoritesToDisplay.length &&<div className="favorites-empty-msg"> <p>
                It seems awfully empty in here! Why not search some cities, and add them to your favorites?</p></div>}
        </div>
    </div>)
}

export default List