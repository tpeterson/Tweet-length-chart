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
	  var CanvasObj = __webpack_require__(3);
	  var layoutCanvas = __webpack_require__(4);
	  var chartTweets = __webpack_require__(5);
	  var identifyDot = __webpack_require__(6);
	  var clearCanvas = __webpack_require__(7);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "brand": "AppStore",
	    "text": "#NowPlaying: HoPiKo, our Free App of the Week. \nhttps://t.co/UcuSUmmggI\nhttps://t.co/uX2Rf2NRv4",
	    "characters": 95,
	    "retweets": 41,
	    "favorites": 72,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 2,
	    "media": 0
	  },
	  {
	    "brand": "AppStore",
	    "text": "With @Vevo, music videos on #AppleTV look awesome!💃\nhttps://t.co/89UMGxWVuR",
	    "characters": 76,
	    "retweets": 135,
	    "favorites": 318,
	    "hashtags": 1,
	    "user_mentions": 1,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "AppStore",
	    "text": "The search for the next voice begins Monday 8/7c on @nbc. We'll have #TheVoice app ready. 😀 https://t.co/rN59z4ePy4\nhttps://t.co/Np9Npapd9H",
	    "characters": 140,
	    "retweets": 111,
	    "favorites": 309,
	    "hashtags": 1,
	    "user_mentions": 1,
	    "urls": 2,
	    "media": 0
	  },
	  {
	    "brand": "Microsoft",
	    "text": "We’re supporting the @WhiteHouse #PrecisionMedicine initiative with no cost #genomics data hosting on Azure. https://t.co/cr0zY6H7lG",
	    "characters": 132,
	    "retweets": 87,
	    "favorites": 169,
	    "hashtags": 2,
	    "user_mentions": 1,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Microsoft",
	    "text": "These @Skype designers are changing what communication looks like: https://t.co/rKEK4p2IHj https://t.co/iBk8EyLtGQ",
	    "characters": 114,
	    "retweets": 145,
	    "favorites": 274,
	    "hashtags": 0,
	    "user_mentions": 1,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "samsung",
	    "text": "#갤럭시S7 의 배려심은 끝이 없습니다...! 자체 방수, 방진 기능에 최적의 그립감까지 보장하는 센스! 오늘도 갤덕들을 미소 짓게 만드는 #갤럭시S7 의 디자인 https://t.co/P0ACW0MLVh",
	    "characters": 114,
	    "retweets": 6,
	    "favorites": 17,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "samsung",
	    "text": "마지막에 웃는 자가 위너! 지친 얼굴로 4km를 달리고 있는 그대를 위한 한마디 “곁눈질하지 말고 앞만 보고 달려라!” 삼성전자 생산기술연구소 유호선 상무의 #삼성인이청춘에게 &gt;&gt; https://t.co/7GOMULEKtz",
	    "characters": 130,
	    "retweets": 6,
	    "favorites": 7,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "samsung",
	    "text": "냄새가 난다…내꺼 냄새! #갤럭시S7 의 #OLED, 역대 최고의 화질로 등극하다! 눈부신 햇빛 아래에서도~어두운 방안에서도 갤S7이 빛나는 이유 #삼성디스플레이 &gt;&gt; https://t.co/ijoi9HFCBP",
	    "characters": 123,
	    "retweets": 6,
	    "favorites": 9,
	    "hashtags": 3,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "samsung",
	    "text": "왜 이제야 오셨습니까…! 오매불망 기다려온 #갤럭시S7 #갤럭시S7엣지의 스펙을 사자성어로 준비했사옵니다~ 저와 함께 한번 읊어보시지요! #퐁당안심 #취향저격 &gt;&gt; https://t.co/7NzDqseQua",
	    "characters": 121,
	    "retweets": 4,
	    "favorites": 22,
	    "hashtags": 4,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "samsung",
	    "text": "사막여우.. 넘나 귀여운 것..! 겨울에는 애벌레 모래케익, 부표 동굴이 제맛! 추운 겨울 움츠려든 사막여우의 본능을 깨워라! 사막여우를 위한 #에버랜드 사육사들의 인리치먼트 활동 백과! #사막여우_너는_더럽 https://t.co/aviTnDgZPy",
	    "characters": 140,
	    "retweets": 2,
	    "favorites": 14,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "ATT",
	    "text": "Take this @BuzzFeed quiz and find out what your #Oscars faux pas would be. Catch all the awards action with @DIRECTV https://t.co/QojhxF2icV",
	    "characters": 140,
	    "retweets": 4,
	    "favorites": 7,
	    "hashtags": 1,
	    "user_mentions": 2,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "ATT",
	    "text": "We're hosting an awards watch party right here on Twitter! Join us Sunday for the #RedCarpet and #Oscars at 6/5c! https://t.co/ny1szYMRqS",
	    "characters": 137,
	    "retweets": 22,
	    "favorites": 33,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "GEICO",
	    "text": "Not sure what to do with your family tonight? We've got your game plan.\nhttps://t.co/M7kNPgThKa https://t.co/PIwrPAJGNr",
	    "characters": 119,
	    "retweets": 1,
	    "favorites": 1,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "GEICO",
	    "text": "In the market for a new vehicle? Make sure it's in the Top Safety Pick for 2016! https://t.co/juPPDsZpi8 https://t.co/TeD4rLYGnl",
	    "characters": 128,
	    "retweets": 3,
	    "favorites": 2,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "GEICO",
	    "text": "To open or not to open? Can you spot email scammers?https://t.co/2FoNQKdkIo https://t.co/8cJECMZSyv",
	    "characters": 99,
	    "retweets": 1,
	    "favorites": 2,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "GEICO",
	    "text": "#TipOfTheWeek: Plan for like burst pipes and damaged communication systems. More: https://t.co/Gm1BfYmQmR https://t.co/HkGCtzzIkj",
	    "characters": 129,
	    "retweets": 1,
	    "favorites": 4,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "StateFarm",
	    "text": "We’re always happy to #assist!  https://t.co/IOz9BS8JWF",
	    "characters": 55,
	    "retweets": 4,
	    "favorites": 9,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "StateFarm",
	    "text": "This is so great!! 😍 -Rachel  https://t.co/r4mrfxvMFi",
	    "characters": 54,
	    "retweets": 1,
	    "favorites": 7,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Toyota",
	    "text": "Lights, Camera, Drive! Enter a PSA in the #TeenDrive365 Video Challenge: https://t.co/nGHHVet0D2 https://t.co/2oF7fraGKX",
	    "characters": 120,
	    "retweets": 26,
	    "favorites": 18,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "chevrolet",
	    "text": "One fun assignment, so many priceless reactions! See how one teacher chose to #DayItForward.\nhttps://t.co/MoI2v5xmBD",
	    "characters": 116,
	    "retweets": 39,
	    "favorites": 67,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "chevrolet",
	    "text": "The Truck Life can be yours if you play your #TruckMonth cards right. #Silverado deals here: https://t.co/spW6VIbauJ https://t.co/a7SR4AOsBZ",
	    "characters": 140,
	    "retweets": 50,
	    "favorites": 180,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "Nissan",
	    "text": "Spotted. #SkylineSunday RT @JInsixiengmay23: My whole day has been made 😍 #R32 #Skyline https://t.co/Y5nu1mJVdu",
	    "characters": 112,
	    "retweets": 56,
	    "favorites": 130,
	    "hashtags": 3,
	    "user_mentions": 1,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "Nissan",
	    "text": "🤘🤘 #SaturdayZ MT @adnan_al_alawi: @Nissan @NissanME the best car show ever! Thank you 🙏🏻💚 https://t.co/rsG0gq8iyN",
	    "characters": 118,
	    "retweets": 93,
	    "favorites": 222,
	    "hashtags": 1,
	    "user_mentions": 3,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "Nissan",
	    "text": "Don't mess with the bull. #OMGTR #FastFriday \n\n🚗: @Diego_Vossen \n📷: @Brian_vossen https://t.co/YBP4awQcG7",
	    "characters": 107,
	    "retweets": 160,
	    "favorites": 312,
	    "hashtags": 2,
	    "user_mentions": 2,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "sprint",
	    "text": "Thanks @ValaAfshar for sharing, this is amazing. https://t.co/3YQagelgdy",
	    "characters": 72,
	    "retweets": 4,
	    "favorites": 7,
	    "hashtags": 0,
	    "user_mentions": 1,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "sprint",
	    "text": "One of the best nights of the year! https://t.co/dNfLQUBA5V",
	    "characters": 59,
	    "retweets": 7,
	    "favorites": 17,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Ford",
	    "text": "#Cleveland rocks and so does EcoBoost. We’re proud to be investing in upgrades and jobs there. #CLEAutoShow https://t.co/t4Io7CNhb1",
	    "characters": 131,
	    "retweets": 84,
	    "favorites": 199,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "Ford",
	    "text": "Congrats to journey-sharing app ‘Jaunt’ the winner of the #FordSmartMobility Game Challenge. #FordMWC\nhttps://t.co/ejsOp9tTFl",
	    "characters": 125,
	    "retweets": 24,
	    "favorites": 30,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Ford",
	    "text": "Here's how #Ford uses vinyl camouflage to keep new vehicles under wraps. https://t.co/6sMTrT9NT4",
	    "characters": 96,
	    "retweets": 43,
	    "favorites": 78,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Ford",
	    "text": "Vintage? ✔️\n\n#BuiltFordTough? ✔️ #TBT https://t.co/R2riHWvazv",
	    "characters": 61,
	    "retweets": 83,
	    "favorites": 199,
	    "hashtags": 2,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "Ford",
	    "text": "ICYMI: What you need to know about the new 2017 #Ford #Explorer XLT Sport Appearance Package. #ExploreMore https://t.co/98qY4xCp0q",
	    "characters": 130,
	    "retweets": 67,
	    "favorites": 108,
	    "hashtags": 3,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Target",
	    "text": "All TV lovers &amp; binge-watch warriors: We've got a deal for you on Snapchat! 👻: Target https://t.co/JTaV9TdAlQ https://t.co/DmtfQMeac8",
	    "characters": 138,
	    "retweets": 10,
	    "favorites": 43,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "XFINITY",
	    "text": "It's #Oscars day! What are you wearing? Who are you rooting for? https://t.co/wL69lsBNki",
	    "characters": 88,
	    "retweets": 3,
	    "favorites": 5,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "XFINITY",
	    "text": "We’re bringing you closer to #NASCAR than ever before! Check out the #XFINITYSeries #360video: https://t.co/7uWwb0eBWA #VR",
	    "characters": 122,
	    "retweets": 3,
	    "favorites": 7,
	    "hashtags": 4,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 0
	  },
	  {
	    "brand": "Progressive",
	    "text": "Turn saving into a game, like challenging yourself to “no spend” days. https://t.co/ISaKVTmnkz https://t.co/54eymfdFPC",
	    "characters": 118,
	    "retweets": 5,
	    "favorites": 1,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  },
	  {
	    "brand": "LOrealParisUSA",
	    "text": "Biting our Infaillible Rouge Alert lips it's the weekend 🔥💄🔥💄 https://t.co/83G9A1zJTs",
	    "characters": 89,
	    "retweets": 8,
	    "favorites": 36,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  },
	  {
	    "brand": "LOrealParisUSA",
	    "text": "❤️ @TheRue  https://t.co/cuLIHGurqC",
	    "characters": 35,
	    "retweets": 5,
	    "favorites": 13,
	    "hashtags": 0,
	    "user_mentions": 1,
	    "urls": 1,
	    "media": 0
	  }
	];


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [{
	  "brand_name": "XFINITY",
	  "tweets": [{
	    "brand": "XFINITY",
	    "text": "#MarchMadness continues…ALL DAY starting at 12pmET. Stream LIVE here: https://t.co/L8z6WQoIzy https://t.co/NpMTDRZ8f9",
	    "characters": 117,
	    "retweets": 1,
	    "favorites": 3,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 1,
	    "media": 1
	  }],
	  "avg_chars": 117
	}, {
	  "brand_name": "sprint",
	  "tweets": [{
	    "brand": "sprint",
	    "text": "May you find a pot of gold on this #StPatricksDay. https://t.co/InEEaSOQWl",
	    "characters": 74,
	    "retweets": 45,
	    "favorites": 60,
	    "hashtags": 1,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  }, {
	    "brand": "sprint",
	    "text": "We won’t mislead you like others. Switch and save 50% off most Verizon, AT&amp;T, and T-Mobile rate plans. https://t.co/0Am5oVqd66",
	    "characters": 130,
	    "retweets": 63,
	    "favorites": 66,
	    "hashtags": 0,
	    "user_mentions": 0,
	    "urls": 0,
	    "media": 1
	  }],
	  "avg_chars": 102
	}, {
	  "brand_name": "Toyota",
	  "tweets": [{
	    "brand": "Toyota",
	    "text": "If you're at @thefader FORT tomorrow, join us in supporting @MyMusic_Rx Rock Show for Kids. #ToyotaGiving",
	    "characters": 105,
	    "retweets": 9,
	    "favorites": 19,
	    "hashtags": 1,
	    "user_mentions": 2,
	    "urls": 0,
	    "media": 0
	  }, {
	    "brand": "Toyota",
	    "text": "Help @MyMusic_Rx deliver the healing power of music to hospitalized kids &amp; teens. Share your memories. #ToyotaGiving https://t.co/pTMJP02SAG",
	    "characters": 144,
	    "retweets": 33,
	    "favorites": 51,
	    "hashtags": 1,
	    "user_mentions": 1,
	    "urls": 0,
	    "media": 1
	  }],
	  "avg_chars": 124.5
	}];


/***/ },
/* 3 */
/***/ function(module, exports) {

	function CanvasObj(canvas) {
	  this.elem = document.getElementById(canvas);
	  this.width_val = document.getElementById(canvas).offsetWidth;
	  this.height_val = document.getElementById(canvas).offsetHeight;
	  this.x_left = 50;
	  this.y_top = 50;
	  this.x_right = 500;
	  this.y_bottom = 550;
	  this.name_val =  canvas;
	}

	module.exports = CanvasObj;


/***/ },
/* 4 */
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
	  context.fillText('RETWEETS + FAVORITES', 0, 0);
	  context.restore();
	}

	module.exports = layoutCanvas;


/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ },
/* 6 */
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
	  document.getElementById('tweet_brand_' + canvas.name_val).textContent = tweet.brand;
	  document.getElementById('tweet_text_' + canvas.name_val).textContent = tweet.text;
	  document.getElementById('tweet_chars_' + canvas.name_val).textContent = tweet.characters + ' characters';
	  document.getElementById('tweet_rts_' + canvas.name_val).textContent = tweet.retweets + ' retweets';
	  document.getElementById('tweet_favs_' + canvas.name_val).textContent = tweet.favorites + ' favorites';
	}

	module.exports = identifyDot;


/***/ },
/* 7 */
/***/ function(module, exports) {

	function clearCanvas(canvas) {
	  var elem = document.getElementById(canvas.elem ? canvas.name : canvas);
	  var context = elem.getContext('2d');
	  context.clearRect(0, 0, elem.width, elem.height);
	}

	module.exports =  clearCanvas;


/***/ }
/******/ ]);