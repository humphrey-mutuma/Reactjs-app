import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component{

// function App() {
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>

    </div>
  );
  };
}

export default App;
