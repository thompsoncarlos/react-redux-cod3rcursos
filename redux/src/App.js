import './App.css';
import React, { useState } from 'react'
import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
      <div className='linha'>
        <Interval></Interval>
      </div>
      <div className='linha'>
        <Sum></Sum>
        <Average></Average>
        <Random></Random>
      </div>
    </div>
  );
}

export default App;
