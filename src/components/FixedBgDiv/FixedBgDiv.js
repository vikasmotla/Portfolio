import React, { Component } from 'react';
import classes from './FixedBgDiv.module.css';
import image from '../../assets/vikas_motla.jpg'


class FixedBgDiv extends Component {
  render() {
    var style={
      backgroundImage: `url(${image})`
    }
    return (
        <div className={classes.Fixed} style = {style}>
        </div>
    );
  }
}

export default FixedBgDiv;
