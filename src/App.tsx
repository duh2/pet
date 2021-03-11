import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Modules/Header";
import {NavBar} from "./Modules/NavBar";
import Products from "./Modules/MainPart";

function App() {
  return (
      <div>
    <Header/>
    <NavBar/>
    <Products/>
      </div>
  );
}

export default App;
