import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'
import './media-query.css'
import './dark-mode.css'
import Weather from './views/Weather'
import Favorites from './views/Favorites'
import Header from './cmps/Header'

const App = () => {
  const dayMode = useSelector((state) => state.dayMode)
  return (
    <div className={dayMode ? 'background-day' : 'background-night'}>
      <div className={dayMode ? 'ui  container main-app ' : 'ui  container main-app night'}>
        <BrowserRouter >
          <Header />
          <div className="App ui container  app-main ">
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/weather" exact component={Weather} />
          </div>
        </BrowserRouter >
      </div>
    </div>
  );
}
export default App;

