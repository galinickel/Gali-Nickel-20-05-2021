import { React, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrCity, searchCity } from '../store/actions/index'
import List from '../cmps/List'


const SearchBar = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')
    const [display, setDisplay] = useState(false)
    const wrapperRef = useRef(null)
    const currCity = useSelector((state) => state.city.LocalizedName)
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        setCity(currCity)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [currCity])


    const handleOutsideClick = (ev) => {
        const { current: wrap } = wrapperRef
        if (wrap && !wrap.contains(ev.target)) setDisplay(false)
    }

    const onSearchType = async (ev) => {
        ev.preventDefault()
        setCity(ev.target.value)
        dispatch(searchCity(city))
    }
    const onSelect = (city) => {
        // ev.preventDefault()
        setCity(city.LocalizedName)
        dispatch(setCurrCity(city))
    }


    return (
        <div
            ref={wrapperRef}
            className=" ">
                <h3> Search a City...</h3>
            <input type="text"
                placeholder="Type to Search..."
                onChange={onSearchType}
                value={city}
                onClick={() => setDisplay(!display)}
            />
            <div
                className="options-list"
                style={display ? { transform: 'scaleY(1)' } : { transform: 'scaleY(0)' }}>
                <List onSelect={onSelect} listType={'searchOptions'} />
            </div>
        </div>
    )
}

export default SearchBar