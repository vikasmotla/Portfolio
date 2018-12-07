import React, { Component } from 'react';
import classes from './App.module.css';
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'




class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Header />
          {/*<div className={classes.secondDiv}>
            <Skills />
          </div>*/}
          <Footer/>
      </div>
    );
  }
}

export default App;
