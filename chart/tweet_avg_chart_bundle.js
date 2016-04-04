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
	    "engagements": 3973,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 42,
	    "engagements": 6349,
	    "hashtags": 14,
	    "mentions": 10,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 119,
	    "engagements": 4811,
	    "hashtags": 12,
	    "mentions": 3,
	    "urls": 32,
	    "media": 24
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 126,
	    "engagements": 4166,
	    "hashtags": 37,
	    "mentions": 9,
	    "urls": 33,
	    "media": 17
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 161,
	    "engagements": 2095,
	    "hashtags": 31,
	    "mentions": 13,
	    "urls": 47,
	    "media": 15
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 190,
	    "engagements": 2449,
	    "hashtags": 33,
	    "mentions": 17,
	    "urls": 46,
	    "media": 22
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 281,
	    "engagements": 2074,
	    "hashtags": 25,
	    "mentions": 19,
	    "urls": 66,
	    "media": 17
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 400,
	    "engagements": 1317,
	    "hashtags": 21,
	    "mentions": 23,
	    "urls": 77,
	    "media": 13
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 451,
	    "engagements": 983,
	    "hashtags": 23,
	    "mentions": 24,
	    "urls": 76,
	    "media": 20
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 519,
	    "engagements": 781,
	    "hashtags": 22,
	    "mentions": 28,
	    "urls": 80,
	    "media": 26
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 576,
	    "engagements": 1024,
	    "hashtags": 23,
	    "mentions": 29,
	    "urls": 80,
	    "media": 35
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 527,
	    "engagements": 835,
	    "hashtags": 28,
	    "mentions": 32,
	    "urls": 79,
	    "media": 38
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 447,
	    "engagements": 1457,
	    "hashtags": 31,
	    "mentions": 42,
	    "urls": 76,
	    "media": 38
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 892,
	    "engagements": 1936,
	    "hashtags": 38,
	    "mentions": 44,
	    "urls": 68,
	    "media": 37
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
	    "engagements": 18,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 1,
	    "engagements": 145,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 5,
	    "engagements": 160,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 60,
	    "media": 0
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 14,
	    "engagements": 208,
	    "hashtags": 36,
	    "mentions": 0,
	    "urls": 36,
	    "media": 29
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 15,
	    "engagements": 107,
	    "hashtags": 13,
	    "mentions": 0,
	    "urls": 33,
	    "media": 27
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 22,
	    "engagements": 85,
	    "hashtags": 5,
	    "mentions": 0,
	    "urls": 32,
	    "media": 32
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 26,
	    "engagements": 46,
	    "hashtags": 23,
	    "mentions": 8,
	    "urls": 54,
	    "media": 12
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 34,
	    "engagements": 94,
	    "hashtags": 24,
	    "mentions": 12,
	    "urls": 68,
	    "media": 26
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 32,
	    "engagements": 148,
	    "hashtags": 44,
	    "mentions": 16,
	    "urls": 56,
	    "media": 53
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 22,
	    "engagements": 265,
	    "hashtags": 41,
	    "mentions": 18,
	    "urls": 50,
	    "media": 50
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 19,
	    "engagements": 99,
	    "hashtags": 47,
	    "mentions": 0,
	    "urls": 53,
	    "media": 42
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 20,
	    "engagements": 72,
	    "hashtags": 40,
	    "mentions": 5,
	    "urls": 40,
	    "media": 40
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 22,
	    "engagements": 109,
	    "hashtags": 64,
	    "mentions": 27,
	    "urls": 68,
	    "media": 50
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 68,
	    "engagements": 66,
	    "hashtags": 54,
	    "mentions": 28,
	    "urls": 62,
	    "media": 62
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
	    "engagements": 4181,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 40,
	    "engagements": 6663,
	    "hashtags": 15,
	    "mentions": 10,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 97,
	    "engagements": 5891,
	    "hashtags": 14,
	    "mentions": 4,
	    "urls": 19,
	    "media": 29
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 98,
	    "engagements": 5313,
	    "hashtags": 33,
	    "mentions": 9,
	    "urls": 35,
	    "media": 17
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 132,
	    "engagements": 2542,
	    "hashtags": 35,
	    "mentions": 15,
	    "urls": 45,
	    "media": 15
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 118,
	    "engagements": 3899,
	    "hashtags": 47,
	    "mentions": 25,
	    "urls": 36,
	    "media": 22
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 107,
	    "engagements": 5366,
	    "hashtags": 48,
	    "mentions": 38,
	    "urls": 35,
	    "media": 33
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 117,
	    "engagements": 4379,
	    "hashtags": 52,
	    "mentions": 48,
	    "urls": 44,
	    "media": 26
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 125,
	    "engagements": 3370,
	    "hashtags": 53,
	    "mentions": 38,
	    "urls": 46,
	    "media": 29
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 117,
	    "engagements": 3218,
	    "hashtags": 59,
	    "mentions": 45,
	    "urls": 43,
	    "media": 28
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 130,
	    "engagements": 4298,
	    "hashtags": 58,
	    "mentions": 46,
	    "urls": 52,
	    "media": 20
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 151,
	    "engagements": 2739,
	    "hashtags": 54,
	    "mentions": 46,
	    "urls": 58,
	    "media": 19
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 144,
	    "engagements": 4363,
	    "hashtags": 50,
	    "mentions": 54,
	    "urls": 49,
	    "media": 31
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 347,
	    "engagements": 4836,
	    "hashtags": 57,
	    "mentions": 56,
	    "urls": 44,
	    "media": 34
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
	    "engagements": 0,
	    "hashtags": null,
	    "mentions": null,
	    "urls": null,
	    "media": null
	  },
	  {
	    "characters": 20,
	    "min_characters": 10,
	    "tweets": 1,
	    "engagements": 7,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 0,
	    "media": 0
	  },
	  {
	    "characters": 30,
	    "min_characters": 20,
	    "tweets": 17,
	    "engagements": 18,
	    "hashtags": 0,
	    "mentions": 0,
	    "urls": 100,
	    "media": 0
	  },
	  {
	    "characters": 40,
	    "min_characters": 30,
	    "tweets": 14,
	    "engagements": 95,
	    "hashtags": 64,
	    "mentions": 14,
	    "urls": 21,
	    "media": 7
	  },
	  {
	    "characters": 50,
	    "min_characters": 40,
	    "tweets": 14,
	    "engagements": 18,
	    "hashtags": 14,
	    "mentions": 7,
	    "urls": 79,
	    "media": 0
	  },
	  {
	    "characters": 60,
	    "min_characters": 50,
	    "tweets": 50,
	    "engagements": 67,
	    "hashtags": 12,
	    "mentions": 6,
	    "urls": 74,
	    "media": 16
	  },
	  {
	    "characters": 70,
	    "min_characters": 60,
	    "tweets": 148,
	    "engagements": 50,
	    "hashtags": 9,
	    "mentions": 7,
	    "urls": 91,
	    "media": 6
	  },
	  {
	    "characters": 80,
	    "min_characters": 70,
	    "tweets": 249,
	    "engagements": 46,
	    "hashtags": 6,
	    "mentions": 12,
	    "urls": 94,
	    "media": 5
	  },
	  {
	    "characters": 90,
	    "min_characters": 80,
	    "tweets": 294,
	    "engagements": 58,
	    "hashtags": 9,
	    "mentions": 19,
	    "urls": 91,
	    "media": 13
	  },
	  {
	    "characters": 100,
	    "min_characters": 90,
	    "tweets": 380,
	    "engagements": 61,
	    "hashtags": 9,
	    "mentions": 23,
	    "urls": 93,
	    "media": 24
	  },
	  {
	    "characters": 110,
	    "min_characters": 100,
	    "tweets": 427,
	    "engagements": 69,
	    "hashtags": 12,
	    "mentions": 25,
	    "urls": 90,
	    "media": 40
	  },
	  {
	    "characters": 120,
	    "min_characters": 110,
	    "tweets": 356,
	    "engagements": 70,
	    "hashtags": 17,
	    "mentions": 28,
	    "urls": 91,
	    "media": 46
	  },
	  {
	    "characters": 130,
	    "min_characters": 120,
	    "tweets": 281,
	    "engagements": 73,
	    "hashtags": 18,
	    "mentions": 37,
	    "urls": 91,
	    "media": 41
	  },
	  {
	    "characters": 140,
	    "min_characters": 130,
	    "tweets": 477,
	    "engagements": 93,
	    "hashtags": 22,
	    "mentions": 37,
	    "urls": 86,
	    "media": 35
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
	  this.hashtags = point.hashtags;
	  this.mentions = point.mentions;
	  this.urls = point.urls;
	  this.media = point.media;
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
	    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ' accounts sent ' + tweet.tweets + ' tweets that were between ' + tweet.min_characters + ' and ' + tweet.characters + ' characters long. On average, those tweets received ' + tweet.engagements + ' retweets. But tweets can contain more than text; in this case: ' + tweet.urls + ' percent had links, ' + tweet.hashtags + ' percent had hashtags, ' + tweet.media + ' percent had photos or videos and ' + tweet.mentions + ' percent mentioned another Twitter account.';
	  } else {
	    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ' accounts sent ' + tweet.tweets + ' tweet that was between ' + tweet.min_characters + ' and ' + tweet.characters + ' characters long. That single tweet received ' + tweet.engagements + ' retweets. But tweets can contain more than text; in this case: ' + tweet.urls + ' percent had links, ' + tweet.hashtags + ' percent had hashtags, ' + tweet.media + ' percent had photos or videos and ' + tweet.mentions + ' percent mentioned another Twitter account.';
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