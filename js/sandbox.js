(function() {
  var all_tweets = require('../script_modules/all_tweets_module');
  var brand_tweets = require('../script_modules/brand_tweets_module');
  var CanvasObj = require('../script_modules/canvasObj_module');
  var layoutCanvas = require('../script_modules/layoutCanvas_module');
  var chartTweets = require('../script_modules/plotCanvas_module');
  var identifyDot = require('../script_modules/canvasClick_module');
  var clearCanvas = require('../script_modules/clearCanvas_module');

  function createCanvas(canvas_name, tweet_data) {
    var canvas = new CanvasObj(canvas_name);

    layoutCanvas(canvas);

    var tweet_dots = chartTweets(canvas, tweet_data);

    function canvasClick(e) {
      var clickX = e.pageX - canvas.elem.offsetLeft;
      var clickY = e.pageY - canvas.elem.offsetTop;

      identifyDot(clickX, clickY, canvas, tweet_dots);
    }
    canvas.elem.addEventListener('click', canvasClick);
  }

  createCanvas('canvas_main', all_tweets);

  document.getElementById('chartMenu').addEventListener('change', function(e) {
    clearCanvas('canvas_main');
    if (e.target.value === 'All') {
      createCanvas('canvas_main', all_tweets);
    } else {
      brand_tweets.forEach(function(entry) {
        if (entry.brand_name === e.target.value) {
          createCanvas('canvas_main', entry.tweets);
        }
      });
    }
  });
})();
