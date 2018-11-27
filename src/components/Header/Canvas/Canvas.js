import React, {Component} from 'react';

class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    // var canvas = document.getElementById('myCanvas')
    var c = canvas.getContext("2d");
    var w = window.innerWidth - 20;
    var h = window.innerHeight - 20;

    // var letters =
    var color = ['lightgreen', 'red', 'white', 'cyan']
    canvas.width = w;
    canvas.height = h;

    var dotsArray3 = [];
    document.addEventListener('mousedown', function(event) {
      for (var i = 0; i < 50; i++) {
        dotsArray3.push(new MainFun(event.x, event.y, Math.random() * 10 - 5, Math.random() * 10 - 5, null, null, 'cyan', 2, null, 1))
      }
    })

    function MainFun(x, y, dx, dy, x1, y1, col, rad, indx, op) {
      this.op = op
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;


      this.col = col;
      this.rad = rad;
      this.update3 = function() {
        if (this.x > w || this.x < 0) {
          dotsArray3.splice(dotsArray3.indexOf(this), 1);
        } else {
          this.x += this.dx
          this.y += this.dy
          this.draw3()
        }
      }

      this.draw3 = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        c.fillStyle = this.col;
        c.globalAlpha = this.op;
        c.fill();
        c.closePath();
      }

    }

    function animate() {
      requestAnimationFrame(animate)
      c.clearRect(0, 0, w, h)
      for (var i = 0; i < dotsArray3.length; i++) {
        dotsArray3[i].update3()
      }
    }
    animate()
  }
  render() {
    return (
      <canvas ref = 'canvas' > < /canvas>
    );
  }
}

export default Canvas;
