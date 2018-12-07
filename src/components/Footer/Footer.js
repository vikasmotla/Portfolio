import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className={classes.hireMe}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <h2>Hire Me</h2>
        <span></span>
        <span></span>
        <h4>I'm always interested about cool stuff. Are you minding a project? <p>Let's Talk. </p> </h4>
        <ul className={classes.social}>
          <li>facebook</li>
          <li>linkedin</li>
          <li>github</li>
        </ul>
      </div>
      </footer>
    );
  }
}

export default Footer;
