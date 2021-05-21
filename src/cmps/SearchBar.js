import { React, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setCurrCity, searchCity } from '../store/actions/index'

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
        dispatch(setCurrCity(city))
    }


    return (
        <div
            ref={wrapperRef}
            className=" ">
            <input type="text"
                onChange={onSearchType}
                value={city}
                onClick={() => setDisplay(!display)}
            />
            <div
                className="options-list"
                style={display? {transform: 'scaleY(1)'} : {transform: 'scaleY(0)'}}>
                <List onSelect={onSelect} listType={'searchOptions'} />
            </div>
        </div>
    )
}

export default SearchBar