import React, {Component} from 'react';
import classes from './Header.module.css';
import Canvas from './Canvas/Canvas'

class Header extends Component {

  render() {
    return (<div className={classes.Header}>
      <div className={classes.HeaderContent}>
        <p className={classes.Content}>
          Hello, I'm <span className = {classes.Name}> Vikas Motla</span>. <br/>
        I'm a front end developer.
        </p>
        <div className={classes.Explore}>Explore</div>
      </div>
      <Canvas />
    </div>);
  }
}

export default Header;
