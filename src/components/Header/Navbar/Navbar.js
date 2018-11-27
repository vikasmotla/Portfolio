import React, {Component} from 'react';
import classes from './Navbar.module.css';

class Navbar extends Component {

  render() {
    return (
    <div className={classes.Navbar}>
      <div className={classes.Logo} >  </div>
        <li className={classes.Item}></li>
    </div>
  );
  }
}

export default Navbar;
