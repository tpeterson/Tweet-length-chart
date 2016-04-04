function CanvasObj(canvas, which_chart) {
  var max_num_tweets = ''; // number of tweets
  if (which_chart === 'Brand') {
    max_num_tweets = 68;
  } else if (which_chart === 'Celeb') {
    max_num_tweets = 347;
  } else if (which_chart === 'Media') {
    max_num_tweets = 477;
  } else {
    max_num_tweets = 892;
  }

  var max_num_rts = ''; // number of retweets
  if (which_chart === 'Brand') {
    max_num_rts = 265;
  } else if (which_chart === 'Celeb') {
    max_num_rts = 6663;
  } else if (which_chart === 'Media') {
    max_num_rts = 95;
  } else {
    max_num_rts = 6349;
  }

  this.elem = document.getElementById(canvas);
  this.width_val = document.getElementById(canvas).offsetWidth;
  this.height_val = document.getElementById(canvas).offsetHeight;
  this.x_left = 50;
  this.y_top = 50;
  this.x_right = 500;
  this.y_bottom = 550;
  this.name_val =  canvas;
  this.category = which_chart;
  this.max_num_tweets = max_num_tweets;
  this.max_num_rts = max_num_rts;
}

module.exports = CanvasObj;
