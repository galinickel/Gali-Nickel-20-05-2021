import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { toggleFavorite, getFavorites } from '../store/actions/index'

const List = props => {
    const dispatch = useDispatch()
    const cityList = useSelector((state) => state.cityList)
    const [favoritesToDisplay, setFavoritesToDisplay] = useState([])

    useEffect(() => {
        dispatch(getFavorites()).then(res => {
            setFavoritesToDisplay(res.payload)
        })
    }, [favoritesToDisplay.length,dispatch])

    const toggleFavoriteCity = city => {
        setFavoritesToDisplay([])
        dispatch(toggleFavorite(city))}

    const renderContents = renderArr => {
        if(props.listType==='searchOptions')  if (cityList === [] || !cityList) return
        return renderArr.map((city,idx) => {
            const isInFavorites = favoritesToDisplay.find((favoriteCity) => favoriteCity.Key === city.Key)
            return (
                <div className="item"
                key={idx}>
                    <div
                    className="header"
                        key={city.Key}
                        onClick={()=>props.onSelect(city)}
                        tabIndex="0">
                        <i className={`${city.Country.ID.toLowerCase()} flag`}></i>
                        {city.LocalizedName}
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
    return (
        <div className="ui divided list ">
            {props.listType === 'searchOptions' && renderContents(cityList)}
            {props.listType === 'favorites' && renderContents(favoritesToDisplay)}
        </div>)
}

export default List