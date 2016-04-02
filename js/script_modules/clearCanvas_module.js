function clearCanvas(canvas) {
  var elem = document.getElementById(canvas.elem ? canvas.name : canvas);
  var context = elem.getContext('2d');
  context.clearRect(0, 0, elem.width, elem.height);
}

module.exports =  clearCanvas;
