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

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = __webpack_require__(2);

	var _index3 = __webpack_require__(3);

	var _main = __webpack_require__(4);

	var _homeController = __webpack_require__(5);

	var _catalogController = __webpack_require__(6);

	var _recordsController = __webpack_require__(7);

	var _newsController = __webpack_require__(8);

	var _cartController = __webpack_require__(9);

	var _contactsController = __webpack_require__(10);

	var _buyController = __webpack_require__(11);

	var _githubContributor = __webpack_require__(12);

	var _webDevTec = __webpack_require__(13);

	var _home = __webpack_require__(14);

	var _cart = __webpack_require__(15);

	var _cuttext = __webpack_require__(16);

	var _cardsToLoad = __webpack_require__(17);

	var _navbar = __webpack_require__(18);

	var _card = __webpack_require__(19);

	var _lcard = __webpack_require__(20);

	var _vcard = __webpack_require__(21);

	var _musicPlayer = __webpack_require__(22);

	var _efooter = __webpack_require__(23);

	var _malarkey = __webpack_require__(24);

	// import { NewsService } from '../app/components/services/news.service';
	/* global malarkey:false, moment:false */

	angular.module('webEee', ['ngAnimate', 'ngDropdowns', 'angularSoundManager', 'dibari.angular-ellipsis', 'ui.bootstrap.modal', 'angularSimpleSlider', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).service('homeService', _home.HomeService).service('cartService', _cart.CartService)
	// .service('newsService', NewsService)
	.filter('CutText', _cuttext.CutText).filter('cardsToLoadFilter', _cardsToLoad.cardsToLoadFilter).controller('MainController', _main.MainController).controller('HomeController', _homeController.HomeController).controller('CtgController', _catalogController.CtgController).controller('RecordsController', _recordsController.RecordsController).controller('NewsController', _newsController.NewsController).controller('CartController', _cartController.CartController).controller('ContactsController', _contactsController.ContactsController).controller('BuyController', _buyController.BuyController).directive('navbar', _navbar.NavbarDirective).directive('card', _card.CardDirective).directive('lcard', _lcard.LCardDirective).directive('vcard', _vcard.VCardDirective).directive('mp', _musicPlayer.MPlayerDirective).directive('efooter', _efooter.EfooterDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log

	  $logProvider.debugEnabled(true);

	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 1000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$routeProvider", "$locationProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($routeProvider, $locationProvider) {
	  'ngInject';

	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: true
	  });

	  $routeProvider.when('/', {
	    templateUrl: 'app/views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  }).when('/catalog', {
	    templateUrl: 'app/views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  }).when('/records', {
	    templateUrl: 'app/views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  }).when('/news', {
	    templateUrl: 'app/views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  }).when('/contacts', {
	    templateUrl: 'app/views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  }).when('/about', {
	    templateUrl: 'app/views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  }).when('/buy/:id/:token', {
	    templateUrl: 'app/views/buy/buy.html',
	    controller: 'BuyController',
	    controllerAs: 'buyvm'
	  }).otherwise({
	    redirectTo: '/'
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';

	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainController = exports.MainController = function () {
	  MainController.$inject = ["$timeout", "webDevTec", "toastr"];
	  function MainController($timeout, webDevTec, toastr) {
	    'ngInject';

	    _classCallCheck(this, MainController);

	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1492039809800;
	    this.toastr = toastr;

	    this.activate($timeout, webDevTec);
	  }

	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;

	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();

	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	      this.classAnimation = '';
	    }
	  }]);

	  return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 12/04/2017.
	 */
	var HomeController = exports.HomeController = function () {
	  HomeController.$inject = ["$scope", "homeService", "cartService", "$location"];
	  function HomeController($scope, homeService, cartService, $location) {
	    'ngInject';

	    _classCallCheck(this, HomeController);

	    this.scope = $scope;
	    this.location = $location;
	    this.homeSvc = homeService;
	    this.cartSvc = cartService;

	    this.slides = [/*
	                   {image: './assets/images/bg2.jpg', autor: '@JC', frase: 'Si nos quedáramos cuarenta y ocho horas seguidas sin música, habría una catástrofe mundial'},
	                   {image: './assets/images/bg3.jpg', autor: '@JC', frase: 'Si de secretos profesionales se hablase, el mío ha sido hallar un verdadero equilibrio entre el máximo rigor y la pura alegría de la música como juego.'},
	                   {image: './assets/images/bg4.jpg', autor: '@JC', frase: 'En nuestro siglo, donde la relatividad de las cosas nos permite revivir siglos en minutos, y donde se aprecia la pequeñez del tiempo real de vida, bien merece la pena el disfrute de la cultura (historia) creada por el hombre.'},
	                   {image: './assets/images/bg1.jpg', autor: '@Kike Barona', frase: 'Los fenómenos teóricos se quedan cortos tratando de explicar hechos totales que parten de una visión unívoca del mundo. Yo compongo a partir de la relación entre el todo y las partes, entre el pequeño elemento sonoro y la obra completa. Esa relación es y depende de la teoría de contrarios. Es una expresión dialéctica.'}
	                   */];
	    this.slidesUp = this.homeSvc.getSlidesState();

	    this.menuSelectedUrl = this.homeSvc.getCurrentNav();

	    this.menuTitle = '';
	    this.menus = [];
	    this.cards = [];
	    this.actual_menu = 0;
	    this.cards_in_category = 0;

	    this.cartCount = 0;

	    this.url_facebook = 'https://www.facebook.com/edicionesespiraleterna';
	    this.url_instagram = 'https://www.instagram.com/edicionesespiraleterna';
	    this.url_twitter = 'https://www.twitter.com/edicionesespiraleterna';

	    this.error_global_msg = "We really sorry! We couldn't connect with our servers.";
	    this.error_global_btn = "Please try again";
	    this.error_trigger = false;
	    this.init();
	  }

	  _createClass(HomeController, [{
	    key: 'init',
	    value: function init() {
	      angular.element("html, body").scrollTop(0, 0);
	      angular.element('.grid').masonry({
	        columnWidth: '.grid-sizer',
	        itemSelector: '.grid-item',
	        percentPosition: true
	      });
	      angular.element('.grid').masonry('reloadItems');
	      this.updateCartInfo();
	      this.setSlides();
	      this.setMenu();
	      this.setCards();
	    }
	  }, {
	    key: 'setSlides',
	    value: function setSlides() {
	      var _this = this;

	      this.homeSvc.getSlides().then(function (response) {
	        if (response.success) {
	          _this.slides = response.data;
	        } else {
	          _this.error_trigger = true;
	        }
	      });
	    }
	  }, {
	    key: 'setMenu',
	    value: function setMenu() {
	      var _this2 = this;

	      this.homeSvc.getMenu().then(function (response) {
	        if (response.success) {
	          _this2.menus = response.data;
	          _this2.menus[0].active = true;
	          _this2.cards_in_category = _this2.menus[0].id;
	          _this2.menuTitle = _this2.menus[0].catalog;
	        }
	      });
	    }
	  }, {
	    key: 'setCards',
	    value: function setCards() {
	      var _this3 = this;

	      this.homeSvc.getCards().then(function (response) {
	        if (response.success) {
	          _this3.cards = response.data;
	        }
	      });
	    }
	  }, {
	    key: 'getTitle',
	    value: function getTitle() {
	      return this.menuTitle;
	    }
	  }, {
	    key: 'getMenu',
	    value: function getMenu() {
	      return this.menus;
	    }
	  }, {
	    key: 'getCards',
	    value: function getCards() {
	      return this.cards;
	    }
	  }, {
	    key: 'updateCartInfo',
	    value: function updateCartInfo() {
	      this.cartCount = this.cartSvc.cartData.length;
	    }

	    /*
	      updateCard (card){
	        this.cardCount = 0;
	        var _cardList = card.$scope.$parent.$parent.cc.cards;
	        for (var i = 0; i < _cardList.length; i++) {
	          var _card = _cardList[i];
	          if(card.id == _card.id){
	            _card.inCart = card.inCart;
	          }
	    
	          this.cardCount += _card.inCart;
	    
	        }
	      }
	    */

	  }, {
	    key: 'slideUp',
	    value: function slideUp() {
	      if (!this.slidesUp) {
	        // angular.element('#start').toggleClass('animateUp');
	        // angular.element('nav.navbar').toggleClass('animate');
	        // angular.element('#menu-navbar-collapse').css('background-color', 'white');

	        angular.element('body').css('overflow-y', 'auto');
	        this.homeSvc.slidesUp = true;
	        this.slidesUp = this.homeSvc.getSlidesState();
	      }
	    }
	  }, {
	    key: 'slideDown',
	    value: function slideDown() {
	      if (this.slidesUp) {
	        angular.element("html, body").scrollTop(0, 0);
	        this.location.path('/home');

	        angular.element('body').css('overflow-y', 'hidden');
	        this.homeSvc.slidesUp = false;
	        this.slidesUp = this.homeSvc.getSlidesState();
	      }
	    }
	  }]);

	  return HomeController;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 12/04/2017.
	 */
	var CtgController = exports.CtgController = function () {
	  CtgController.$inject = ["$scope", "homeService"];
	  function CtgController($scope, homeService) {
	    'ngInject';

	    _classCallCheck(this, CtgController);

	    this.scope = $scope;
	    this.homeSvc = homeService;
	    this.menu_items = [];
	    this.number_of_cards = 0;
	    this.label_numCards = this.number_of_cards + ' cards in this collection';

	    //TODO ver bien esto con Bande
	    this.ddSelectOptions = [{ opt: 'Recently added', value: 'id' }, { opt: 'Title', value: 'title' }, { opt: 'Price', value: 'price' }, { opt: 'Popularity', value: 'popularity' }];

	    this.ddSelectSelected = {};

	    this.init();
	  }

	  _createClass(CtgController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'loadCards',
	    value: function loadCards(menu) {
	      this.menu_items = this.scope.$parent.$parent.vm.menus;
	      for (var i = 0; i < this.menu_items.length; i++) {
	        this.menu_items[i].active = false;
	        if (this.menu_items[i].id == menu.id) {
	          // ponerle la clase active al click
	          this.menu_items[i].active = true;

	          // actualiza el filtro
	          this.scope.$parent.$parent.vm.cards_in_category = menu.id;
	        }
	      }
	    }
	  }]);

	  return CtgController;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 20/05/2017.
	 */

	var RecordsController = exports.RecordsController = function () {
	  RecordsController.$inject = ["$scope", "homeService"];
	  function RecordsController($scope, homeService) {
	    'ngInject';

	    _classCallCheck(this, RecordsController);

	    this.scope = $scope;
	    this.homeSvc = homeService;
	    this.menu_items = [];

	    this.init();
	  }

	  _createClass(RecordsController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'loadCards',
	    value: function loadCards(menu) {
	      this.menu_items = this.scope.$parent.$parent.vm.menus;
	      for (var i = 0; i < this.menu_items.length; i++) {
	        this.menu_items[i].active = false;
	        if (this.menu_items[i].id == menu.id) {
	          // ponerle la clase active al click
	          this.menu_items[i].active = true;

	          // actualiza el filtro
	          this.scope.$parent.$parent.vm.cards_in_category = menu.id;
	        }
	      }
	    }
	  }]);

	  return RecordsController;
	}();

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsController = exports.NewsController = function () {
	  NewsController.$inject = ["homeService"];
	  function NewsController(homeService) {
	    'ngInject';

	    _classCallCheck(this, NewsController);

	    this.homeService = homeService;
	    this.vcards = [];
	    this.init();
	  }

	  _createClass(NewsController, [{
	    key: 'init',
	    value: function init() {
	      this.getNewsCards();
	    }
	  }, {
	    key: 'getNewsCards',
	    value: function getNewsCards() {
	      var _this = this;

	      this.homeService.getNewsCards().then(function (response) {
	        if (response.success) {
	          _this.vcards = response.data;
	        }
	      });
	    }
	  }]);

	  return NewsController;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 19/05/2017.
	 */

	var CartController = exports.CartController = function () {
	  CartController.$inject = ["$scope", "homeService", "cartService", "$http"];
	  function CartController($scope, homeService, cartService, $http) {
	    'ngInject';

	    _classCallCheck(this, CartController);

	    this.scope = $scope;
	    this.http = $http;
	    this.homeSvc = homeService;
	    this.cartSvc = cartService;

	    this.cartData = this.cartSvc.getItems();
	    this.checkout = false;
	    this.checkout_msg = 'To continue, we most to check your email:';

	    this.back_btn = 'Back';
	    this.checkout_btn = 'Checkout';
	    this.mail_placeholder = 'Your mail here';

	    this.init();
	  }

	  _createClass(CartController, [{
	    key: 'init',
	    value: function init() {}
	    //cantidad de PDFs pedidos

	  }, {
	    key: 'getItemCount',
	    value: function getItemCount() {
	      // var total = 0;
	      // console.log('cartData length:', this.cartData.length);
	      return this.cartData.length;
	    }

	    //costo total

	  }, {
	    key: 'getTotal',
	    value: function getTotal() {
	      var total = 0;
	      for (var i = 0; i < this.cartData.length; i++) {
	        total += parseFloat(this.cartData[i].price);
	      }
	      // console.log('total en GetTotal: ', total);
	      return total;
	    }
	  }, {
	    key: 'cardsToShow',
	    value: function cardsToShow() {
	      var _cards = [];
	      var __where = this.scope.$parent.$parent.vm.cards;
	      for (var i = 0; i < this.cartData.length; i++) {
	        for (var m = 0; m < __where.length; m++) {
	          if (this.cartData[i].id == __where[m].id) {
	            _cards.push(__where[m]);
	          }
	        }
	      }
	      return _cards;
	    }
	  }, {
	    key: 'checkoutClick',
	    value: function checkoutClick() {
	      if (this.checkout) {
	        // envío de la info
	        this.http.post(this.homeSvc.api_url_checkout, {
	          user_id: {
	            email: this.mailCheckout
	          },
	          items_ids: {
	            items: this.cartData
	          }
	        }, {
	          withCredentials: true
	        }).then(function (data) {
	          // console.log('éxito: ', data);
	        }, function (error) {
	          // console.log('error:', error);
	        }).finally(function () {
	          // console.log('completooooooo');
	        });
	      } else {
	        this.checkout = true;
	        this.checkout_btn = 'Place order';
	      }
	    }
	  }]);

	  return CartController;
	}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 12/04/2017.
	 */
	var ContactsController = exports.ContactsController = function () {
	  ContactsController.$inject = ["$scope", "$http", "homeService"];
	  function ContactsController($scope, $http, homeService) {
	    'ngInject';

	    _classCallCheck(this, ContactsController);

	    this.scope = $scope;
	    this.http = $http;
	    this.homeSvc = homeService;
	    this.labelContacts = 'Send us your consult';
	    this.labelSuscribe = 'Our news in your inbox';
	    this.placeholder = {
	      name: 'Name and lastname',
	      mail: 'Mail',
	      topic: 'Topic',
	      msg: 'Your message here',
	      suscribe: 'Your mail'
	    };
	    this.suscribeWelcome = 'Nuestra Editorial mantiene una actividad, casi diaria, sobre la obra del Maestro Leo Brouwer. Si deseas quedar al tanto de próximos lanzamientos, conciertos o actividades relacionadas con su música, solo suscríbete y nos encargamos del resto.';
	    this.suscribeBtn = 'Suscribe';
	    this.sendBtn = 'Send';
	    this.autoFill = '';
	    this.errorMsg = [{ errorMsg: 'You must fill this field' }, { errorMsg: 'Please check this. It is not a valid email address' }];
	    this.termsInfo = 'I agree with the terms and conditions.';

	    this.init();
	  }

	  _createClass(ContactsController, [{
	    key: 'init',
	    value: function init() {
	      this.scope.$on('infoRequest', function (evt, data) {
	        angular.log('recibido en contacto');
	        this.autoFill = data.title + ', ' + data.format;
	      });
	    }
	  }, {
	    key: 'submitUserMsg',
	    value: function submitUserMsg() {
	      // comprobación de inputs
	      angular.element('.ctc-inputs input').each(function () {
	        if (angular.element('.ctc-inputs input').val() === '') {
	          angular.element('.input-error').css('display', 'block');
	        } else {
	          angular.element('.input-error').css('display', 'none');
	        }
	      });

	      this.suscribeBtn = 'Sending...';

	      // envío de la info
	      this.http.post(this.homeSvc.api_url_ticket, {
	        ticket: {
	          name: this.name,
	          email: this.mail,
	          topic: this.topic,
	          text: this.msg
	        }
	      }, {
	        withCredentials: true
	      }).then(function (data) {
	        // console.log('éxito: ', data);
	      }, function (error) {
	        // console.log('error:', error);
	      }).finally(function () {
	        // console.log('completooooooo');
	      });
	    }
	  }]);

	  return ContactsController;
	}();

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 20/05/2017.
	 */

	var BuyController = exports.BuyController = function () {
	  BuyController.$inject = ["$http", "$routeParams", "homeService"];
	  function BuyController($http, $routeParams, homeService) {
	    'ngInject';

	    _classCallCheck(this, BuyController);

	    this.routeParams = $routeParams;
	    this.http = $http;
	    this.homeSrvc = homeService;
	    this.id = this.routeParams['id'];
	    this.token = this.routeParams['token'];
	    this.loading_msg = 'Cheking your request...';

	    this.init();
	  }

	  _createClass(BuyController, [{
	    key: 'init',
	    value: function init() {
	      // envío de la info
	      this.http.post(this.homeSrvc.api_url_cart, {
	        cid: this.id,
	        token: this.token
	      }, {
	        withCredentials: true
	      }).then(function (data) {
	        // console.log('éxito: ', data);
	      }, function (error) {
	        // console.log('error:', error);
	      }).finally(function () {
	        // console.log('completooooooo');
	      });
	    }
	  }]);

	  return BuyController;
	}();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';

	    _classCallCheck(this, GithubContributorService);

	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }

	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;

	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);

	  return GithubContributorService;
	}();

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';

	    _classCallCheck(this, WebDevTecService);

	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Less',
	      'url': 'http://lesscss.org/',
	      'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
	      'logo': 'less.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }

	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);

	  return WebDevTecService;
	}();

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 23/04/2017.
	 */
	var HomeService = exports.HomeService = function () {
	  HomeService.$inject = ["$http"];
	  function HomeService($http) {
	    'ngInject';

	    _classCallCheck(this, HomeService);

	    this.http = $http;
	    this.api_url = 'http://192.168.0.101:3245/api/';

	    this.api_url_eee_menu = this.api_url + 'eee/collections/en';
	    this.api_url_gen_menu = this.api_url + 'gen/collections/en';
	    this.api_url_eee_cards = this.api_url + 'eee/works/en';
	    this.api_url_gen_cards = this.api_url + 'gen/works/en';

	    this.api_url_reee_menu = this.api_url + 'eee/records/titles';
	    this.api_url_rgen_menu = this.api_url + 'gen/records/titles';
	    this.api_url_reee_cards = this.api_url + 'eee/records/';
	    this.api_url_rgen_cards = this.api_url + 'gen/records/';

	    this.api_url_news = this.api_url + 'news/en';
	    this.api_url_checkout = this.api_url + 'cart/create';
	    this.api_url_ticket = this.api_url + 'ticket/create';
	    this.api_url_cart = this.api_url + 'cart/confirm';

	    this.api_url_slides = this.api_url + 'front-slides/en';
	    this.slidesUp = false;

	    this.actual_cards = this.api_url_eee_cards;
	    this.actual_menu = this.api_url_eee_menu;

	    this.current_nav_menu = 0;
	    this.current_nav_url = 'app/views/catalog/catalog.html';
	  }

	  _createClass(HomeService, [{
	    key: 'getMenu',
	    value: function getMenu() {
	      return this.http.get(this.actual_menu).then(function (response) {
	        var toReturn = {};
	        toReturn.status = response.status;
	        if (toReturn.status == 200) {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        } else {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        }
	        return toReturn;
	      }, function (response) {
	        var toReturn = {};
	        toReturn.success = false;
	        toReturn.status = response.status;
	        toReturn.error = response.error;
	        return toReturn;
	      });
	    }
	  }, {
	    key: 'getCards',
	    value: function getCards() {
	      return this.http.get(this.actual_cards).then(function (response) {
	        var toReturn = {};
	        toReturn.status = response.status;
	        if (toReturn.status == 200) {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        } else {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        }
	        return toReturn;
	      }, function (response) {
	        var toReturn = {};
	        toReturn.success = false;
	        toReturn.status = response.status;
	        toReturn.error = response.error;
	        return toReturn;
	      });
	    }
	  }, {
	    key: 'getNewsCards',
	    value: function getNewsCards() {
	      return this.http.get(this.api_url_news).then(function (response) {
	        var toReturn = {};
	        toReturn.status = response.status;
	        if (toReturn.status == 200) {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        } else {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        }
	        return toReturn;
	      }, function (response) {
	        var toReturn = {};
	        toReturn.success = false;
	        toReturn.status = response.status;
	        toReturn.error = response.error;
	        return toReturn;
	      });
	    }
	  }, {
	    key: 'getSlides',
	    value: function getSlides() {
	      return this.http.get(this.api_url_slides).then(function (response) {
	        var toReturn = {};
	        toReturn.status = response.status;
	        if (toReturn.status == 200) {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        } else {
	          toReturn.success = true;
	          toReturn.data = response.data;
	        }
	        return toReturn;
	      }, function (response) {
	        var toReturn = {};
	        toReturn.success = false;
	        toReturn.status = response.status;
	        toReturn.error = response.error;
	        return toReturn;
	      });
	    }
	  }, {
	    key: 'getSlidesState',
	    value: function getSlidesState() {
	      return this.slidesUp;
	    }
	  }, {
	    key: 'getCurrentMenu',
	    value: function getCurrentMenu() {
	      return this.current_nav_menu;
	    }
	  }, {
	    key: 'getCurrentNav',
	    value: function getCurrentNav() {
	      return this.current_nav_url;
	    }
	  }, {
	    key: 'setCurrentNav',
	    value: function setCurrentNav(_new_url) {
	      this.current_nav_url = _new_url;
	    }
	  }]);

	  return HomeService;
	}();

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by LEO'S on 19/05/2017.
	 */
	var CartService = exports.CartService = function () {
	  CartService.$inject = ["$location", "homeService"];
	  function CartService($location, homeService) {
	    'ngInject';

	    _classCallCheck(this, CartService);

	    this.cartData = [];
	    this.location = $location;
	    this.homeSvc = homeService;
	  }

	  _createClass(CartService, [{
	    key: 'addPdf',
	    value: function addPdf(__item) {
	      var addedToExistingItem = false;
	      for (var i = 0; i < this.cartData.length; i++) {
	        if (this.cartData[i].id == __item.id) {
	          // this.cartData[i].count++;
	          addedToExistingItem = true;
	          break;
	        }
	      }
	      if (!addedToExistingItem) {
	        this.cartData.push({ id: __item.id, price: __item.price });
	      }
	    }
	  }, {
	    key: 'removePdf',
	    value: function removePdf(__id) {
	      for (var i = 0; i < this.cartData.length; i++) {
	        if (this.cartData[i].id == __id) {
	          this.cartData.splice(i, 1);
	          break;
	        }
	      }
	      //retorna hacia la vista anterior cuando está vacío
	      var __where_url = this.homeSvc.getCurrentNav();
	      console.log(__where_url);
	      if (this.cartData.length == 0) {
	        // this.scope.$parent.vm.menuSelectedUrl = 'app/views/catalog/catalog.html';
	        // this.homeSvc.setCurrentNav('app/views/catalog/catalog.html');
	        this.location.path('/home');
	      }
	    }
	  }, {
	    key: 'getItems',
	    value: function getItems() {
	      return this.cartData;
	    }
	  }]);

	  return CartService;
	}();

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CutText = CutText;
	/**
	 * Created by LEO'S on 24/04/2017.
	 */
	function CutText() {
	  'ngInject';

	  return function (text, length) {
	    return text.length > length ? text.substring(0, length) + '...' : text;
	  };
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cardsToLoadFilter = cardsToLoadFilter;
	/**
	 * Created by LEO'S on 25/04/2017.
	 */
	function cardsToLoadFilter() {
	  'ngInject';

	  return function (input, include) {
	    var result = [];
	    for (var i = 0; i < input.length; i++) {
	      if (input[i].collection_id == include) {
	        result.push(input[i]);
	      }
	    }
	    return result;
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.NavbarDirective = NavbarDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function NavbarDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    link: fnLink,
	    scope: {
	      cardCount: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'nvm'
	  };

	  return directive;

	  function fnLink(scope, el, attr) {
	    scope.nvm.cardCount = attr.totalList;
	  }
	}

	var NavbarController = function () {
	  NavbarController.$inject = ["$scope", "$location", "homeService", "cartService"];
	  function NavbarController($scope, $location, homeService, cartService) {
	    'ngInject';

	    // "this.*" is available by directive option "bindToController: true"

	    _classCallCheck(this, NavbarController);

	    this.scope = $scope;
	    this.loc = $location;
	    this.homeSvc = homeService;
	    this.cartSvc = cartService;
	    this.widget_count = this.cartSvc.cartData.length;

	    this.navPosOk = this.homeSvc.getSlidesState();
	    this.isSearchActive = false;

	    this.menus = {
	      menu: [{
	        id: 0,
	        active: true,
	        sub: true,
	        title: 'Catalogue'
	      }, {
	        id: 1,
	        active: false,
	        sub: true,
	        title: 'Records'
	      }, {
	        id: 2,
	        active: false,
	        sub: false,
	        title: 'News',
	        fake_url: '/news',
	        url: 'app/views/news/news.html'
	      }, {
	        id: 3,
	        active: false,
	        sub: false,
	        title: 'Contact',
	        fake_url: '/contacts',
	        url: 'app/views/contacts/contacts.html'
	      }, {
	        id: 4,
	        active: false,
	        sub: false,
	        title: 'About',
	        fake_url: '/about',
	        url: 'app/views/about/about.html'
	      }],
	      submenu: [{
	        parentId: 0,
	        id: 0,
	        active: true,
	        label: 'Catalogue',
	        title: 'Ediciones Espiral Eterna',
	        fake_url: '/catalog',
	        url: 'app/views/catalog/catalog.html'
	      }, {
	        parentId: 0,
	        id: 1,
	        active: false,
	        label: 'Catalogue',
	        title: 'General',
	        fake_url: '/catalog',
	        url: 'app/views/catalog/catalog.html'
	      }, {
	        parentId: 1,
	        id: 2,
	        active: false,
	        label: 'Records',
	        title: 'Ediciones Espiral Eterna',
	        fake_url: '/records',
	        url: 'app/views/records/records.html'
	      }, {
	        parentId: 1,
	        id: 3,
	        active: false,
	        label: 'Records',
	        title: 'General',
	        fake_url: '/records',
	        url: 'app/views/records/records.html'
	      }] };

	    this.init();
	  }

	  _createClass(NavbarController, [{
	    key: 'init',
	    value: function init() {
	      this.widget_count = this.cartSvc.cartData.length;
	      this.updateMenuActive();

	      /*if(window.innerWidth > "1366px"){
	        angular.element('#find input').focus(()=>{
	          angular.element( ".nav-menus" ).css('margin-right', "0em");
	          this.isSearchActive = true;
	        });
	         angular.element('#find input').focusout(()=>{
	          angular.element( ".nav-menus" ).css('margin-right', "3em");
	          this.isSearchActive = false;
	        });
	         angular.element( "#find" ).hover(
	          () => {
	            angular.element( ".nav-menus" ).css('margin-right', "0em");
	          },
	          () => {
	            if(!this.isSearchActive){
	              angular.element( ".nav-menus" ).css('margin-right', "3em");
	            }
	          }
	        );
	      } else {
	        this.isSearchActive = true;
	      }*/
	    }
	  }, {
	    key: 'getSubMenu',
	    value: function getSubMenu(_parent_id) {
	      var result = [];
	      for (var i = 0; i < this.menus.submenu.length; i++) {
	        if (this.menus.submenu[i].parentId == _parent_id) {
	          result.push(this.menus.submenu[i]);
	        }
	      }
	      return result;
	    }
	  }, {
	    key: 'updateMenuActive',
	    value: function updateMenuActive() {
	      // los desactiva todos
	      for (var i = 0; i < this.menus.menu.length; i++) {
	        this.menus.menu[i].active = false;
	      }
	      //activa al que se le dio click
	      this.menus.menu[this.homeSvc.getCurrentMenu()].active = true;
	    }
	  }, {
	    key: 'navMenuClick',
	    value: function navMenuClick(obj) {
	      // carga la página
	      this.homeSvc.current_nav_menu = obj.id;
	      this.homeSvc.current_nav_url = obj.url;
	      this.loc.path(obj.fake_url);

	      // cerrar submenu cuando se está en responsive
	      this.cerrarMenuResponsive();
	    }
	  }, {
	    key: 'subMenuClick',
	    value: function subMenuClick(_where) {
	      //------------ actualizar la info que se muestra
	      this.actualizarInfo(_where);

	      // desactiva el menú activo
	      for (var m = 0; m < this.menus.menu.length; m++) {
	        this.menus.menu[m].active = false;
	      }
	      // activa el menu padre del submenu  dddcryfd hfdhfh
	      this.menus.menu[_where.parentId].active = true;

	      // cerrar submenu cuando se está en responsive
	      this.cerrarMenuResponsive();
	    }
	  }, {
	    key: 'actualizarInfo',
	    value: function actualizarInfo(__menu) {
	      this.scope.$parent.vm.menuTitle = __menu.title;
	      // primero ve sobre quién se da click y le dice la variable a cargar en consecuencia
	      switch (__menu.id) {
	        case 0:
	          this.homeSvc.actual_menu = this.homeSvc.api_url_eee_menu;
	          this.homeSvc.actual_cards = this.homeSvc.api_url_eee_cards;
	          this.scope.$parent.vm.actual_menu = 0;
	          break;
	        case 1:
	          this.homeSvc.actual_menu = this.homeSvc.api_url_gen_menu;
	          this.homeSvc.actual_cards = this.homeSvc.api_url_gen_cards;
	          this.scope.$parent.vm.actual_menu = 1;
	          break;
	        case 2:
	          this.homeSvc.actual_menu = this.homeSvc.api_url_reee_menu;
	          this.homeSvc.actual_cards = this.homeSvc.api_url_reee_cards;
	          this.scope.$parent.vm.actual_menu = 0;
	          break;
	        case 3:
	          this.homeSvc.actual_menu = this.homeSvc.api_url_rgen_menu;
	          this.homeSvc.actual_cards = this.homeSvc.api_url_rgen_cards;
	          this.scope.$parent.vm.actual_menu = 1;
	          break;
	      }
	      // actualiza la página
	      this.homeSvc.current_nav_menu = __menu.parentId;
	      this.homeSvc.current_nav_url = __menu.url;
	      this.loc.path(__menu.fake_url);

	      this.scope.$parent.vm.setMenu();
	      this.scope.$parent.vm.setCards();
	    }
	  }, {
	    key: 'cartSummaryClick',
	    value: function cartSummaryClick() {
	      // TODO  Crear un modal diciendo que aún no se han agregado items al cart.
	      var __items = this.cartSvc.getItems();
	      if (__items.length > 0) {
	        this.scope.$parent.vm.menuSelectedUrl = 'app/views/cart/cartSummary.html';
	        // this.homeSvc.setCurrentNav('app/views/cart/cartSummary.html');
	      }
	      // cerrar submenu cuando se está en responsive
	      this.cerrarMenuResponsive();
	    }
	  }, {
	    key: 'findClick',
	    value: function findClick() {
	      //TODO capturar el enter key
	      this.isSearchActive = !this.isSearchActive;
	    }
	  }, {
	    key: 'cerrarMenuResponsive',
	    value: function cerrarMenuResponsive() {
	      if (window.innerWidth < 768) {
	        angular.element('.navbar-toggle').click();
	      }
	    }
	  }]);

	  return NavbarController;
	}();

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.CardDirective = CardDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function CardDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/card/card.html',
	    link: fnLink,
	    scope: {
	      inCart: '=',
	      updateCard: '&'
	    },
	    controller: CardController,
	    controllerAs: 'cvm'
	  };

	  return directive;

	  function fnLink(scope, el, attr) {
	    scope.cvm.img = attr.img;
	    scope.cvm.title = attr.title;
	    scope.cvm.format = attr.format;
	    scope.cvm.collection = attr.collection;
	    scope.cvm.crautor = attr.crautor;
	    scope.cvm.credit = attr.credit;
	    scope.cvm.de = attr.de;
	    scope.cvm.cm = attr.cm;
	    scope.cvm.rm = attr.rm;
	    scope.cvm.dg = attr.dg;
	    scope.cvm.pe = attr.pe;
	    scope.cvm.price = attr.price;
	    scope.cvm.id = attr.id;
	    scope.cvm.inCart = scope.inCart;
	  }
	}

	var CardController = function () {
	  CardController.$inject = ["$scope", "cartService"];
	  function CardController($scope, cartService) {
	    'ngInject';

	    _classCallCheck(this, CardController);

	    this.scope = $scope;
	    this.btnTitle = 'Add to cart';
	    this.inCart = false;
	    this.cartSvc = cartService;

	    this.langDe = 'Dirección Editorial';
	    this.langCm = 'Copia Musical';
	    this.langRm = 'Revisión Musical';
	    this.langDg = 'Diseño Gráfico';
	    this.langPe = 'Primera Edición';

	    this.init();
	  }

	  _createClass(CardController, [{
	    key: 'init',
	    value: function init() {
	      this.setState();
	    }
	  }, {
	    key: 'addToCart',
	    value: function addToCart() {
	      this.btnTitle = this.inCart ? 'Add to cart' : 'Remove';

	      if (!this.inCart) {
	        this.cartSvc.addPdf(this);
	      } else {
	        this.cartSvc.removePdf(this.id);
	      }

	      // actualiza el widget
	      this.scope.$parent.$parent.$parent.$parent.$parent.vm.updateCartInfo();

	      // agrega o elimina
	      this.inCart = !this.inCart;
	    }
	  }, {
	    key: 'setState',
	    value: function setState() {
	      if (this.cartSvc.cartData.length > 0) {
	        var items = this.cartSvc.getItems();
	        for (var i = 0; i < items.length; i++) {
	          if (items[i].id == this.scope.$parent.card.id) {
	            this.btnTitle = 'Remove';
	            this.inCart = !this.inCart;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal(modal_to_close) {
	      angular.element('#modal' + modal_to_close.cvm.id).modal('hide');
	    }
	  }]);

	  return CardController;
	}();

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.LCardDirective = LCardDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function LCardDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/lcard/lcard.html',
	    link: fnLink,
	    scope: {
	      cardInfo: '='
	    },
	    controller: LCardController,
	    controllerAs: 'lcvm'
	  };

	  return directive;

	  function fnLink(scope, el, attr) {
	    scope.lcvm.img = attr.img;
	    scope.lcvm.title = attr.title;
	    scope.lcvm.format = attr.format;
	    scope.lcvm.collection = attr.collection;
	    scope.lcvm.price = attr.price;
	    scope.lcvm.id = attr.id;
	    scope.lcvm.cardInfo = scope.cardInfo;
	  }
	}

	var LCardController = function () {
	  LCardController.$inject = ["$scope"];
	  function LCardController($scope) {
	    'ngInject';

	    _classCallCheck(this, LCardController);

	    this.$scope = $scope;
	    // this.cardInfo = [];
	    this.btnTitle = 'Request';
	    this.init();
	  }

	  _createClass(LCardController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'Request',
	    value: function Request(obj) {
	      angular.log('enviado desde el request');
	      angular.log(obj.cardInfo);
	      this.$scope.$emit('requestInfo', obj);
	    }
	  }]);

	  return LCardController;
	}();

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.VCardDirective = VCardDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function VCardDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/vcard/vcard.html',
	    link: fnLink,
	    controller: VCardController,
	    controllerAs: 'vcvm'
	  };

	  return directive;

	  function fnLink(scope, el, attr) {
	    scope.vcvm.img = attr.img;
	    scope.vcvm.title = attr.title;
	    scope.vcvm.date = attr.date;
	    scope.vcvm.desc = attr.description;
	    scope.vcvm.id = attr.id;
	  }
	}

	var VCardController = function () {
	  VCardController.$inject = ["$scope", "$location"];
	  function VCardController($scope, $location) {
	    'ngInject';

	    _classCallCheck(this, VCardController);

	    this.$scope = $scope;
	    this.seeMore = "Más información";
	    this.location = $location;
	    // this.btnTitle = 'Ver más';
	  }

	  _createClass(VCardController, [{
	    key: 'seeMoreClick',
	    value: function seeMoreClick() {
	      this.location.path('www.prueba.com');
	    }
	  }]);

	  return VCardController;
	}();

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MPlayerDirective = MPlayerDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function MPlayerDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/musicPlayer/musicPlayer.html',
	    controller: MusicPlayerCtrl,
	    controllerAs: 'mpvm'
	  };

	  return directive;
	}

	var MusicPlayerCtrl = function MusicPlayerCtrl($scope) {
	  'ngInject';

	  _classCallCheck(this, MusicPlayerCtrl);

	  this.scope = $scope;
	};
	MusicPlayerCtrl.$inject = ["$scope"];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.EfooterDirective = EfooterDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function EfooterDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/efooter/efooter.html',
	    controller: EfooterController,
	    controllerAs: 'fvm'
	  };

	  return directive;
	}

	var EfooterController = function () {
	  EfooterController.$inject = ["$scope"];
	  function EfooterController($scope) {
	    'ngInject';

	    _classCallCheck(this, EfooterController);

	    this.scope = $scope;
	    this.btnPrivacy = 'Privacy Police';
	    this.btnTerms = 'Terms of Use';
	    this.btnLang = [{ title: 'English', value: 'eng' }, { title: 'Español', value: 'spa' }];

	    // TODO Pedido al server de canciones
	    this.songs = [{
	      id: 'one',
	      title: 'La ciudad de las columnas',
	      artist: 'Leo Brouwer',
	      cover: 'assets/audios/demo.jpg',
	      url: 'assets/audios/demo.mp3'
	    }, {
	      id: 'two',
	      title: 'All you need is love',
	      artist: 'Leo Brouwer',
	      cover: 'assets/audios/All you need is love.jpg',
	      url: 'assets/audios/All you need is love.mp3'
	    }, {
	      id: 'three',
	      title: 'Hey Jude',
	      artist: 'Leo Brouwer',
	      cover: 'assets/audios/Hey Jude.jpg',
	      url: 'assets/audios/Hey Jude.mp3'
	    }];

	    this.songBtnLang = [{ title: 'Play' }, { title: 'Pause' }, { title: 'Stop' }];

	    this.init();
	  }

	  _createClass(EfooterController, [{
	    key: 'init',
	    value: function init() {
	      // comenzar la música automáticamente
	      /*angular.element("#playMusic").click();
	      angular.element("#playMusic").css('display', 'none');*/
	      // console.log(this.mpvm.isPlaying);
	    }
	  }]);

	  return EfooterController;
	}();

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.MalarkeyDirective = MalarkeyDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function MalarkeyDirective(malarkey) {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };

	  return directive;

	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });

	    el.addClass('acme-malarkey');

	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });

	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });

	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}

	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';

	    _classCallCheck(this, MalarkeyController);

	    this.$log = $log;
	    this.contributors = [];

	    this.activate(githubContributor);
	  }

	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;

	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;

	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;

	        return _this2.contributors;
	      });
	    }
	  }]);

	  return MalarkeyController;
	}();

/***/ }
/******/ ]);
angular.module("webEee").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class=\"jumbotron text-center\"><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt=\"I\'m Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p class=\"animated infinite\" ng-class=main.classAnimation><button type=button class=\"btn btn-lg btn-success\" ng-click=main.showToastr()>Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values=\"[\'Yeoman\', \'Gulp\', \'Angular\']\"></acme-malarkey></p></div><div class=row><div class=\"col-sm-6 col-md-4\" ng-repeat=\"awesomeThing in main.awesomeThings | orderBy:\'rank\'\"><div class=thumbnail><img class=pull-right ng-src=\"assets/images/{{ awesomeThing.logo }}\" alt=\"{{ awesomeThing.title }}\"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div></div>");
$templateCache.put("app/components/card/card.html","<div class=\"grid-item col-lg-6 col-md-6 col-sm-6 col-xs-12\"><!--card      --><div class=card><div style=\"width: 100%; height: 100%; position: absolute; top: 0; left: 0\" data-toggle=modal data-target=#modal{{cvm.id}}></div><div class=row><div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs\"><div style=\"width: 100%; height: 100%; position: absolute; top: 0; left: 0\" data-toggle=modal data-target=#modal{{cvm.id}}></div><div class=card-img><!--directiva de la imagen--> <img ng-src={{cvm.img}} alt=Partitura></div></div><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\"><div class=card-info><div style=\"width: 100%; height: 100%; position: absolute; top: 0; left: 0\" data-toggle=modal data-target=#modal{{cvm.id}}></div><div class=piece-title>{{cvm.title}}</div><div class=piece-format>{{cvm.format}}</div><div class=\"row piece-footer\"><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\"><p class=price>{{cvm.price | currency}}</p></div><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center\"><button type=button ng-click=cvm.addToCart() ng-class=\"{\'fill-btn\': !cvm.inCart, \'ghost-btn\': cvm.inCart}\">{{cvm.btnTitle}}</button></div></div></div></div></div></div><!--card--></div><div id=modal{{cvm.id}} class=modal tabindex=-1 role=dialog><div class=modal-dialog role=document><div class=modal-content><div class=detail-modal><button class=link-btn ng-click=cvm.closeModal(this)><i class=\"eee i-close\"></i></button><div class=\"row con10t\"><div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\"><div class=piece-title>{{cvm.title}}</div><div class=piece-format>{{cvm.format}}</div><div class=copyright><p class=crautor>© {{cvm.crautor}}</p><p class=credit>© {{cvm.credit}}</p></div><p class=collection><b>{{cvm.collection}}</b></p><p class=de>{{cvm.langDe}}<span>{{cvm.de}}</span></p><p>{{cvm.langCm}}<span class=cm>{{cvm.cm}}</span></p><p>{{cvm.langRm}}<span class=rm>{{cvm.rm}}</span></p><p>{{cvm.langDg}}<span class=dg>{{cvm.dg}}</span></p><p>{{cvm.langPe}}<span class=pe>{{cvm.pe}}</span></p><div class=\"row piece-footer\"><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\"><p class=price>{{cvm.price | currency}}</p></div><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\"><button class=fill-btn type=button ng-class=\"{\'fill-btn\': !cvm.inCart, \'ghost-btn\': cvm.inCart}\" ng-click=cvm.addToCart()>{{cvm.btnTitle}}</button></div></div></div><div class=\"col-lg-5 col-md-5 col-sm-5 hidden-xs\"><div class=modal-img><!--directiva de la imagen--> <img class=container-img ng-src={{cvm.img}} alt=Partitura></div></div></div></div></div></div><!-- /.modal-content --></div><!-- /.modal-dialog -->");
$templateCache.put("app/components/efooter/efooter.html","<footer id=efooter><div class=container><div class=row><div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"><mp></mp></div><div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\" id=legacy><div class=row><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-6 text-center\"><a href=\"\" class=link-btn>{{fvm.btnPrivacy}}</a></div><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-6 text-center\"><a href=\"\" class=link-btn>{{fvm.btnTerms}}</a></div></div></div><div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"><div class=row><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center\"><a class=ghost-btn ng-href=\"\" dropdown-menu=fvm.btnLang dropdown-model=ddLangSelected dropdown-item-label=title>{{ddLangSelected.title}}</a></div><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\"><div class=socials><!--<div class=\"col-lg-5 col-md-5 col-sm-5 hidden-xs\" id=\"followUs\">\n                Follow us\n              </div>--><!--<div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\" id=\"socialIcons\">--><div id=socialIcons><a href=\"\"><i class=\"icons eee i-Facebook\"></i></a> <a href=\"\"><i class=\"icons eee i-Twitter\"></i></a> <a href=\"\"><i class=\"icons eee i-Instagram\"></i></a></div></div></div></div></div></div></div></footer>");
$templateCache.put("app/components/lcard/lcard.html","<div class=\"grid-item col-lg-6 col-md-6 col-sm-12 col-xs-12\"><!--lcard--><div class=lcard><div class=row><div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\"><div class=piece-title>{{lcvm.title}}</div><div class=piece-format>{{lcvm.format}}</div></div><div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"><button class=ghost-btn type=button ng-click=lcvm.Request(this)>{{lcvm.btnTitle}}</button></div></div><!--lcard--></div></div>");
$templateCache.put("app/components/musicPlayer/musicPlayer.html","<sound-manager></sound-manager><button id=playMusic play-all=fvm.songs>Play all</button><div class=row><div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center\"><img style=\"width: 100%\" ng-src={{currentPlaying.cover}} alt=\"\"> <button class=\"link-btn snd-btns play-btn hidden-sm hidden-xs\" play-pause-toggle data-play={{fvm.songBtnLang[0].title}} data-pause={{fvm.songBtnLang[1].title}}>{{fvm.songBtnLang[0].title}}</button> <button class=\"ghost-btn snd-btns hidden-md hidden-lg\" play-pause-toggle data-play={{fvm.songBtnLang[0].title}} data-pause={{fvm.songBtnLang[1].title}}>{{fvm.songBtnLang[0].title}}</button> <button class=\"ghost-btn snd-btns hidden-md hidden-lg\" stop-music>{{fvm.songBtnLang[2].title}}</button></div><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\"><p id=song-title>{{ currentPlaying.title }}</p><p id=song-artist>{{ currentPlaying.artist }}</p><div class=row><div class=\"col-xs-2 song-pos\">{{ currentPostion }}</div><div class=col-xs-8><div class=seekBase seek-track><div class=seekLoad ng-style=\"{width : ( progress + \'%\' ) }\"></div></div></div><div class=\"col-xs-2 song-pos\">{{ currentDuration }}</div></div></div></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav ng-class=\"{\'animate\': $parent.vm.slidesUp}\" class=\"navbar navbar-fixed-top\"><div class=container-fluid><div class=navbar-header><button ng-if=$parent.vm.slidesUp type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#menu-navbar-collapse aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=\"eee i-overflow\"></span></button> <button class=\"navbar-brand logo text-center\" ng-click=$parent.vm.slideDown()><span><img src=assets/images/logo-white.png alt=LogoEEE></span></button></div><div class=\"collapse navbar-collapse\" id=menu-navbar-collapse><ul class=\"nav navbar-nav\"><li class=nav-menus ng-class=\"{\'searchActive\': nvm.isSearchActive}\" ng-repeat=\"navmenu in nvm.menus.menu\" ng-init=\"subm=nvm.getSubMenu(navmenu.id)\"><a href=\"\" ng-if=navmenu.sub ng-class=\"{\'activeMenu\': navmenu.active}\" dropdown-onchange=nvm.subMenuClick(selected) dropdown-menu=subm dropdown-model=ddMenuSelected dropdown-item-label=title>{{navmenu.title}} </a><a href=\"\" ng-if=!navmenu.sub ng-click=nvm.navMenuClick(navmenu) ng-class=\"{\'activeMenu\': navmenu.active}\">{{navmenu.title}}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=text-center><a class=nav-btns href=\"\" ng-click=nvm.cartSummaryClick()><span class=\"eee i-cart\"></span> <span class=badge>{{$parent.vm.cartCount}}</span></a></li><li class=text-center><!--cart summary y buscador--><div class=nav-btns><button ng-click=nvm.findClick() type=button><i class=\"eee i-search\"></i></button><div id=find><input ng-class=\"{\'animarFind\': nvm.isSearchActive}\" ng-show=nvm.isSearchActive ng-model=nvm.findTerm type=text placeholder=\"Search for...\"></div></div><!----></li></ul></div></div></nav>");
$templateCache.put("app/components/vcard/vcard.html","<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\"><!--vcard--><div id=vcard><div class=vcard-img><!--directiva de la imagen--> <img ng-src={{vcvm.img}} alt=Image></div><div class=\"vcard-info text-center\"><div class=piece-title>{{vcvm.title | CutText:50}}</div><div class=piece-date>{{vcvm.date}}</div><div class=piece-footer><p class=desc ng-bind=vcvm.desc ellipsis data-separator=\"\" ellipsis-append={{vcvm.seeMore}} ellipsis-append-click=vcvm.seeMoreClick()></p><!--<button class=\"ghost-btn\" type=\"button\">{{vcvm.seeMore}}</button>--></div><!--piece footer--></div></div><!--vcard--></div>");
$templateCache.put("app/views/buy/buy.html","<navbar><div class=container><div class=main-content><div>{{buyvm.loading_msg}}</div></div></div>");
$templateCache.put("app/views/cart/cartSummary.html","<div id=cartSummary ng-controller=\"CartController as cartCtrl\">total de elementos: {{cartCtrl.getItemCount()}} work(s) selected, {{cartCtrl.getTotal() | currency}}<div class=row><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><card ng-repeat=\"card in cartCtrl.cardsToShow()\" data-id=\"{{ card.id }}\" data-img=\"{{ card.img }}\" data-title=\"{{ card.title }}\" data-format=\"{{ card.format }}\" data-collection=\"{{ card.collection }}\" data-crautor=\"{{ card.crautor }}\" data-credit=\"{{ card.credit }}\" data-de=\"{{ card.de }}\" data-cm=\"{{ card.cm }}\" data-rm=\"{{ card.rm }}\" data-dg=\"{{ card.dg }}\" data-pe=\"{{ card.pe }}\" data-price=\"{{ card.price }}\"></div></div><form name=shippingForm novalidate><div ng-show=cartCtrl.checkout><p>{{cartCtrl.checkout_msg}}</p><div class=form-group><label>Mail</label><input ng-model=cartCtrl.mailCheckout type=email placeholder={{cartCtrl.mail_placeholder}} required></div></div></form><a href=/home>{{cartCtrl.back_btn}}</a> <button ng-click=cartCtrl.checkoutClick()>{{cartCtrl.checkout_btn}}</button></div>");
$templateCache.put("app/views/catalog/catalog.html","<div class=row ng-controller=\"CtgController as cc\"><!--menu de la izquierda--><div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\"><div class=left-menu><h3>{{vm.getTitle()}}</h3><ul><li class=lm-item ng-repeat=\"menu in vm.getMenu()\" ng-class=\"{\'active\': menu.active == true}\" ng-click=cc.loadCards(menu)><button>{{menu.title}}</button></li><li ng-if=!menuSelectedOne class=lm-item ng-repeat=\"menu in cc.menuLeftGen\" ng-class=\"{\'active\': menu.active == true}\" ng-click=cc.loadCardsGen(menu)><button>{{menu.title}}</button></li></ul></div></div><!--contenido --><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\"><!--ordenar y cantidad de obras--><div class=filtros><div class=row><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><p>Ordenar por</p><div dropdown-select=cc.ddSelectOptions dropdown-model=ddSelectSelected dropdown-item-label=opt></div></div><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right\"><p>{{cc.label_numCards}}</p></div></div><hr></div><!--real content--><div class=cards-content><div class=\"row grid\"><div class=grid-sizer></div><card ng-if=\"vm.actual_menu == 0\" ng-repeat=\"card in vm.getCards() | cardsToLoadFilter:vm.cards_in_category | orderBy:ddSelectSelected.value track by card.id\" data-id=\"{{ card.id }}\" data-img=\"{{ card.img }}\" data-title=\"{{ card.title }}\" data-format=\"{{ card.format }}\" data-collection=\"{{ card.collection }}\" data-crautor=\"{{ card.crautor }}\" data-credit=\"{{ card.credit }}\" data-de=\"{{ card.de }}\" data-cm=\"{{ card.cm }}\" data-rm=\"{{ card.rm }}\" data-dg=\"{{ card.dg }}\" data-pe=\"{{ card.pe }}\" data-price=\"{{ card.price }}\"></card><lcard ng-if=\"vm.actual_menu == 1\" ng-repeat=\"card in vm.getCards() | cardsToLoadFilter:vm.cards_in_category | orderBy:ddSelectSelected.value track by card.id\" data-id=\"{{ card.id }}\" data-title=\"{{ card.title }}\" data-format=\"{{ card.format }}\" data-collection=\"{{ card.collection }}\" data-price=\"{{ card.price }}\" card-info=card></lcard></div><!--modal--><!--<div ng-controller=\"ModalController as mc\"\n           update-card=\"vm.updateCard(card)\">\n        <div id=\"modalDetail\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"detail-modal\">\n                <button class=\"link-btn\" ng-click=\"mc.closeModal()\"><i class=\"eee i-close\"></i></button>\n                <div class=\"row con10t\">\n                  <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\">\n                    <div class=\"piece-title\">{{mc.title}}</div>\n                    <div class=\"piece-format\"></div>\n                    <div class=\"copyright\">\n                      <p class=\"crautor\"></p>\n                      <p class=\"credit\"></p>\n                    </div>\n                    <b><p class=\"collection\"></p></b>\n                    <span>{{mc.langDe}}<p class=\"de\"></p></span>\n                    <span>{{mc.langCm}}<p class=\"cm\">{{cvm.cm}}</p></span>\n                    <span>{{mc.langRm}}<p class=\"rm\">{{cvm.rm}}</p></span>\n                    <span>{{mc.langDg}}<p class=\"dg\">{{cvm.dg}}</p></span>\n                    <span>{{mc.langPe}}<p class=\"pe\">{{cvm.pe}}</p></span>\n                    <div class=\"row piece-footer\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                        <p class=\"price\"></p>\n                      </div>\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                        <button class=\"fill-btn\" type=\"button\" ng-click=\"mc.addToCart()\">{{cvm.btnTitle}}</button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-5 col-md-5 col-sm-5 hidden-xs\">\n                    <div class=\"modal-img\"> &lt;!&ndash;directiva de la imagen&ndash;&gt;\n                      <img class=\"container-img\" ng-src=\"{{mc.img}}\" alt=\"Partitura\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>&lt;!&ndash; /.modal-content &ndash;&gt;\n        </div>&lt;!&ndash; /.modal-dialog &ndash;&gt;\n      </div>&lt;!&ndash; /.modal &ndash;&gt;--><!--modal--></div><!-- contenido--></div></div>");
$templateCache.put("app/views/contacts/contacts.html","<div id=contactsView ng-controller=\"ContactsController as ctc\"><div class=row><div class=\"col-lg-5 col-md-5 col-sm-5 col-sm-offset-1 col-xs-12\" id=contactForm><h3>{{ctc.labelContacts}}</h3><form name=contactForm novalidate><div class=ctc-inputs><input name=name type=text ng-model=ctc.name placeholder={{ctc.placeholder.name}} required></div><p class=input-error ng-show=contactForm.name.$error.required>{{ctc.errorMsg[0].errorMsg}}</p><div class=ctc-inputs><input name=email type=email ng-model=ctc.mail placeholder={{ctc.placeholder.mail}} required></div><p class=input-error ng-show=contactForm.email.$error.required>{{ctc.errorMsg[1].errorMsg}}</p><div class=ctc-inputs><input type=text ng-model=ctc.topic placeholder={{ctc.placeholder.topic}}></div><!--<p class=\"input-error\">{{ctc.errorMsg[0].errorMsg}}</p>--><div class=ctc-inputs><input name=message type=text ng-model=ctc.msg placeholder={{ctc.placeholder.msg}} value={{ctc.autoFill}} required></div><p class=input-error ng-show=contactForm.message.$error.required>{{ctc.errorMsg[0].errorMsg}}</p><div class=row><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right\"><button ng-disabled=contactForm.$invalid type=button ng-click=ctc.submitUserMsg() class=ghost-btn>{{ctc.sendBtn}}</button></div></div></form></div><div class=\"col-lg-5 col-md-5 col-sm-5 col-sm-offset-1 col-xs-12\"><h3>{{ctc.labelSuscribe}}</h3><p>{{ctc.suscribeWelcome}}</p><form name=suscribeForm novalidate><div class=ctc-inputs><input name=suscribeinput type=email ng-model=ctc.suscribe placeholder={{ctc.placeholder.suscribe}} required></div><p ng-show=suscribeForm.suscribeinput.$error.required class=input-error>{{ctc.errorMsg[1].errorMsg}}</p></form><div class=row><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 checkbox\"><label><input ng-model=ctc.checkTerms type=checkbox> {{ctc.termsInfo}}</label></div><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\"><button type=submit ng-disabled=suscribeForm.$valid class=ghost-btn>{{ctc.suscribeBtn}}</button></div></div></div></div></div>");
$templateCache.put("app/views/home/home.html","<div ng-if=vm.error_trigger id=global-error><div id=info class=text-center><h3>{{vm.error_global_msg}}</h3><a href=/home.html>{{vm.error_global_btn}}</a></div></div><div ng-if=!vm.error_trigger id=homeView><navbar></navbar><div ng-if=!vm.slidesUp ng-class=\"{\'animateUp\': vm.slidesUp}\" id=start><div class=\"socials over-all\"><div class=container><span>Follow us <a href={{vm.url_facebook}} target=_blank><i class=\"icons eee i-Facebook\"></i></a> <a href={{vm.url_instagram}} target=_blank><i class=\"icons eee i-Twitter\"></i></a> <a href={{vm.url_twitter}} target=_blank><i class=\"icons eee i-Instagram\"></i></a></span></div></div><div class=\"over-all scroll-down text-center\"><button class=link-btn ng-click=vm.slideUp()><span>SCROLL <i class=\"eee i-mouse\"></i> DOWN</span></button></div><simple-slider style=\"width:100vw; height:100vh\" transition-property=opacity start-value=0 visible-value=1 end-value=0><div ng-repeat=\"slide in vm.slides\"><p id=frases class=container>{{slide.phrase}}</p><img ng-src={{slide.image}} alt={{slide.autor}}></div><!--<img ng-repeat=\"slide in vm.slides\" ng-src=\"{{slide.image}}\" alt=\"{{slide.autor}}\">--><!--<p id=\"frases\" class=\"container\" ng-repeat=\"slide in vm.slides\">{{slide.frase}}</p>--></simple-slider></div><div class=container><div class=main-content><div ng-include=vm.menuSelectedUrl></div></div></div><efooter></efooter></div>");
$templateCache.put("app/views/news/news.html","<div id=newsView class=row ng-controller=\"NewsController as nc\"><vcard ng-repeat=\"vcard in nc.vcards\" data-id=\"{{ vcard.id }}\" data-img=\"{{ vcard.img }}\" data-title=\"{{ vcard.title }}\" data-date=\"{{ vcard.date }}\" data-description=\"{{ vcard.desc }}\"></vcard></div>");
$templateCache.put("app/views/records/records.html","<div class=row ng-controller=\"RecordsController as recCtrl\"><!--menu de la izquierda--><div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\"><div class=left-menu><h3>{{vm.getTitle()}}</h3><ul><li class=lm-item ng-repeat=\"menu in vm.getMenu()\" ng-class=\"{\'active\': menu.active == true}\" ng-click=recCtrl.loadCards(menu)><button>{{menu.title}}</button></li></ul></div></div><!--contenido --><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\"><!--real content--><div class=cards-content><div class=row><card ng-if=\"vm.actual_menu == 0\" ng-repeat=\"card in vm.getCards()\" data-id=\"{{ card.id }}\" data-img=\"{{ card.img }}\" data-title=\"{{ card.title }}\" data-format=\"{{ card.format }}\" data-collection=\"{{ card.collection }}\" data-crautor=\"{{ card.crautor }}\" data-credit=\"{{ card.credit }}\" data-de=\"{{ card.de }}\" data-cm=\"{{ card.cm }}\" data-rm=\"{{ card.rm }}\" data-dg=\"{{ card.dg }}\" data-pe=\"{{ card.pe }}\" data-price=\"{{ card.price }}\"></card><lcard ng-if=\"vm.actual_menu == 1\" ng-repeat=\"card in vm.getCards()\" data-id=\"{{ card.id }}\" data-title=\"{{ card.title }}\" data-format=\"{{ card.format }}\" data-collection=\"{{ card.collection }}\" data-price=\"{{ card.price }}\" card-info=card></lcard></div></div><!-- contenido--></div></div>");}]);
//# sourceMappingURL=../maps/scripts/app-403cf91b48.js.map
