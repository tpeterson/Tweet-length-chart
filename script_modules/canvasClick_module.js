function identifyDot(clickX, clickY, canvas, tweet_dots) {
  for (var i = tweet_dots.length - 1; i >= 0; i--) {
    var circle = tweet_dots[i];
    var distanceFromCenter = Math.sqrt(Math.pow((circle.x * (canvas.width_val / 600)) - clickX, 2) + Math.pow((circle.y * (canvas.height_val / 600)) - clickY, 2));

    if (distanceFromCenter <= circle.radius) {
      showInfo(tweet_dots[i], canvas);
      return;
    } else {
      document.getElementById('tweetInfo_' + canvas.name_val).style.visibility = "hidden";
    }
  }
}

function showInfo(tweet, canvas) {
  document.getElementById('tweetInfo_' + canvas.name_val).style.visibility = "visible";
  if (tweet.tweets>1) {
    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ': The examined accounts sent ' + tweet.tweets + ' tweets that were ' + tweet.characters + ' characters long. On average, those tweets received ' + tweet.engagements + ' retweets.';
  } else {
    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ': The examined accounts sent ' + tweet.tweets + ' tweet that was ' + tweet.characters + ' characters long. That single tweet received ' + tweet.engagements + ' retweets.';
  }
}

module.exports = identifyDot;
