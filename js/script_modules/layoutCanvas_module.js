function layoutCanvas(canvas) {
  var context = canvas.elem.getContext('2d');

  // DRAW X AND Y AXES
  context.beginPath();
  context.moveTo(canvas.x_left, canvas.y_top);
  context.lineTo(canvas.x_left, canvas.y_bottom);
  context.lineTo(canvas.x_right, canvas.y_bottom);
  context.strokeStyle = 'black';
  context.stroke();

  // DRAW X AXIS LABEL
  context.font = '1em sans-serif';
  context.fillStyle = 'black';
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.fillText('CHARACTERS', canvas.x_left, canvas.y_bottom);

  // DRAW Y AXIS LABEL
  context.save();
  context.translate(canvas.x_left, canvas.y_bottom);
  context.rotate(-Math.PI / 2);
  context.textBaseline = 'bottom';
  context.fillText('NUMBER OF TWEETS', 0, 0);
  context.restore();

  // DRAW X AXIS LEGEND
  context.font = '0.5em sans-serif';
  context.fillStyle = 'black';
  context.textBaseline = 'middle';
  context.fillText(140, canvas.x_right + 5, canvas.y_bottom);

  // DRAW Y AXIS LEGEND
  context.font = '0.5em sans-serif';
  context.fillStyle = 'black';
  context.textAlign = 'center';
  context.textBaseline = 'bottom';
  context.fillText(canvas.max_num_tweets, canvas.x_left, canvas.y_top - 5);
}

module.exports = layoutCanvas;
