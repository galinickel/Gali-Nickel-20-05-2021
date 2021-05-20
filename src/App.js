import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './cmps/Header'

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter >
        <Header />
        <div className="App ui container">
        {/* render components here */}
        </div>
      </BrowserRouter >
    </div>
  );
}
export default App;

