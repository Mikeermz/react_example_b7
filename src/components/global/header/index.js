import React, { Fragment } from 'react';
import logo from './logo.svg';
import './style.css';
import Navbar from '../Navbar'

const Header = () => (
  <Fragment>
    <Navbar />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hola a todos
      </p>
    </header>
  </Fragment>
);

export default Header;
