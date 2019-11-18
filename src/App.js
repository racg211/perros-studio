import React from 'react';
import './App.css';


import Menu from './Components/Menu/index';
import Home from './Components/HomeSection/index';
import WhatWeDo from './Components/What We do/index';
import Works from './Components/Works/index'

function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <WhatWeDo/>
        <Works/>

    </div>
  );
}

export default App;
