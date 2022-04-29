
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from 'react';
import { NavLink } from "react-router-dom";

import AppRouting from './app-routing';
import ganatanLogo from '../assets/params/images/logo/ganatan-logo.png';

import './app.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.title = 'react-starter';
    this.version = 'React version 18.0.0';
    console.log('00000000001:constructor');
  }

  componentDidMount() {
    console.log('00000000001:componentDidMount');
    let navMain = document.getElementById('navbarCollapse');
    console.log('00000000002:' + navMain);
    if (navMain) {
      console.log('00000000003:' + navMain);
      navMain.onclick = function () {
        console.log('00000000004:' + navMain);
        if (navMain) {
          console.log('00000000005:' + navMain);
          navMain.classList.remove("show");
        }
      }
    }
  }

  render() {
    const style = {
      backgroundColor: 'black',
    };
    console.log('00000000001:render');
    return (
      <div className="app">

        <header className="navbar navbar-expand-md navbar-dark fixed-top nga-navbar">
          <nav className="container" aria-label="Main navigation">
            <NavLink className="navbar-brand" to="/">
              <img src={ganatanLogo} width="25" height="25" alt="Ganatan Logo" />
              <span className="nga-logo mx-1">ganatan</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/"><i className="fas fa-home me-1"></i>Home</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about"><i className="far fa-question-circle me-1"></i>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact"><i className="fas fa-envelope me-1"></i>Contact</NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button type="button" className="btn btn-sm nga-btn-navbar me-2"><i className="fas fa-user-plus me-2"></i>Sign
                  up</button>
                <button type="button" className="btn btn-sm btn-outline-light me-2"><i
                  className="fas fa-sign-in-alt me-2"></i>Login</button>
              </form>
            </div>
          </nav>
        </header>
        <main>
          <AppRouting />
        </main>
        <footer className="nga-footer">
          <div className="py-3 text-center" style={style}>
            <div className="container">
              2022 :<a href="https://www.ganatan.com/"> www.ganatan.com</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }

}

export default App;