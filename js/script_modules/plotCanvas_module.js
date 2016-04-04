function Dot(canvas, point) {
  this.x = (point.characters * 3.2) + canvas.x_left;
  this.y = (500 - (point.tweets*(500/canvas.max_num_tweets))) + canvas.y_top;
  this.radius = point.tweets>0 ? 7.5 * (600 / canvas.width_val) : 0;
  this.color = 'rgba(239,4,4,' + (point.engagements/canvas.max_num_rts) +')';
  this.characters = point.characters;
  this.min_characters =  point.min_characters;
  this.engagements = point.engagements;
  this.tweets = point.tweets;
}

function drawTweet(canvas, tweet) {
  var context = canvas.elem.getContext('2d');
  context.beginPath();
  context.fillStyle = tweet.color;
  context.arc(tweet.x, tweet.y, tweet.radius, 0, Math.PI * 2);
  context.fill();
  context.stroke();
}

function chartTweets(canvas, tweet_arr) {
  var tweet_dots = [];
  tweet_arr.forEach(function(point) {
    var tweet_dot = new Dot(canvas, point);
    tweet_dots.push(tweet_dot);
    drawTweet(canvas, tweet_dot);
  });
  return tweet_dots;
}

module.exports = chartTweets;
