/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MasterView = __webpack_require__(/*! ./views/master_view.js */ \"./client/src/views/master_view.js\")\nconst DataLoad = __webpack_require__(/*! ./model/data_load.js */ \"./client/src/model/data_load.js\")\nconst GameLogic = __webpack_require__(/*! ./model/game_logic.js */ \"./client/src/model/game_logic.js\")\nconst PlayerInfoView = __webpack_require__(/*! ./views/player_info_view.js */ \"./client/src/views/player_info_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const playerElement = document.querySelector('#playerInfo');\n  const playerInfoView = new PlayerInfoView(playerElement);\n  playerInfoView.bindEvents();\n\n  const masterDiv = document.querySelector('.master_grid');\n  const masterView = new MasterView(masterDiv);\n  masterView.bindEvents();\n\n  const gameLogic = new GameLogic();\n  gameLogic.bindEvents();\n\n  const dataLoad = new DataLoad();\n  dataLoad.bindEvents();\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then(response => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/model/data_load.js":
/*!***************************************!*\
  !*** ./client/src/model/data_load.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst images = __webpack_require__(/*! ./images.js */ \"./client/src/model/images.js\")\nconst shuffle_function = __webpack_require__(/*! ./shuffle_function.js */ \"./client/src/model/shuffle_function.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\n\nconst DataLoad = function() {\n  this.request = new RequestHelper('/api/scoreboard')\n\n}\n\nDataLoad.prototype.bindEvents = function () {\n  PubSub.subscribe('Player:player-ready', (event) => {\n    const difficulty = event.detail\n    const level = this.setDifficulty(difficulty)\n    // publishLevel\n    this.getLeaderboard()\n    const allData = {images: this.images, leaderboard: this.leaderboard};\n   PubSub.publish('DataLoad:images-ready', allData)\n  })\n\n};\n\nDataLoad.prototype.getLeaderboard = function () {\n  this.request.get()\n    .then((entries) => this.leaderboard = entries)\n\n};\n\nDataLoad.prototype.setDifficulty = function (difficulty) {\n  console.log('difficulty set')\n  if (difficulty === \"easy\") {\n    PubSub.publish('DataLoad:set-difficulty', 8);\n    this.setImageCount(8)\n  } else if (difficulty === \"medium\") {\n    PubSub.publish('DataLoad:set-difficulty', 10);\n    this.setImageCount(10)\n  } else {\n    PubSub.publish('DataLoad:set-difficulty', 12);\n    this.setImageCount(12)\n  }\n\n};\n\nDataLoad.prototype.setImageCount = function (setImageCount) {\n\n    const requiredImages = images.splice(0, setImageCount)\n\n    copys = []\n    for (const image of requiredImages) {\n      const copyImage = {}\n      copyImage.id = image.id + setImageCount;\n      copyImage.value = image.value;\n      copyImage.url = image.url\n      copys.push(copyImage)\n    }\n\n    this.images = requiredImages;\n    this.images.push(copys)\n    this.images = this.images.flat();\n    this.images = shuffle_function(this.images);\n};\n\n\nmodule.exports = DataLoad;\n\n\n//# sourceURL=webpack:///./client/src/model/data_load.js?");

/***/ }),

/***/ "./client/src/model/game_logic.js":
/*!****************************************!*\
  !*** ./client/src/model/game_logic.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst GameLogic = function() {\n  this.tally = 0;\n  this.cards = [];\n  this.level = 0;\n}\n\nGameLogic.prototype.bindEvents = function () {\n  PubSub.subscribe('SquareView:card-clicked', (event) => {\n    const card = event.detail;\n    this.verifyMatch(card);\n  })\n\n  PubSub.subscribe('MasterView:set-level', (event) => {\n    this.level = event.detail;\n  })\n\n  PubSub.subscribe('DataLoad:set-difficulty', (event) => {\n    this.level = event.detail;\n})\n};\n\nGameLogic.prototype.verifyMatch = function (card) {\n  if (this.cards.length == 1) {\n    if (this.cards[0].value == card.value) {\n      console.log('match')\n      this.tally += 1;\n      this.cards = [];\n      if (this.level == this.tally) {\n        console.log('You won')\n        const finish = Date.now();\n        PubSub.publish('GameLogic:game-complete', finish)\n      }\n    } else {\n      this.cards.push(card)\n      PubSub.publish('GameLogic:clear-cards', this.cards)\n      this.cards = [];\n    }\n  } else {\n    console.log('first card. adding to array')\n    this.cards.push(card)\n  }\n}\n\nmodule.exports = GameLogic;\n\n\n//# sourceURL=webpack:///./client/src/model/game_logic.js?");

/***/ }),

/***/ "./client/src/model/images.js":
/*!************************************!*\
  !*** ./client/src/model/images.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const images = [\n  {id: 1, value: 1, url:\"images/1.jpeg\"},\n  {id: 2, value: 2, url:\"images/2.jpeg\"},\n  {id: 3, value: 3, url:\"images/3.jpg\"},\n  {id: 4, value: 4, url:\"images/4.png\"},\n  {id: 5, value: 5, url:\"images/5.jpg\"},\n  {id: 6, value: 6, url:\"images/6.jpeg\"},\n  {id: 7, value: 7, url:\"images/7.png\"},\n  {id: 8, value: 8, url:\"images/8.jpeg\"},\n  {id: 9, value: 9, url:\"images/9.png\"},\n  {id: 10, value: 10, url:\"images/10.png\"},\n  {id: 11, value: 11, url:\"images/11.png\"},\n  {id: 12, value: 12, url:\"images/12.jpeg\"}\n]\n\nmodule.exports = images;\n\n\n//# sourceURL=webpack:///./client/src/model/images.js?");

/***/ }),

/***/ "./client/src/model/player.js":
/*!************************************!*\
  !*** ./client/src/model/player.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst Player = function (playerData) {\n  this.name = playerData.name;\n  this.difficulty = playerData.difficulty;\n  this.clickCount = 0;\n  this.startTime = 0;\n  this.endTime = 0;\n}\n\n\nPlayer.prototype.generateGame = function () {\n  const playerView = document.querySelector('#player_info');\n  document.body.removeChild(playerView);\n  PubSub.publish('Player:player-ready', this.difficulty)\n  this.startTime = Date.now();\n  this.bindEvents();\n};\n\nPlayer.prototype.bindEvents = function () {\n  PubSub.subscribe('GameLogic:game-complete', (event) => {\n    const finishTime = event.detail;\n    this.endTime = finishTime;\n    let completionTime = this.endTime - this.startTime;\n    completionTime = completionTime / 1000;\n    console.log(`You completed the game in ${completionTime} seconds`)\n  })\n\n  PubSub.subscribe('SquareView:increment-clicks', (event) => {\n    this.clickCount += 1;\n    console.log('click count:', this.clickCount)\n  })\n\n  PubSub.subscribe('GameLogic:game-complete', (event) => {\n    console.log('final click count:', this.clickCount)\n\n  })\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./client/src/model/player.js?");

/***/ }),

/***/ "./client/src/model/shuffle_function.js":
/*!**********************************************!*\
  !*** ./client/src/model/shuffle_function.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const shuffleFunction = function(array) {\n  const length = array.length\n  for (let i = length -1; i> 0; i--){\n    const temp = array[i];\n    const random =  Math.floor(Math.random()*i)\n    const randomLetter = array[random];\n    array[i] = randomLetter;\n    array[random] = temp;\n  }\n  return array\n}\n\n\n\nmodule.exports = shuffleFunction;\n\n\n//# sourceURL=webpack:///./client/src/model/shuffle_function.js?");

/***/ }),

/***/ "./client/src/views/leaderboard_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/leaderboard_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const LeaderboardView = function(leaderboardDiv, leaderboardData) {\n  this.leaderboard = leaderboardDiv;\n  this.leaderboardData = leaderboardData\n}\n\nLeaderboardView.prototype.render = function () {\n  const h1Div = document.createElement(\"div\")\n  const h1 = this.createElement(\"h1\", \"Leaderboard\");\n  h1Div.classList.add(\"leaderboardTitle\")\n  h1Div.appendChild(h1)\n  this.leaderboard.appendChild(h1Div);\n\n  const name = document.createElement(\"div\");\n  const nameTitle = this.createElement(\"h3\", \"Player\")\n  name.appendChild(nameTitle)\n  this.leaderboard.appendChild(name)\n};\n\nLeaderboardView.prototype.createElement = function (element, text) {\n  const newElement = document.createElement(element)\n  newElement.textContent = text;\n  return newElement;\n\n};\n\nmodule.exports = LeaderboardView;\n\n\n//# sourceURL=webpack:///./client/src/views/leaderboard_view.js?");

/***/ }),

/***/ "./client/src/views/master_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/master_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst SquareView = __webpack_require__(/*! ./square_view.js */ \"./client/src/views/square_view.js\")\nconst LeaderboardView = __webpack_require__(/*! ./leaderboard_view.js */ \"./client/src/views/leaderboard_view.js\")\n\nconst MasterView = function(element) {\n  this.element = element;\n}\n\nMasterView.prototype.bindEvents = function () {\n  PubSub.subscribe('DataLoad:images-ready', (event) => {\n    const allData = event.detail;\n    this.renderImages(allData.images)\n    this.renderLeaderboard(allData.leaderboard)\n  })\n\n  PubSub.subscribe('GameLogic:clear-cards', (event) => {\n    const cards = event.detail;\n    this.clearSquares(cards)\n  })\n\n  PubSub.subscribe('DataLoad:set-difficulty', (event) => {\n    const level = event.detail ;\n    if (level == 10) {\n      this.element.classList.add(\"fivexfive\")\n    } else if (level == 12) {\n      this.element.classList.add(\"sixxsix\")\n    }\n  });\n};\n\n\nMasterView.prototype.clearSquares = function (cards) {\n  for (const card of cards) {\n    const cardsToHide = document.getElementsByClassName(card.value)\n    for (const locatedCard of cardsToHide) {\n      setTimeout(() => {\n        locatedCard.classList.remove(\"show\");\n      }, 1000)\n    }\n  }\n};\n\nMasterView.prototype.renderImages = function (imageData) {\n  imageData.forEach((image) => {\n    const squareView = new SquareView(this.element, image);\n    squareView.render();\n  })\n};\n\nMasterView.prototype.renderLeaderboard =  function(leaderboardData) {\n  const leaderDiv = document.querySelector('#leaderboard')\n  const leaderboard = new LeaderboardView(leaderDiv, leaderboardData);\n  leaderboard.render();\n\n};\n\n\nmodule.exports = MasterView;\n\n\n//# sourceURL=webpack:///./client/src/views/master_view.js?");

/***/ }),

/***/ "./client/src/views/player_info_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/player_info_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst Player = __webpack_require__(/*! ../model/player.js */ \"./client/src/model/player.js\")\n\nconst PlayerInfoView = function(element) {\n  this.element = element;\n}\n\nPlayerInfoView.prototype.bindEvents = function () {\n  const form = document.querySelector(\"form\")\n  form.addEventListener('submit', this.getPlayerData)\n}\n\nPlayerInfoView.prototype.getPlayerData = function (event) {\n  event.preventDefault();\n  const playerData = {\n    name: event.target.player.value,\n    difficulty: event.target.difficulty.value\n  };\n  const player = new Player(playerData)\n  player.generateGame();\n}\n\n\nmodule.exports = PlayerInfoView;\n\n\n//# sourceURL=webpack:///./client/src/views/player_info_view.js?");

/***/ }),

/***/ "./client/src/views/square_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/square_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst SquareView = function(container, data) {\n  this.container = container;\n  this.url = data.url;\n  this.id = data.id;\n  this.value = data.value;\n}\n\nSquareView.prototype.render = function () {\n  const squareDiv = this.createDiv();\n  const newImg = this.createImage();\n  squareDiv.appendChild(newImg);\n  this.addClickEvent(squareDiv)\n  this.container.appendChild(squareDiv);\n\n  this.displayCard(squareDiv)\n\n  setTimeout(() => {\n    this.hideCard(squareDiv)\n  }, 3000)\n};\n\nSquareView.prototype.createDiv = function () {\n  const newDiv = document.createElement(\"div\");\n  newDiv.classList.add(\"square\");\n  return newDiv\n};\n\nSquareView.prototype.createImage = function () {\n  const img = document.createElement(\"img\");\n  img.src = this.url;\n  img.classList.add(\"hidden\")\n  img.classList.add(this.value)\n  return img\n};\n\nSquareView.prototype.addClickEvent = function (squareDiv) {\n  squareDiv.addEventListener('click', (event) => {\n    const card = event.target\n    this.displayCard(card)\n\n    const data = {value: this.value, id: this.id}\n\n    PubSub.publish('SquareView:increment-clicks', 1);\n    PubSub.publish('SquareView:card-clicked', data)\n\n\n  })\n};\n\nSquareView.prototype.displayCard = function (card) {\n  card.children[0].classList.add(\"show\");\n};\n\nSquareView.prototype.hideCard = function (card) {\n  card.children[0].classList.remove(\"show\")\n};\n\nmodule.exports = SquareView;\n\n\n//# sourceURL=webpack:///./client/src/views/square_view.js?");

/***/ })

/******/ });