function CanvasObj(canvas, which_chart) {
  var max_num_tweets = ''; // number of tweets
  if (which_chart === 'Brand') {
    max_num_tweets = 10;
  } else if (which_chart === 'Celeb') {
    max_num_tweets = 83;
  } else if (which_chart === 'Media') {
    max_num_tweets = 98;
  } else {
    max_num_tweets = 112;
  }

  var max_num_rts = ''; // number of retweets
  if (which_chart === 'Brand') {
    max_num_rts = 3976;
  } else if (which_chart === 'Celeb') {
    max_num_rts = 17117;
  } else if (which_chart === 'Media') {
    max_num_rts = 259;
  } else {
    max_num_rts = 17117;
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
  this.maxnum_rts = max_num_rts;
}

module.exports = CanvasObj;
