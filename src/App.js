import './App.css';
import React, { Component } from 'react';
import Bar from './components/Bar';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Cuerda from './components/Cuerda';
  
function App() {
  return (
    <div className="App">
      <Register/>
     <LogIn/>
     <Bar/>
     <Cuerda/>
    </div>
  );
}
export default App;
