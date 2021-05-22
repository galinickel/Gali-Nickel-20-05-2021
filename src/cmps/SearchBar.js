import { React, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrCity, searchCity } from '../store/actions/index'
import List from '../cmps/List'
import db from 'just-debounce'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')
    const [display, setDisplay] = useState(false)
    const wrapperRef = useRef(null)
    const currCity = useSelector((state) => state.city.LocalizedName)

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        // setCity(currCity)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [currCity])


    const handleOutsideClick = (ev) => {
        const { current: wrap } = wrapperRef
        if (wrap && !wrap.contains(ev.target)) setDisplay(false)
    }

    const onSearchType = async (ev) => {
        ev.preventDefault()
        const letter = ev.nativeEvent.data
        if (letter) {
            const letterCode = letter.charCodeAt(0)
            if(!(letterCode>= 65 && letterCode <= 90)&&!(letterCode>= 97 && letterCode<=122)) return
        }
        setCity(ev.target.value)
        const debouncedDispatch = db(() => dispatch(searchCity(city)), 850)
        debouncedDispatch()

    }
    const onSelect = (city) => {
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