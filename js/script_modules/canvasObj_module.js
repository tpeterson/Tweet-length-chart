function CanvasObj(canvas, which_chart) {
  this.elem = document.getElementById(canvas);
  this.width_val = document.getElementById(canvas).offsetWidth;
  this.height_val = document.getElementById(canvas).offsetHeight;
  this.x_left = 50;
  this.y_top = 50;
  this.x_right = 500;
  this.y_bottom = 550;
  this.name_val =  canvas;
  this.category = which_chart;
}

module.exports = CanvasObj;
