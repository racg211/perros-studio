import React from 'react';
import './App.css';


import Menu from './Components/Menu/index';
import Home from './Components/HomeSection/index'
import WhatWeDo from './Components/What We do/index'

function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <WhatWeDo/>

    </div>
  );
}

export default App;
