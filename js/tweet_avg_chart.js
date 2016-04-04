(function() {
  var all_tweets = require('./script_modules/char_cats/all_tweets_module');
  var brand_tweets = require('./script_modules/char_cats/brand_tweets_module');
  var celeb_tweets = require('./script_modules/char_cats/celeb_tweets_module');
  var media_tweets = require('./script_modules/char_cats/media_tweets_module');

  var CanvasObj = require('./script_modules/canvasObj_module');
  var layoutCanvas = require('./script_modules/layoutCanvas_module');
  var chartTweets = require('./script_modules/plotCanvas_module');
  var identifyDot = require('./script_modules/canvasClick_module');
  var clearCanvas = require('./script_modules/clearCanvas_module');

  function createCanvas(canvas_name, tweet_data, which_chart) {
    var canvas = new CanvasObj(canvas_name, which_chart);
    layoutCanvas(canvas);

    var tweet_dots = chartTweets(canvas, tweet_data);

    function canvasClick(e) {
      var clickX = e.pageX - canvas.elem.offsetLeft;
      var clickY = e.pageY - canvas.elem.offsetTop;

      identifyDot(clickX, clickY, canvas, tweet_dots);
    }
    canvas.elem.addEventListener('click', canvasClick);
    canvas.elem.addEventListener('touchstart', canvasClick);
  }

  createCanvas('canvas_main', all_tweets, 'All');

  document.getElementById('chartMenu').addEventListener('change', function(e) {
    clearCanvas('canvas_main');
    document.getElementById('tweetInfo_canvas_main').style.visibility = "hidden";
    if (e.target.value === 'Brand') {
      createCanvas('canvas_main', brand_tweets, 'Brand');
    } else if (e.target.value === 'Celeb') {
      createCanvas('canvas_main', celeb_tweets, 'Celeb');
    } else if (e.target.value === 'Media') {
      createCanvas('canvas_main', media_tweets, 'Media');
    } else {
      createCanvas('canvas_main', all_tweets, 'All');
    }
  });
})();
