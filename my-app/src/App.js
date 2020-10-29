import React from 'react';
import './App.css';
import { Weather } from './GQL';
import UserLocation from './location';
require("dotenv").config();


export default function App() {

  function refresh() {
    window.location.reload(false);
  }
  
    return (
      <div className="body">
          <div className="App">
            <h1>Hello There!</h1>
            <UserLocation />
            <Weather />
              <div>
                  <button onClick={refresh} >Refresh</button>
              </div>
          </div>
      </div>
      
    );
}
