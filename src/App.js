import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './style.css'
import './media-query.css'
import './dark-mode.css'
import Weather from './views/Weather'
import Favorites from './views/Favorites'
import Header from './cmps/Header'

const App = () => {
  return (
    
    <div className="ui  container">
      <BrowserRouter >
        <Header />
        <div className="App ui container  app-main">
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/weather" exact component={Weather} />
        </div>
      </BrowserRouter >
    </div>
  );
}
export default App;

