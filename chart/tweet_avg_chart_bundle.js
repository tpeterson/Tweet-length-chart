/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var all_tweets = __webpack_require__(1);
	  var brand_tweets = __webpack_require__(2);
	  var celeb_tweets = __webpack_require__(3);
	  var media_tweets = __webpack_require__(4);

	  var CanvasObj = __webpack_require__(5);
	  var layoutCanvas = __webpack_require__(6);
	  var chartTweets = __webpack_require__(7);
	  var identifyDot = __webpack_require__(8);
	  var clearCanvas = __webpack_require__(9);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 10,
	    "min_characters": 0,
	    "tweets": 20,
	    "engagements": 3973
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 42,
	    "engagements": 6349
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 119,
	    "engagements": 4811
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 126,
	    "engagements": 4166
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 161,
	    "engagements": 2095
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 190,
	    "engagements": 2449
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 281,
	    "engagements": 2074
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 400,
	    "engagements": 1317
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 451,
	    "engagements": 983
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 519,
	    "engagements": 781
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 576,
	    "engagements": 1024
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 527,
	    "engagements": 835
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 447,
	    "engagements": 1457
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 892,
	    "engagements": 1936
	  }
	];


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 10,
	    "min_characters": 0,
	    "tweets": 1,
	    "engagements": 18
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 1,
	    "engagements": 145
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 5,
	    "engagements": 160
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 14,
	    "engagements": 208
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 15,
	    "engagements": 107
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 22,
	    "engagements": 85
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 26,
	    "engagements": 46
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 34,
	    "engagements": 94
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 32,
	    "engagements": 148
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 22,
	    "engagements": 265
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 19,
	    "engagements": 99
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 20,
	    "engagements": 72
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 22,
	    "engagements": 109
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 68,
	    "engagements": 66
	  }
	];


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 10,
	    "min_characters": 0,
	    "tweets": 19,
	    "engagements": 4181
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 40,
	    "engagements": 6663
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 97,
	    "engagements": 5891
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 98,
	    "engagements": 5313
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 132,
	    "engagements": 2542
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 118,
	    "engagements": 3899
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 107,
	    "engagements": 5366
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 117,
	    "engagements": 4379
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 125,
	    "engagements": 3370
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 117,
	    "engagements": 3218
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 130,
	    "engagements": 4298
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 151,
	    "engagements": 2739
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 144,
	    "engagements": 4363
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 347,
	    "engagements": 4836
	  }
	];


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 10,
	    "min_characters": 0,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 1,
	    "engagements": 7
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 17,
	    "engagements": 18
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 14,
	    "engagements": 95
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 14,
	    "engagements": 18
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 50,
	    "engagements": 67
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 148,
	    "engagements": 50
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 249,
	    "engagements": 46
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 294,
	    "engagements": 58
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 380,
	    "engagements": 61
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 427,
	    "engagements": 69
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 356,
	    "engagements": 70
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 281,
	    "engagements": 73
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 477,
	    "engagements": 93
	  }
	];


/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ },
/* 6 */
/***/ function(module, exports) {

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
	  context.font = '0.75em sans-serif';
	  context.fillStyle = 'black';
	  context.textBaseline = 'middle';
	  context.fillText(140, canvas.x_right + 5, canvas.y_bottom);

	  // DRAW Y AXIS LEGEND
	  context.font = '0.75em sans-serif';
	  context.fillStyle = 'black';
	  context.textAlign = 'center';
	  context.textBaseline = 'bottom';
	  context.fillText(canvas.max_num_tweets, canvas.x_left, canvas.y_top - 5);
	}

	module.exports = layoutCanvas;


/***/ },
/* 7 */
/***/ function(module, exports) {

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


/***/ },
/* 8 */
/***/ function(module, exports) {

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
	    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ': The examined accounts sent ' + tweet.tweets + ' tweets that were between ' + tweet.min_characters + ' and ' + tweet.characters + ' characters long. On average, those tweets received ' + tweet.engagements + ' retweets.';
	  } else {
	    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ': The examined accounts sent ' + tweet.tweets + ' tweet that was between ' + tweet.min_characters + ' and ' + tweet.characters + ' characters long. That single tweet received ' + tweet.engagements + ' retweets.';
	  }
	}

	module.exports = identifyDot;


/***/ },
/* 9 */
/***/ function(module, exports) {

	function clearCanvas(canvas) {
	  var elem = document.getElementById(canvas.elem ? canvas.name : canvas);
	  var context = elem.getContext('2d');
	  context.clearRect(0, 0, elem.width, elem.height);
	}

	module.exports =  clearCanvas;


/***/ }
/******/ ]);