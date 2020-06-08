import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          Hello from App.js updated 1 {name} Age = {age + 5}
          <br/>
          <Hello firstName={name} ></Hello>
        </div>
}

export default App;

