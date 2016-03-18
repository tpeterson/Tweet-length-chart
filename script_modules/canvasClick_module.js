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
  document.getElementById('tweet_brand_' + canvas.name_val).textContent = tweet.brand;
  document.getElementById('tweet_text_' + canvas.name_val).textContent = tweet.text;
  document.getElementById('tweet_chars_' + canvas.name_val).textContent = tweet.characters + ' characters';
  document.getElementById('tweet_rts_' + canvas.name_val).textContent = tweet.retweets + ' retweets';
  document.getElementById('tweet_favs_' + canvas.name_val).textContent = tweet.favorites + ' favorites';
}

module.exports = identifyDot;
