import React from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  return (
    <div className='App'>
    <Component1/>
    <Component2 name="ABCD"/>
    <Component3/>
    </div>
  );
}

export default App;
