import React, {Component} from 'react';
import classes from './Navbar.module.css';

class Navbar extends Component {

state = {
  isMenu:''
}

  menuToggle = () => {
    console.log('herer');
    let tempIsMenu = this.state.isMenu
    if (this.state.isMenu==='') {
      tempIsMenu = false
    }
    tempIsMenu = !tempIsMenu;
    this.setState({isMenu:tempIsMenu})
  }


  render() {

    let menuLine1 = classes.menuLine1
    let menuLine2 = classes.menuLine2
    let menuLine = classes.menuLine
    let smallScreenMenu = [].join(' ')

    if (this.state.isMenu===true) {
       menuLine1 = [classes.menuLine1, classes.menuLine1Toggle].join(' ');
       menuLine2 = [classes.menuLine2, classes.menuLine2Toggle].join(' ');
       menuLine = [classes.menuLine, classes.menuLineToggle].join(' ');
       smallScreenMenu = [classes.smallScreenMenu, classes.animationForMenuTrue].join(' ');
    }else if (this.state.isMenu===false) {
       smallScreenMenu = [classes.smallScreenMenu, classes.animationForMenuFalse].join(' ')
    }

    return (
      <div className={classes.Navbar}>
        <div className={classes.Logo}>
          <span className={classes.cursor}>
          logo
          </span>
        </div>
        <div className={classes.Item}><span className={classes.cursor} > Home </span></div>
        <div className={classes.Item}> <span className={classes.cursor} >Contact </span></div>
        <div className={classes.Item}> <span className={classes.cursor} >About </span></div>
        <div className={smallScreenMenu}></div>
        <div className={classes.menuIcon} onClick={this.menuToggle}>
          <div className={menuLine1}></div>
          <div className={menuLine2}></div>
          <div className={menuLine}></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
