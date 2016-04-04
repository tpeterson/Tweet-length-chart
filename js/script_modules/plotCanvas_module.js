function Dot(canvas, point) {
  this.x = (point.characters * 3.2) + canvas.x_left;
  this.y = (500 - (point.tweets*(500/canvas.max_num_tweets))) + canvas.y_top;
  this.radius = point.tweets>0 ? 7.5 * (600 / canvas.width_val) : 0;
  this.color = calcColor(point.engagements, canvas.category);
  this.characters = point.characters;
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

function calcColor(point_engagements, category) {
  if (category === 'Brand') {
    return 'rgba(239,4,4,' + (point_engagements/3976) + ')'; // BY NUMBER OF RETWEETS
  } else if (category === 'Celeb') {
    return 'rgba(239,4,4,' + (point_engagements/17117) + ')';
  } else if (category === 'Media') {
    return 'rgba(239,4,4,' + (point_engagements/259) + ')';
  } else {
    return 'rgba(239,4,4,' + (point_engagements/17117) + ')';
  }
}

module.exports = chartTweets;
