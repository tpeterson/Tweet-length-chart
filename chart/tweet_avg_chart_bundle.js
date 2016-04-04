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
	    canvas.elem.addEventListener('touchend', canvasClick);
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
	    "characters": 0,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 1,
	    "tweets": 1,
	    "engagements": 685
	  },
	  {
	    "characters": 2,
	    "tweets": 1,
	    "engagements": 757
	  },
	  {
	    "characters": 3,
	    "tweets": 1,
	    "engagements": 35
	  },
	  {
	    "characters": 4,
	    "tweets": 1,
	    "engagements": 13248
	  },
	  {
	    "characters": 5,
	    "tweets": 1,
	    "engagements": 1221
	  },
	  {
	    "characters": 6,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 7,
	    "tweets": 1,
	    "engagements": 17117
	  },
	  {
	    "characters": 8,
	    "tweets": 1,
	    "engagements": 1443
	  },
	  {
	    "characters": 9,
	    "tweets": 1,
	    "engagements": 310
	  },
	  {
	    "characters": 10,
	    "tweets": 4,
	    "engagements": 8821
	  },
	  {
	    "characters": 11,
	    "tweets": 1,
	    "engagements": 241
	  },
	  {
	    "characters": 12,
	    "tweets": 2,
	    "engagements": 895
	  },
	  {
	    "characters": 13,
	    "tweets": 5,
	    "engagements": 8261
	  },
	  {
	    "characters": 14,
	    "tweets": 3,
	    "engagements": 4354
	  },
	  {
	    "characters": 15,
	    "tweets": 2,
	    "engagements": 5475
	  },
	  {
	    "characters": 16,
	    "tweets": 3,
	    "engagements": 7328
	  },
	  {
	    "characters": 17,
	    "tweets": 2,
	    "engagements": 1980
	  },
	  {
	    "characters": 18,
	    "tweets": 2,
	    "engagements": 16385
	  },
	  {
	    "characters": 19,
	    "tweets": 1,
	    "engagements": 604
	  },
	  {
	    "characters": 20,
	    "tweets": 4,
	    "engagements": 2006
	  },
	  {
	    "characters": 21,
	    "tweets": 3,
	    "engagements": 5462
	  },
	  {
	    "characters": 22,
	    "tweets": 9,
	    "engagements": 5736
	  },
	  {
	    "characters": 23,
	    "tweets": 59,
	    "engagements": 3534
	  },
	  {
	    "characters": 24,
	    "tweets": 5,
	    "engagements": 2002
	  },
	  {
	    "characters": 25,
	    "tweets": 13,
	    "engagements": 1405
	  },
	  {
	    "characters": 26,
	    "tweets": 11,
	    "engagements": 1349
	  },
	  {
	    "characters": 27,
	    "tweets": 21,
	    "engagements": 1833
	  },
	  {
	    "characters": 28,
	    "tweets": 14,
	    "engagements": 1588
	  },
	  {
	    "characters": 29,
	    "tweets": 8,
	    "engagements": 537
	  },
	  {
	    "characters": 30,
	    "tweets": 13,
	    "engagements": 1861
	  },
	  {
	    "characters": 31,
	    "tweets": 17,
	    "engagements": 2491
	  },
	  {
	    "characters": 32,
	    "tweets": 8,
	    "engagements": 2417
	  },
	  {
	    "characters": 33,
	    "tweets": 12,
	    "engagements": 2578
	  },
	  {
	    "characters": 34,
	    "tweets": 13,
	    "engagements": 10975
	  },
	  {
	    "characters": 35,
	    "tweets": 16,
	    "engagements": 1472
	  },
	  {
	    "characters": 36,
	    "tweets": 27,
	    "engagements": 526
	  },
	  {
	    "characters": 37,
	    "tweets": 16,
	    "engagements": 1126
	  },
	  {
	    "characters": 38,
	    "tweets": 19,
	    "engagements": 1444
	  },
	  {
	    "characters": 39,
	    "tweets": 20,
	    "engagements": 3127
	  },
	  {
	    "characters": 40,
	    "tweets": 21,
	    "engagements": 874
	  },
	  {
	    "characters": 41,
	    "tweets": 11,
	    "engagements": 1906
	  },
	  {
	    "characters": 42,
	    "tweets": 13,
	    "engagements": 1336
	  },
	  {
	    "characters": 43,
	    "tweets": 17,
	    "engagements": 447
	  },
	  {
	    "characters": 44,
	    "tweets": 17,
	    "engagements": 7369
	  },
	  {
	    "characters": 45,
	    "tweets": 19,
	    "engagements": 1816
	  },
	  {
	    "characters": 46,
	    "tweets": 22,
	    "engagements": 714
	  },
	  {
	    "characters": 47,
	    "tweets": 25,
	    "engagements": 488
	  },
	  {
	    "characters": 48,
	    "tweets": 8,
	    "engagements": 1201
	  },
	  {
	    "characters": 49,
	    "tweets": 25,
	    "engagements": 3278
	  },
	  {
	    "characters": 50,
	    "tweets": 22,
	    "engagements": 1917
	  },
	  {
	    "characters": 51,
	    "tweets": 15,
	    "engagements": 2121
	  },
	  {
	    "characters": 52,
	    "tweets": 13,
	    "engagements": 2128
	  },
	  {
	    "characters": 53,
	    "tweets": 12,
	    "engagements": 410
	  },
	  {
	    "characters": 54,
	    "tweets": 15,
	    "engagements": 1148
	  },
	  {
	    "characters": 55,
	    "tweets": 18,
	    "engagements": 1021
	  },
	  {
	    "characters": 56,
	    "tweets": 24,
	    "engagements": 4503
	  },
	  {
	    "characters": 57,
	    "tweets": 19,
	    "engagements": 663
	  },
	  {
	    "characters": 58,
	    "tweets": 20,
	    "engagements": 827
	  },
	  {
	    "characters": 59,
	    "tweets": 13,
	    "engagements": 116
	  },
	  {
	    "characters": 60,
	    "tweets": 34,
	    "engagements": 1010
	  },
	  {
	    "characters": 61,
	    "tweets": 27,
	    "engagements": 1365
	  },
	  {
	    "characters": 62,
	    "tweets": 32,
	    "engagements": 1014
	  },
	  {
	    "characters": 63,
	    "tweets": 25,
	    "engagements": 543
	  },
	  {
	    "characters": 64,
	    "tweets": 25,
	    "engagements": 998
	  },
	  {
	    "characters": 65,
	    "tweets": 23,
	    "engagements": 1895
	  },
	  {
	    "characters": 66,
	    "tweets": 23,
	    "engagements": 231
	  },
	  {
	    "characters": 67,
	    "tweets": 29,
	    "engagements": 1907
	  },
	  {
	    "characters": 68,
	    "tweets": 39,
	    "engagements": 332
	  },
	  {
	    "characters": 69,
	    "tweets": 33,
	    "engagements": 768
	  },
	  {
	    "characters": 70,
	    "tweets": 36,
	    "engagements": 1769
	  },
	  {
	    "characters": 71,
	    "tweets": 38,
	    "engagements": 276
	  },
	  {
	    "characters": 72,
	    "tweets": 26,
	    "engagements": 423
	  },
	  {
	    "characters": 73,
	    "tweets": 25,
	    "engagements": 421
	  },
	  {
	    "characters": 74,
	    "tweets": 29,
	    "engagements": 575
	  },
	  {
	    "characters": 75,
	    "tweets": 31,
	    "engagements": 381
	  },
	  {
	    "characters": 76,
	    "tweets": 36,
	    "engagements": 506
	  },
	  {
	    "characters": 77,
	    "tweets": 30,
	    "engagements": 1249
	  },
	  {
	    "characters": 78,
	    "tweets": 39,
	    "engagements": 555
	  },
	  {
	    "characters": 79,
	    "tweets": 28,
	    "engagements": 383
	  },
	  {
	    "characters": 80,
	    "tweets": 25,
	    "engagements": 681
	  },
	  {
	    "characters": 81,
	    "tweets": 35,
	    "engagements": 707
	  },
	  {
	    "characters": 82,
	    "tweets": 34,
	    "engagements": 101
	  },
	  {
	    "characters": 83,
	    "tweets": 34,
	    "engagements": 416
	  },
	  {
	    "characters": 84,
	    "tweets": 53,
	    "engagements": 409
	  },
	  {
	    "characters": 85,
	    "tweets": 36,
	    "engagements": 419
	  },
	  {
	    "characters": 86,
	    "tweets": 38,
	    "engagements": 232
	  },
	  {
	    "characters": 87,
	    "tweets": 38,
	    "engagements": 1038
	  },
	  {
	    "characters": 88,
	    "tweets": 40,
	    "engagements": 543
	  },
	  {
	    "characters": 89,
	    "tweets": 43,
	    "engagements": 442
	  },
	  {
	    "characters": 90,
	    "tweets": 37,
	    "engagements": 54
	  },
	  {
	    "characters": 91,
	    "tweets": 43,
	    "engagements": 193
	  },
	  {
	    "characters": 92,
	    "tweets": 36,
	    "engagements": 436
	  },
	  {
	    "characters": 93,
	    "tweets": 46,
	    "engagements": 442
	  },
	  {
	    "characters": 94,
	    "tweets": 38,
	    "engagements": 429
	  },
	  {
	    "characters": 95,
	    "tweets": 53,
	    "engagements": 349
	  },
	  {
	    "characters": 96,
	    "tweets": 53,
	    "engagements": 838
	  },
	  {
	    "characters": 97,
	    "tweets": 41,
	    "engagements": 856
	  },
	  {
	    "characters": 98,
	    "tweets": 52,
	    "engagements": 177
	  },
	  {
	    "characters": 99,
	    "tweets": 39,
	    "engagements": 458
	  },
	  {
	    "characters": 100,
	    "tweets": 38,
	    "engagements": 399
	  },
	  {
	    "characters": 101,
	    "tweets": 39,
	    "engagements": 158
	  },
	  {
	    "characters": 102,
	    "tweets": 39,
	    "engagements": 1134
	  },
	  {
	    "characters": 103,
	    "tweets": 49,
	    "engagements": 215
	  },
	  {
	    "characters": 104,
	    "tweets": 49,
	    "engagements": 764
	  },
	  {
	    "characters": 105,
	    "tweets": 40,
	    "engagements": 295
	  },
	  {
	    "characters": 106,
	    "tweets": 40,
	    "engagements": 417
	  },
	  {
	    "characters": 107,
	    "tweets": 48,
	    "engagements": 279
	  },
	  {
	    "characters": 108,
	    "tweets": 49,
	    "engagements": 433
	  },
	  {
	    "characters": 109,
	    "tweets": 32,
	    "engagements": 2951
	  },
	  {
	    "characters": 110,
	    "tweets": 71,
	    "engagements": 176
	  },
	  {
	    "characters": 111,
	    "tweets": 45,
	    "engagements": 1019
	  },
	  {
	    "characters": 112,
	    "tweets": 46,
	    "engagements": 465
	  },
	  {
	    "characters": 113,
	    "tweets": 67,
	    "engagements": 500
	  },
	  {
	    "characters": 114,
	    "tweets": 45,
	    "engagements": 414
	  },
	  {
	    "characters": 115,
	    "tweets": 58,
	    "engagements": 92
	  },
	  {
	    "characters": 116,
	    "tweets": 45,
	    "engagements": 937
	  },
	  {
	    "characters": 117,
	    "tweets": 56,
	    "engagements": 568
	  },
	  {
	    "characters": 118,
	    "tweets": 65,
	    "engagements": 986
	  },
	  {
	    "characters": 119,
	    "tweets": 61,
	    "engagements": 497
	  },
	  {
	    "characters": 120,
	    "tweets": 53,
	    "engagements": 474
	  },
	  {
	    "characters": 121,
	    "tweets": 64,
	    "engagements": 915
	  },
	  {
	    "characters": 122,
	    "tweets": 42,
	    "engagements": 1064
	  },
	  {
	    "characters": 123,
	    "tweets": 46,
	    "engagements": 266
	  },
	  {
	    "characters": 124,
	    "tweets": 62,
	    "engagements": 727
	  },
	  {
	    "characters": 125,
	    "tweets": 53,
	    "engagements": 284
	  },
	  {
	    "characters": 126,
	    "tweets": 46,
	    "engagements": 273
	  },
	  {
	    "characters": 127,
	    "tweets": 51,
	    "engagements": 342
	  },
	  {
	    "characters": 128,
	    "tweets": 63,
	    "engagements": 551
	  },
	  {
	    "characters": 129,
	    "tweets": 64,
	    "engagements": 611
	  },
	  {
	    "characters": 130,
	    "tweets": 57,
	    "engagements": 540
	  },
	  {
	    "characters": 131,
	    "tweets": 84,
	    "engagements": 1185
	  },
	  {
	    "characters": 132,
	    "tweets": 81,
	    "engagements": 599
	  },
	  {
	    "characters": 133,
	    "tweets": 87,
	    "engagements": 636
	  },
	  {
	    "characters": 134,
	    "tweets": 88,
	    "engagements": 1455
	  },
	  {
	    "characters": 135,
	    "tweets": 110,
	    "engagements": 597
	  },
	  {
	    "characters": 136,
	    "tweets": 99,
	    "engagements": 328
	  },
	  {
	    "characters": 137,
	    "tweets": 112,
	    "engagements": 1307
	  },
	  {
	    "characters": 138,
	    "tweets": 147,
	    "engagements": 874
	  },
	  {
	    "characters": 139,
	    "tweets": 165,
	    "engagements": 1012
	  },
	  {
	    "characters": 140,
	    "tweets": 173,
	    "engagements": 1050
	  }
	];


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 0,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 1,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 2,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 3,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 4,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 5,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 6,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 7,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 8,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 9,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 10,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 11,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 12,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 13,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 14,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 15,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 16,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 17,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 18,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 19,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 20,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 21,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 22,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 23,
	    "tweets": 1,
	    "engagements": 0
	  },
	  {
	    "characters": 24,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 25,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 26,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 27,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 28,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 29,
	    "tweets": 1,
	    "engagements": 0
	  },
	  {
	    "characters": 30,
	    "tweets": 1,
	    "engagements": 0
	  },
	  {
	    "characters": 31,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 32,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 33,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 34,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 35,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 36,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 37,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 38,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 39,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 40,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 41,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 42,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 43,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 44,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 45,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 46,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 47,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 48,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 49,
	    "tweets": 2,
	    "engagements": 275
	  },
	  {
	    "characters": 50,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 51,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 52,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 53,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 54,
	    "tweets": 1,
	    "engagements": 213
	  },
	  {
	    "characters": 55,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 56,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 57,
	    "tweets": 1,
	    "engagements": 50
	  },
	  {
	    "characters": 58,
	    "tweets": 2,
	    "engagements": 238
	  },
	  {
	    "characters": 59,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 60,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 61,
	    "tweets": 2,
	    "engagements": 25
	  },
	  {
	    "characters": 62,
	    "tweets": 1,
	    "engagements": 818
	  },
	  {
	    "characters": 63,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 64,
	    "tweets": 2,
	    "engagements": 21
	  },
	  {
	    "characters": 65,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 66,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 67,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 68,
	    "tweets": 1,
	    "engagements": 55
	  },
	  {
	    "characters": 69,
	    "tweets": 2,
	    "engagements": 1
	  },
	  {
	    "characters": 70,
	    "tweets": 1,
	    "engagements": 98
	  },
	  {
	    "characters": 71,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 72,
	    "tweets": 2,
	    "engagements": 1939
	  },
	  {
	    "characters": 73,
	    "tweets": 1,
	    "engagements": 100
	  },
	  {
	    "characters": 74,
	    "tweets": 1,
	    "engagements": 38
	  },
	  {
	    "characters": 75,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 76,
	    "tweets": 2,
	    "engagements": 10
	  },
	  {
	    "characters": 77,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 78,
	    "tweets": 1,
	    "engagements": 773
	  },
	  {
	    "characters": 79,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 80,
	    "tweets": 1,
	    "engagements": 1179
	  },
	  {
	    "characters": 81,
	    "tweets": 2,
	    "engagements": 740
	  },
	  {
	    "characters": 82,
	    "tweets": 1,
	    "engagements": 28
	  },
	  {
	    "characters": 83,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 84,
	    "tweets": 1,
	    "engagements": 298
	  },
	  {
	    "characters": 85,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 86,
	    "tweets": 1,
	    "engagements": 16
	  },
	  {
	    "characters": 87,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 88,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 89,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 90,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 91,
	    "tweets": 1,
	    "engagements": 0
	  },
	  {
	    "characters": 92,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 93,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 94,
	    "tweets": 2,
	    "engagements": 0
	  },
	  {
	    "characters": 95,
	    "tweets": 1,
	    "engagements": 0
	  },
	  {
	    "characters": 96,
	    "tweets": 1,
	    "engagements": 3
	  },
	  {
	    "characters": 97,
	    "tweets": 1,
	    "engagements": 3976
	  },
	  {
	    "characters": 98,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 99,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 100,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 101,
	    "tweets": 1,
	    "engagements": 4
	  },
	  {
	    "characters": 102,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 103,
	    "tweets": 1,
	    "engagements": 50
	  },
	  {
	    "characters": 104,
	    "tweets": 1,
	    "engagements": 1
	  },
	  {
	    "characters": 105,
	    "tweets": 1,
	    "engagements": 7
	  },
	  {
	    "characters": 106,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 107,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 108,
	    "tweets": 1,
	    "engagements": 250
	  },
	  {
	    "characters": 109,
	    "tweets": 1,
	    "engagements": 13
	  },
	  {
	    "characters": 110,
	    "tweets": 1,
	    "engagements": 212
	  },
	  {
	    "characters": 111,
	    "tweets": 2,
	    "engagements": 1112
	  },
	  {
	    "characters": 112,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 113,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 114,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 115,
	    "tweets": 2,
	    "engagements": 9
	  },
	  {
	    "characters": 116,
	    "tweets": 3,
	    "engagements": 0
	  },
	  {
	    "characters": 117,
	    "tweets": 3,
	    "engagements": 11
	  },
	  {
	    "characters": 118,
	    "tweets": 4,
	    "engagements": 0
	  },
	  {
	    "characters": 119,
	    "tweets": 2,
	    "engagements": 31
	  },
	  {
	    "characters": 120,
	    "tweets": 3,
	    "engagements": 0
	  },
	  {
	    "characters": 121,
	    "tweets": 1,
	    "engagements": 0
	  },
	  {
	    "characters": 122,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 123,
	    "tweets": 2,
	    "engagements": 34
	  },
	  {
	    "characters": 124,
	    "tweets": 2,
	    "engagements": 14
	  },
	  {
	    "characters": 125,
	    "tweets": 2,
	    "engagements": 9
	  },
	  {
	    "characters": 126,
	    "tweets": 2,
	    "engagements": 25
	  },
	  {
	    "characters": 127,
	    "tweets": 2,
	    "engagements": 16
	  },
	  {
	    "characters": 128,
	    "tweets": 1,
	    "engagements": 28
	  },
	  {
	    "characters": 129,
	    "tweets": 4,
	    "engagements": 58
	  },
	  {
	    "characters": 130,
	    "tweets": 3,
	    "engagements": 30
	  },
	  {
	    "characters": 131,
	    "tweets": 4,
	    "engagements": 35
	  },
	  {
	    "characters": 132,
	    "tweets": 1,
	    "engagements": 34
	  },
	  {
	    "characters": 133,
	    "tweets": 2,
	    "engagements": 11
	  },
	  {
	    "characters": 134,
	    "tweets": 1,
	    "engagements": 13
	  },
	  {
	    "characters": 135,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 136,
	    "tweets": 3,
	    "engagements": 68
	  },
	  {
	    "characters": 137,
	    "tweets": 2,
	    "engagements": 23
	  },
	  {
	    "characters": 138,
	    "tweets": 4,
	    "engagements": 38
	  },
	  {
	    "characters": 139,
	    "tweets": 9,
	    "engagements": 114
	  },
	  {
	    "characters": 140,
	    "tweets": 10,
	    "engagements": 23
	  }
	];


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 0,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 1,
	    "tweets": 1,
	    "engagements": 685
	  },
	  {
	    "characters": 2,
	    "tweets": 1,
	    "engagements": 757
	  },
	  {
	    "characters": 3,
	    "tweets": 1,
	    "engagements": 35
	  },
	  {
	    "characters": 4,
	    "tweets": 1,
	    "engagements": 13248
	  },
	  {
	    "characters": 5,
	    "tweets": 1,
	    "engagements": 1221
	  },
	  {
	    "characters": 6,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 7,
	    "tweets": 1,
	    "engagements": 17117
	  },
	  {
	    "characters": 8,
	    "tweets": 1,
	    "engagements": 1443
	  },
	  {
	    "characters": 9,
	    "tweets": 1,
	    "engagements": 310
	  },
	  {
	    "characters": 10,
	    "tweets": 4,
	    "engagements": 8821
	  },
	  {
	    "characters": 11,
	    "tweets": 1,
	    "engagements": 241
	  },
	  {
	    "characters": 12,
	    "tweets": 1,
	    "engagements": 1783
	  },
	  {
	    "characters": 13,
	    "tweets": 5,
	    "engagements": 8261
	  },
	  {
	    "characters": 14,
	    "tweets": 3,
	    "engagements": 4354
	  },
	  {
	    "characters": 15,
	    "tweets": 2,
	    "engagements": 5475
	  },
	  {
	    "characters": 16,
	    "tweets": 3,
	    "engagements": 7328
	  },
	  {
	    "characters": 17,
	    "tweets": 2,
	    "engagements": 1980
	  },
	  {
	    "characters": 18,
	    "tweets": 2,
	    "engagements": 16385
	  },
	  {
	    "characters": 19,
	    "tweets": 1,
	    "engagements": 604
	  },
	  {
	    "characters": 20,
	    "tweets": 4,
	    "engagements": 2006
	  },
	  {
	    "characters": 21,
	    "tweets": 3,
	    "engagements": 5462
	  },
	  {
	    "characters": 22,
	    "tweets": 9,
	    "engagements": 5736
	  },
	  {
	    "characters": 23,
	    "tweets": 41,
	    "engagements": 5078
	  },
	  {
	    "characters": 24,
	    "tweets": 5,
	    "engagements": 2002
	  },
	  {
	    "characters": 25,
	    "tweets": 12,
	    "engagements": 1520
	  },
	  {
	    "characters": 26,
	    "tweets": 11,
	    "engagements": 1349
	  },
	  {
	    "characters": 27,
	    "tweets": 21,
	    "engagements": 1833
	  },
	  {
	    "characters": 28,
	    "tweets": 13,
	    "engagements": 1708
	  },
	  {
	    "characters": 29,
	    "tweets": 7,
	    "engagements": 613
	  },
	  {
	    "characters": 30,
	    "tweets": 12,
	    "engagements": 2017
	  },
	  {
	    "characters": 31,
	    "tweets": 17,
	    "engagements": 2491
	  },
	  {
	    "characters": 32,
	    "tweets": 7,
	    "engagements": 2758
	  },
	  {
	    "characters": 33,
	    "tweets": 9,
	    "engagements": 3421
	  },
	  {
	    "characters": 34,
	    "tweets": 12,
	    "engagements": 11889
	  },
	  {
	    "characters": 35,
	    "tweets": 14,
	    "engagements": 1681
	  },
	  {
	    "characters": 36,
	    "tweets": 25,
	    "engagements": 567
	  },
	  {
	    "characters": 37,
	    "tweets": 14,
	    "engagements": 1285
	  },
	  {
	    "characters": 38,
	    "tweets": 18,
	    "engagements": 1521
	  },
	  {
	    "characters": 39,
	    "tweets": 17,
	    "engagements": 3633
	  },
	  {
	    "characters": 40,
	    "tweets": 17,
	    "engagements": 1051
	  },
	  {
	    "characters": 41,
	    "tweets": 11,
	    "engagements": 1906
	  },
	  {
	    "characters": 42,
	    "tweets": 12,
	    "engagements": 1446
	  },
	  {
	    "characters": 43,
	    "tweets": 16,
	    "engagements": 474
	  },
	  {
	    "characters": 44,
	    "tweets": 15,
	    "engagements": 8349
	  },
	  {
	    "characters": 45,
	    "tweets": 17,
	    "engagements": 2016
	  },
	  {
	    "characters": 46,
	    "tweets": 20,
	    "engagements": 785
	  },
	  {
	    "characters": 47,
	    "tweets": 24,
	    "engagements": 508
	  },
	  {
	    "characters": 48,
	    "tweets": 7,
	    "engagements": 1367
	  },
	  {
	    "characters": 49,
	    "tweets": 20,
	    "engagements": 4067
	  },
	  {
	    "characters": 50,
	    "tweets": 19,
	    "engagements": 2210
	  },
	  {
	    "characters": 51,
	    "tweets": 13,
	    "engagements": 2439
	  },
	  {
	    "characters": 52,
	    "tweets": 13,
	    "engagements": 2128
	  },
	  {
	    "characters": 53,
	    "tweets": 6,
	    "engagements": 799
	  },
	  {
	    "characters": 54,
	    "tweets": 12,
	    "engagements": 1411
	  },
	  {
	    "characters": 55,
	    "tweets": 11,
	    "engagements": 1643
	  },
	  {
	    "characters": 56,
	    "tweets": 18,
	    "engagements": 5997
	  },
	  {
	    "characters": 57,
	    "tweets": 13,
	    "engagements": 957
	  },
	  {
	    "characters": 58,
	    "tweets": 15,
	    "engagements": 1059
	  },
	  {
	    "characters": 59,
	    "tweets": 7,
	    "engagements": 193
	  },
	  {
	    "characters": 60,
	    "tweets": 21,
	    "engagements": 1549
	  },
	  {
	    "characters": 61,
	    "tweets": 19,
	    "engagements": 1927
	  },
	  {
	    "characters": 62,
	    "tweets": 19,
	    "engagements": 1645
	  },
	  {
	    "characters": 63,
	    "tweets": 17,
	    "engagements": 783
	  },
	  {
	    "characters": 64,
	    "tweets": 19,
	    "engagements": 1301
	  },
	  {
	    "characters": 65,
	    "tweets": 19,
	    "engagements": 2291
	  },
	  {
	    "characters": 66,
	    "tweets": 14,
	    "engagements": 329
	  },
	  {
	    "characters": 67,
	    "tweets": 18,
	    "engagements": 3045
	  },
	  {
	    "characters": 68,
	    "tweets": 18,
	    "engagements": 679
	  },
	  {
	    "characters": 69,
	    "tweets": 15,
	    "engagements": 1636
	  },
	  {
	    "characters": 70,
	    "tweets": 14,
	    "engagements": 4430
	  },
	  {
	    "characters": 71,
	    "tweets": 17,
	    "engagements": 549
	  },
	  {
	    "characters": 72,
	    "tweets": 10,
	    "engagements": 659
	  },
	  {
	    "characters": 73,
	    "tweets": 7,
	    "engagements": 1381
	  },
	  {
	    "characters": 74,
	    "tweets": 12,
	    "engagements": 1317
	  },
	  {
	    "characters": 75,
	    "tweets": 12,
	    "engagements": 907
	  },
	  {
	    "characters": 76,
	    "tweets": 17,
	    "engagements": 1039
	  },
	  {
	    "characters": 77,
	    "tweets": 15,
	    "engagements": 2470
	  },
	  {
	    "characters": 78,
	    "tweets": 14,
	    "engagements": 1435
	  },
	  {
	    "characters": 79,
	    "tweets": 10,
	    "engagements": 941
	  },
	  {
	    "characters": 80,
	    "tweets": 16,
	    "engagements": 951
	  },
	  {
	    "characters": 81,
	    "tweets": 10,
	    "engagements": 2232
	  },
	  {
	    "characters": 82,
	    "tweets": 5,
	    "engagements": 417
	  },
	  {
	    "characters": 83,
	    "tweets": 15,
	    "engagements": 858
	  },
	  {
	    "characters": 84,
	    "tweets": 14,
	    "engagements": 1443
	  },
	  {
	    "characters": 85,
	    "tweets": 13,
	    "engagements": 1114
	  },
	  {
	    "characters": 86,
	    "tweets": 12,
	    "engagements": 646
	  },
	  {
	    "characters": 87,
	    "tweets": 9,
	    "engagements": 4197
	  },
	  {
	    "characters": 88,
	    "tweets": 11,
	    "engagements": 1840
	  },
	  {
	    "characters": 89,
	    "tweets": 12,
	    "engagements": 1411
	  },
	  {
	    "characters": 90,
	    "tweets": 3,
	    "engagements": 148
	  },
	  {
	    "characters": 91,
	    "tweets": 10,
	    "engagements": 620
	  },
	  {
	    "characters": 92,
	    "tweets": 8,
	    "engagements": 1835
	  },
	  {
	    "characters": 93,
	    "tweets": 10,
	    "engagements": 1828
	  },
	  {
	    "characters": 94,
	    "tweets": 8,
	    "engagements": 1733
	  },
	  {
	    "characters": 95,
	    "tweets": 11,
	    "engagements": 1426
	  },
	  {
	    "characters": 96,
	    "tweets": 12,
	    "engagements": 3545
	  },
	  {
	    "characters": 97,
	    "tweets": 10,
	    "engagements": 2786
	  },
	  {
	    "characters": 98,
	    "tweets": 6,
	    "engagements": 1036
	  },
	  {
	    "characters": 99,
	    "tweets": 12,
	    "engagements": 1341
	  },
	  {
	    "characters": 100,
	    "tweets": 9,
	    "engagements": 1520
	  },
	  {
	    "characters": 101,
	    "tweets": 11,
	    "engagements": 463
	  },
	  {
	    "characters": 102,
	    "tweets": 10,
	    "engagements": 4230
	  },
	  {
	    "characters": 103,
	    "tweets": 8,
	    "engagements": 1016
	  },
	  {
	    "characters": 104,
	    "tweets": 8,
	    "engagements": 4456
	  },
	  {
	    "characters": 105,
	    "tweets": 6,
	    "engagements": 1681
	  },
	  {
	    "characters": 106,
	    "tweets": 7,
	    "engagements": 2183
	  },
	  {
	    "characters": 107,
	    "tweets": 10,
	    "engagements": 1074
	  },
	  {
	    "characters": 108,
	    "tweets": 9,
	    "engagements": 2030
	  },
	  {
	    "characters": 109,
	    "tweets": 8,
	    "engagements": 11676
	  },
	  {
	    "characters": 110,
	    "tweets": 13,
	    "engagements": 806
	  },
	  {
	    "characters": 111,
	    "tweets": 5,
	    "engagements": 8199
	  },
	  {
	    "characters": 112,
	    "tweets": 9,
	    "engagements": 2187
	  },
	  {
	    "characters": 113,
	    "tweets": 17,
	    "engagements": 1787
	  },
	  {
	    "characters": 114,
	    "tweets": 9,
	    "engagements": 1896
	  },
	  {
	    "characters": 115,
	    "tweets": 9,
	    "engagements": 289
	  },
	  {
	    "characters": 116,
	    "tweets": 12,
	    "engagements": 3413
	  },
	  {
	    "characters": 117,
	    "tweets": 12,
	    "engagements": 2426
	  },
	  {
	    "characters": 118,
	    "tweets": 15,
	    "engagements": 4092
	  },
	  {
	    "characters": 119,
	    "tweets": 18,
	    "engagements": 1550
	  },
	  {
	    "characters": 120,
	    "tweets": 19,
	    "engagements": 1240
	  },
	  {
	    "characters": 121,
	    "tweets": 22,
	    "engagements": 2556
	  },
	  {
	    "characters": 122,
	    "tweets": 8,
	    "engagements": 5324
	  },
	  {
	    "characters": 123,
	    "tweets": 9,
	    "engagements": 1199
	  },
	  {
	    "characters": 124,
	    "tweets": 12,
	    "engagements": 3569
	  },
	  {
	    "characters": 125,
	    "tweets": 11,
	    "engagements": 1218
	  },
	  {
	    "characters": 126,
	    "tweets": 12,
	    "engagements": 869
	  },
	  {
	    "characters": 127,
	    "tweets": 14,
	    "engagements": 1068
	  },
	  {
	    "characters": 128,
	    "tweets": 14,
	    "engagements": 2284
	  },
	  {
	    "characters": 129,
	    "tweets": 13,
	    "engagements": 2751
	  },
	  {
	    "characters": 130,
	    "tweets": 13,
	    "engagements": 2128
	  },
	  {
	    "characters": 131,
	    "tweets": 15,
	    "engagements": 6300
	  },
	  {
	    "characters": 132,
	    "tweets": 17,
	    "engagements": 2474
	  },
	  {
	    "characters": 133,
	    "tweets": 15,
	    "engagements": 3381
	  },
	  {
	    "characters": 134,
	    "tweets": 23,
	    "engagements": 5320
	  },
	  {
	    "characters": 135,
	    "tweets": 20,
	    "engagements": 2924
	  },
	  {
	    "characters": 136,
	    "tweets": 25,
	    "engagements": 1079
	  },
	  {
	    "characters": 137,
	    "tweets": 35,
	    "engagements": 4011
	  },
	  {
	    "characters": 138,
	    "tweets": 57,
	    "engagements": 2153
	  },
	  {
	    "characters": 139,
	    "tweets": 58,
	    "engagements": 2710
	  },
	  {
	    "characters": 140,
	    "tweets": 83,
	    "engagements": 2133
	  }
	];


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "characters": 0,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 1,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 2,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 3,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 4,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 5,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 6,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 7,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 8,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 9,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 10,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 11,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 12,
	    "tweets": 1,
	    "engagements": 7
	  },
	  {
	    "characters": 13,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 14,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 15,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 16,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 17,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 18,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 19,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 20,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 21,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 22,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 23,
	    "tweets": 17,
	    "engagements": 17
	  },
	  {
	    "characters": 24,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 25,
	    "tweets": 1,
	    "engagements": 24
	  },
	  {
	    "characters": 26,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 27,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 28,
	    "tweets": 1,
	    "engagements": 25
	  },
	  {
	    "characters": 29,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 30,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 31,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 32,
	    "tweets": 1,
	    "engagements": 24
	  },
	  {
	    "characters": 33,
	    "tweets": 3,
	    "engagements": 50
	  },
	  {
	    "characters": 34,
	    "tweets": 1,
	    "engagements": 10
	  },
	  {
	    "characters": 35,
	    "tweets": 2,
	    "engagements": 7
	  },
	  {
	    "characters": 36,
	    "tweets": 2,
	    "engagements": 11
	  },
	  {
	    "characters": 37,
	    "tweets": 2,
	    "engagements": 13
	  },
	  {
	    "characters": 38,
	    "tweets": 1,
	    "engagements": 47
	  },
	  {
	    "characters": 39,
	    "tweets": 3,
	    "engagements": 259
	  },
	  {
	    "characters": 40,
	    "tweets": 4,
	    "engagements": 120
	  },
	  {
	    "characters": 41,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 42,
	    "tweets": 1,
	    "engagements": 10
	  },
	  {
	    "characters": 43,
	    "tweets": 1,
	    "engagements": 12
	  },
	  {
	    "characters": 44,
	    "tweets": 2,
	    "engagements": 14
	  },
	  {
	    "characters": 45,
	    "tweets": 2,
	    "engagements": 117
	  },
	  {
	    "characters": 46,
	    "tweets": 2,
	    "engagements": 8
	  },
	  {
	    "characters": 47,
	    "tweets": 1,
	    "engagements": 4
	  },
	  {
	    "characters": 48,
	    "tweets": 1,
	    "engagements": 35
	  },
	  {
	    "characters": 49,
	    "tweets": 3,
	    "engagements": 19
	  },
	  {
	    "characters": 50,
	    "tweets": 3,
	    "engagements": 61
	  },
	  {
	    "characters": 51,
	    "tweets": 2,
	    "engagements": 58
	  },
	  {
	    "characters": 52,
	    "tweets": 0,
	    "engagements": 0
	  },
	  {
	    "characters": 53,
	    "tweets": 6,
	    "engagements": 20
	  },
	  {
	    "characters": 54,
	    "tweets": 2,
	    "engagements": 38
	  },
	  {
	    "characters": 55,
	    "tweets": 7,
	    "engagements": 43
	  },
	  {
	    "characters": 56,
	    "tweets": 6,
	    "engagements": 21
	  },
	  {
	    "characters": 57,
	    "tweets": 5,
	    "engagements": 21
	  },
	  {
	    "characters": 58,
	    "tweets": 3,
	    "engagements": 56
	  },
	  {
	    "characters": 59,
	    "tweets": 6,
	    "engagements": 25
	  },
	  {
	    "characters": 60,
	    "tweets": 13,
	    "engagements": 138
	  },
	  {
	    "characters": 61,
	    "tweets": 6,
	    "engagements": 34
	  },
	  {
	    "characters": 62,
	    "tweets": 12,
	    "engagements": 31
	  },
	  {
	    "characters": 63,
	    "tweets": 8,
	    "engagements": 35
	  },
	  {
	    "characters": 64,
	    "tweets": 4,
	    "engagements": 47
	  },
	  {
	    "characters": 65,
	    "tweets": 4,
	    "engagements": 15
	  },
	  {
	    "characters": 66,
	    "tweets": 9,
	    "engagements": 80
	  },
	  {
	    "characters": 67,
	    "tweets": 11,
	    "engagements": 43
	  },
	  {
	    "characters": 68,
	    "tweets": 20,
	    "engagements": 35
	  },
	  {
	    "characters": 69,
	    "tweets": 16,
	    "engagements": 49
	  },
	  {
	    "characters": 70,
	    "tweets": 21,
	    "engagements": 74
	  },
	  {
	    "characters": 71,
	    "tweets": 21,
	    "engagements": 55
	  },
	  {
	    "characters": 72,
	    "tweets": 14,
	    "engagements": 37
	  },
	  {
	    "characters": 73,
	    "tweets": 17,
	    "engagements": 45
	  },
	  {
	    "characters": 74,
	    "tweets": 16,
	    "engagements": 53
	  },
	  {
	    "characters": 75,
	    "tweets": 19,
	    "engagements": 48
	  },
	  {
	    "characters": 76,
	    "tweets": 17,
	    "engagements": 32
	  },
	  {
	    "characters": 77,
	    "tweets": 15,
	    "engagements": 28
	  },
	  {
	    "characters": 78,
	    "tweets": 24,
	    "engagements": 32
	  },
	  {
	    "characters": 79,
	    "tweets": 18,
	    "engagements": 73
	  },
	  {
	    "characters": 80,
	    "tweets": 8,
	    "engagements": 80
	  },
	  {
	    "characters": 81,
	    "tweets": 23,
	    "engagements": 40
	  },
	  {
	    "characters": 82,
	    "tweets": 28,
	    "engagements": 47
	  },
	  {
	    "characters": 83,
	    "tweets": 19,
	    "engagements": 67
	  },
	  {
	    "characters": 84,
	    "tweets": 38,
	    "engagements": 31
	  },
	  {
	    "characters": 85,
	    "tweets": 23,
	    "engagements": 27
	  },
	  {
	    "characters": 86,
	    "tweets": 25,
	    "engagements": 42
	  },
	  {
	    "characters": 87,
	    "tweets": 29,
	    "engagements": 57
	  },
	  {
	    "characters": 88,
	    "tweets": 29,
	    "engagements": 51
	  },
	  {
	    "characters": 89,
	    "tweets": 31,
	    "engagements": 67
	  },
	  {
	    "characters": 90,
	    "tweets": 34,
	    "engagements": 45
	  },
	  {
	    "characters": 91,
	    "tweets": 32,
	    "engagements": 66
	  },
	  {
	    "characters": 92,
	    "tweets": 28,
	    "engagements": 36
	  },
	  {
	    "characters": 93,
	    "tweets": 36,
	    "engagements": 57
	  },
	  {
	    "characters": 94,
	    "tweets": 28,
	    "engagements": 87
	  },
	  {
	    "characters": 95,
	    "tweets": 41,
	    "engagements": 69
	  },
	  {
	    "characters": 96,
	    "tweets": 40,
	    "engagements": 47
	  },
	  {
	    "characters": 97,
	    "tweets": 30,
	    "engagements": 109
	  },
	  {
	    "characters": 98,
	    "tweets": 46,
	    "engagements": 65
	  },
	  {
	    "characters": 99,
	    "tweets": 27,
	    "engagements": 65
	  },
	  {
	    "characters": 100,
	    "tweets": 29,
	    "engagements": 51
	  },
	  {
	    "characters": 101,
	    "tweets": 27,
	    "engagements": 40
	  },
	  {
	    "characters": 102,
	    "tweets": 29,
	    "engagements": 66
	  },
	  {
	    "characters": 103,
	    "tweets": 40,
	    "engagements": 58
	  },
	  {
	    "characters": 104,
	    "tweets": 40,
	    "engagements": 45
	  },
	  {
	    "characters": 105,
	    "tweets": 33,
	    "engagements": 52
	  },
	  {
	    "characters": 106,
	    "tweets": 33,
	    "engagements": 43
	  },
	  {
	    "characters": 107,
	    "tweets": 38,
	    "engagements": 70
	  },
	  {
	    "characters": 108,
	    "tweets": 39,
	    "engagements": 70
	  },
	  {
	    "characters": 109,
	    "tweets": 23,
	    "engagements": 44
	  },
	  {
	    "characters": 110,
	    "tweets": 57,
	    "engagements": 32
	  },
	  {
	    "characters": 111,
	    "tweets": 38,
	    "engagements": 70
	  },
	  {
	    "characters": 112,
	    "tweets": 37,
	    "engagements": 46
	  },
	  {
	    "characters": 113,
	    "tweets": 50,
	    "engagements": 63
	  },
	  {
	    "characters": 114,
	    "tweets": 36,
	    "engagements": 43
	  },
	  {
	    "characters": 115,
	    "tweets": 47,
	    "engagements": 58
	  },
	  {
	    "characters": 116,
	    "tweets": 30,
	    "engagements": 41
	  },
	  {
	    "characters": 117,
	    "tweets": 41,
	    "engagements": 65
	  },
	  {
	    "characters": 118,
	    "tweets": 46,
	    "engagements": 59
	  },
	  {
	    "characters": 119,
	    "tweets": 41,
	    "engagements": 57
	  },
	  {
	    "characters": 120,
	    "tweets": 31,
	    "engagements": 49
	  },
	  {
	    "characters": 121,
	    "tweets": 41,
	    "engagements": 56
	  },
	  {
	    "characters": 122,
	    "tweets": 34,
	    "engagements": 62
	  },
	  {
	    "characters": 123,
	    "tweets": 35,
	    "engagements": 40
	  },
	  {
	    "characters": 124,
	    "tweets": 48,
	    "engagements": 46
	  },
	  {
	    "characters": 125,
	    "tweets": 40,
	    "engagements": 41
	  },
	  {
	    "characters": 126,
	    "tweets": 32,
	    "engagements": 65
	  },
	  {
	    "characters": 127,
	    "tweets": 35,
	    "engagements": 70
	  },
	  {
	    "characters": 128,
	    "tweets": 48,
	    "engagements": 56
	  },
	  {
	    "characters": 129,
	    "tweets": 47,
	    "engagements": 66
	  },
	  {
	    "characters": 130,
	    "tweets": 41,
	    "engagements": 73
	  },
	  {
	    "characters": 131,
	    "tweets": 65,
	    "engagements": 75
	  },
	  {
	    "characters": 132,
	    "tweets": 63,
	    "engagements": 102
	  },
	  {
	    "characters": 133,
	    "tweets": 70,
	    "engagements": 65
	  },
	  {
	    "characters": 134,
	    "tweets": 64,
	    "engagements": 88
	  },
	  {
	    "characters": 135,
	    "tweets": 90,
	    "engagements": 80
	  },
	  {
	    "characters": 136,
	    "tweets": 71,
	    "engagements": 74
	  },
	  {
	    "characters": 137,
	    "tweets": 75,
	    "engagements": 79
	  },
	  {
	    "characters": 138,
	    "tweets": 86,
	    "engagements": 66
	  },
	  {
	    "characters": 139,
	    "tweets": 98,
	    "engagements": 90
	  },
	  {
	    "characters": 140,
	    "tweets": 80,
	    "engagements": 54
	  }
	];


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	  context.font = '0.5em sans-serif';
	  context.fillStyle = 'black';
	  context.textBaseline = 'middle';
	  context.fillText(140, canvas.x_right + 5, canvas.y_bottom);

	  // DRAW Y AXIS LEGEND
	  context.font = '0.5em sans-serif';
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
	    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ': The examined accounts sent ' + tweet.tweets + ' tweets that were ' + tweet.characters + ' characters long. On average, those tweets received ' + tweet.engagements + ' retweets.';
	  } else {
	    document.getElementById('tweetInfo_' + canvas.name_val).textContent = canvas.category + ': The examined accounts sent ' + tweet.tweets + ' tweet that was ' + tweet.characters + ' characters long. That single tweet received ' + tweet.engagements + ' retweets.';
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