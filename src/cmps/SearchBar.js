import { React, useState, useEffect, useRef } from 'react'
import {useDispatch } from 'react-redux';
import { setCurrCity,searchCity} from '../store/actions/index'

import List from '../cmps/List'


const SearchBar = (props) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')
    const [display, setDisplay] = useState(false)
    const wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [])

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
        console.log('now dispatching onSelect event');
        console.log(city,'the city in searchbar');
        dispatch(setCurrCity(city))
    }
    return (
        <div
            ref={wrapperRef}
            className="ui fluid search ">
            Search Bar
            <input type="text"
                onChange={onSearchType}
                value={city}
                onClick={() => setDisplay(!display)}
            />
            {display ? <div >
                <List  onSelect={onSelect} listType={'searchOptions'} />
            </div> : null}
        </div>
    )
}

export default SearchBar