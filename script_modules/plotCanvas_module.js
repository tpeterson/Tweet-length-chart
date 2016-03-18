function Dot(canvas, tweet) {
  this.x = (tweet.characters * 2.85) + canvas.x_left;
  this.y = (500 - (tweet.retweets + tweet.favorites)) + canvas.y_top;
  this.radius = 5 * (600 / canvas.width_val);
  this.color = "red";
  this.text = tweet.text;
  this.characters = tweet.characters;
  this.retweets = tweet.retweets;
  this.favorites = tweet.favorites;
  this.brand = tweet.brand;
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
  tweet_arr.forEach(function(tweet) {
    var tweet_dot = new Dot(canvas, tweet);
    tweet_dots.push(tweet_dot);
    drawTweet(canvas, tweet_dot);
  });
  return tweet_dots;
}

module.exports = chartTweets;
