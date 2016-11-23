webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _BlogGrid = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//eslint-disable-line
	var Format = {
	
	  MINUTE_IN_SECONDS: 60,
	  HOUR_IN_SECONDS: 60 * 60,
	  DAY_IN_SECONDS: 24 * 60 * 60,
	  WEEK_IN_SECONDS: 7 * 24 * 60 * 60,
	  YEAR_IN_SECONDS: 365 * 24 * 60 * 60,
	
	  time: function time(now, unixSeconds) {
	    var calc,
	        diff = now / 1000 - unixSeconds;
	
	    if (diff < Format.HOUR_IN_SECONDS) {
	      calc = Math.round(diff / Format.MINUTE_IN_SECONDS);
	      return Format.pluralize(calc, 'minute', 'minutes');
	    } else if (diff < Format.DAY_IN_SECONDS && diff >= Format.HOUR_IN_SECONDS) {
	      calc = Math.round(diff / Format.HOUR_IN_SECONDS);
	      return Format.pluralize(calc, 'hour', 'hours');
	    } else if (diff < Format.WEEK_IN_SECONDS && diff >= Format.DAY_IN_SECONDS) {
	      calc = Math.round(diff / Format.DAY_IN_SECONDS);
	      return Format.pluralize(calc, 'day', 'days');
	    } else if (diff < 30 * Format.DAY_IN_SECONDS && diff >= Format.WEEK_IN_SECONDS) {
	      calc = Math.round(diff / Format.WEEK_IN_SECONDS);
	      return Format.pluralize(calc, 'week', 'weeks');
	    } else if (diff < Format.YEAR_IN_SECONDS && diff >= 30 * Format.DAY_IN_SECONDS) {
	      calc = Math.round(diff / (30 * Format.DAY_IN_SECONDS));
	      return Format.pluralize(calc, 'month', 'months');
	    } else if (diff >= Format.YEAR_IN_SECONDS) {
	      calc = Math.round(diff / Format.YEAR_IN_SECONDS);
	      return Format.pluralize(calc, 'year', 'years');
	    }
	  },
	
	  pluralize: function pluralize(value, singular, plural) {
	    var label = '1 ' + singular;
	    if (value > 1) {
	      label = value + ' ' + plural;
	    }
	    return label + ' ago';
	  }
	}; ///////////////////////////////
	// blog
	///////////////////////////////
	
	
	window.Blog = {
	
	  init: function init() {
	    _reactDom2.default.render(_react2.default.createElement(_BlogGrid.BlogGrid, null), document.getElementById('instagram-container'));
	  }
	
	  // var View = {
	
	  // elements: {
	  //   container: jQuery('#instagram-container'),
	  //   button: jQuery('#load-more')
	  // },
	
	
	  // View.state.instabinge = new Instabinge({
	  //   asJSON: true,
	  //   cache: false,
	  //   params: {
	  //     'action': 'do_ajax',
	  //     'fn': 'instabinge'
	  //   },
	  //   onSuccess: View.render,
	  //   url: AjaxData.url
	  // });
	  // View.state.instabinge.run();
	  // View.elements.button.click(View.fetch);
	  // },
	
	  // fetch: function() {
	  //   View.elements.button.addClass('loader-icon-active');
	  //   View.state.instabinge.run();
	  // },
	  // 
	  // render: function(response) {
	  //   var item, time, caption, location,
	  //     now = Date.now(),
	  //     fragment = jQuery(document.createDocumentFragment()),
	  //     data = response.data;
	  //   for (var i = 0, length = data.length; i < length; i++) {
	  //     item = data[i];
	  //     time = Format.time(now, item.created_time);
	  //     caption = item.caption !== null ? item.caption.text : ''; 
	  //     location = item.location && item.location.name ? '<a href="#" class="insta-secondary"><i class="icon-location"></i>' + item.location.name + '</a>' : '';
	  //     fragment.append('<div class="insta-wrap clearfix"><div class="insta-image"><img src="' + item.images.standard_resolution.url +'"></div><div class="insta-details"><h3 class="insta-primary">' + time + '</h3>' + location + '<p class="insta-description">' + caption + '</p></div></div>');
	  //   }
	  //   View.elements.container.append(fragment);
	  //   View.elements.button.removeClass('loader-icon-active');
	  // 
	  //   if (response.pagination.next_max_id === undefined) {
	  //     View.elements.button.css('display', 'none');
	  //   }
	  // }
	  // };
	
	};
	
	window.Blog.init();

/***/ },

/***/ 62:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Time = {
	
	  MINUTE_IN_SECONDS: 60,
	  HOUR_IN_SECONDS: 60 * 60,
	  DAY_IN_SECONDS: 24 * 60 * 60,
	  WEEK_IN_SECONDS: 7 * 24 * 60 * 60,
	  YEAR_IN_SECONDS: 365 * 24 * 60 * 60,
	
	  format: function format(now, unixSeconds) {
	    var calc,
	        diff = now / 1000 - unixSeconds;
	
	    if (diff < Time.HOUR_IN_SECONDS) {
	      calc = Math.round(diff / Time.MINUTE_IN_SECONDS);
	      return Time.pluralize(calc, 'minute', 'minutes');
	    } else if (diff < Time.DAY_IN_SECONDS && diff >= Time.HOUR_IN_SECONDS) {
	      calc = Math.round(diff / Time.HOUR_IN_SECONDS);
	      return Time.pluralize(calc, 'hour', 'hours');
	    } else if (diff < Time.WEEK_IN_SECONDS && diff >= Time.DAY_IN_SECONDS) {
	      calc = Math.round(diff / Time.DAY_IN_SECONDS);
	      return Time.pluralize(calc, 'day', 'days');
	    } else if (diff < 30 * Time.DAY_IN_SECONDS && diff >= Time.WEEK_IN_SECONDS) {
	      calc = Math.round(diff / Time.WEEK_IN_SECONDS);
	      return Time.pluralize(calc, 'week', 'weeks');
	    } else if (diff < Time.YEAR_IN_SECONDS && diff >= 30 * Time.DAY_IN_SECONDS) {
	      calc = Math.round(diff / (30 * Time.DAY_IN_SECONDS));
	      return Time.pluralize(calc, 'month', 'months');
	    } else if (diff >= Time.YEAR_IN_SECONDS) {
	      calc = Math.round(diff / Time.YEAR_IN_SECONDS);
	      return Time.pluralize(calc, 'year', 'years');
	    }
	  },
	
	  pluralize: function pluralize(value, singular, plural) {
	    var label = '1 ' + singular;
	    if (value > 1) {
	      label = value + ' ' + plural;
	    }
	    return label + ' ago';
	  }
	};
	
	exports.default = Time;

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BlogGrid = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(96);
	
	var _Post = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global AjaxData, jQuery */
	
	
	var BlogGrid = exports.BlogGrid = function (_React$Component) {
	  _inherits(BlogGrid, _React$Component);
	
	  function BlogGrid(props) {
	    _classCallCheck(this, BlogGrid);
	
	    var _this = _possibleConstructorReturn(this, (BlogGrid.__proto__ || Object.getPrototypeOf(BlogGrid)).call(this, props));
	
	    _this.state = {
	      posts: [],
	      isLoading: true,
	      isFinished: false
	    };
	    _this.onSuccess = _this.onSuccess.bind(_this);
	    _this.showModal = _this.showModal.bind(_this);
	    return _this;
	  }
	
	  _createClass(BlogGrid, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetch();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var buttonNode,
	          modalNode,
	          postNodes = [];
	
	      if (!this.state.isFinished) {
	        if (this.state.isLoading) {
	          buttonNode = _react2.default.createElement(
	            'button',
	            { id: 'load-more', className: 'button', onClick: this.loadMore.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { className: 'loader-icon' },
	              _react2.default.createElement('i', { className: 'icon-loader' })
	            )
	          );
	        } else {
	          buttonNode = _react2.default.createElement(
	            'button',
	            { id: 'load-more', className: 'button', onClick: this.loadMore.bind(this) },
	            _react2.default.createElement(
	              'span',
	              null,
	              'LOAD MORE...'
	            )
	          );
	        }
	      }
	
	      if (this.state.isModalActive) {
	        modalNode = _react2.default.createElement(_Modal.Modal, {
	          posts: this.state.posts,
	          index: this.state.index,
	          isFinished: this.state.isFinished,
	          onClose: this.onModalClose.bind(this),
	          onFetch: this.onFetchFromModal.bind(this) });
	      }
	
	      if (this.state.posts.length > 0) {
	        postNodes = this.state.posts.map(function (o, i) {
	          return _react2.default.createElement(_Post.Post, {
	            key: i,
	            post: o,
	            showModal: function showModal() {
	              _this2.showModal(o, i);
	            } });
	        });
	      }
	
	      if (this.state.isFinished) {
	        // add an extra tile to the grid
	        postNodes.push(_react2.default.createElement(
	          'div',
	          { className: 'inst-post', key: this.state.posts.length + 1 },
	          _react2.default.createElement(
	            'a',
	            { className: 'inst-post-img instagram', href: 'http://www.instagram.com/adventuresinmotion', target: '_blank' },
	            _react2.default.createElement('img', { src: this.state.posts[this.state.posts.length - 1].images.thumbnail.url.replace('s150x150', 's320x320') }),
	            _react2.default.createElement(
	              'div',
	              { className: 'text-wrapper' },
	              _react2.default.createElement(
	                'span',
	                null,
	                'To see more of my work'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'link' },
	                'www.instagram.com/adventuresinmotion'
	              )
	            )
	          )
	        ));
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'blog-grid' },
	        postNodes,
	        _react2.default.createElement(
	          'div',
	          { className: 'center' },
	          buttonNode
	        ),
	        modalNode
	      );
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch(nextUrl, callback) {
	      var _this3 = this;
	
	      var params = {
	        action: 'do_ajax',
	        fn: 'instabinge',
	        nextUrl: nextUrl
	      };
	
	      jQuery.getJSON(AjaxData.url, params).done(function (response) {
	        var posts = _this3.state.posts.concat(response.data);
	
	        _this3.setState({
	          posts: posts,
	          nextUrl: response.pagination.next_url,
	          isLoading: false,
	          isFinished: response.pagination.next_url === undefined
	        }, function () {
	          if (callback) {
	            callback(response.data, _this3.state.isFinished);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'onFetchFromModal',
	    value: function onFetchFromModal(callback) {
	      this.fetch(this.state.nextUrl, callback);
	    }
	  }, {
	    key: 'onSuccess',
	    value: function onSuccess(response) {
	      this.setState({
	        posts: this.state.posts.concat(response.data),
	        nextUrl: response.pagination.next_url,
	        isLoading: false,
	        isFinished: response.pagination.next_url === undefined
	      });
	    }
	  }, {
	    key: 'showModal',
	    value: function showModal(post, idx) {
	      this.setState({
	        isModalActive: true,
	        index: idx
	      });
	    }
	  }, {
	    key: 'onModalClose',
	    value: function onModalClose() {
	      this.setState({
	        isModalActive: false
	      });
	    }
	  }, {
	    key: 'loadMore',
	    value: function loadMore() {
	      // load from memory
	      this.setState({
	        isLoading: true
	      });
	
	      this.fetch(this.state.nextUrl);
	    }
	  }]);
	
	  return BlogGrid;
	}(_react2.default.Component);

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Modal = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(114);
	
	var _server2 = _interopRequireDefault(_server);
	
	var _ModalPost = __webpack_require__(97);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global jQuery */
	
	
	var Modal = exports.Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);
	
	  function Modal(props) {
	    _classCallCheck(this, Modal);
	
	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
	
	    var height = 576;
	    if (window.matchMedia("(max-width: 680px)").matches) {
	      height = 600;
	    }
	    _this.isFinished = props.isFinished;
	    _this.isLoading = false;
	    _this.posts = props.posts;
	    _this.state = {
	      height: height
	    };
	    return _this;
	  }
	
	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.slider = jQuery('.modal-instabinge-slider').royalSlider({
	        keyboardNavEnabled: true,
	        sliderDrag: false,
	        arrowsNavHideOnTouch: true,
	        navigateByClick: false,
	        transitionSpeed: 260,
	        startSlideId: this.props.index,
	        controlNavigation: 'none'
	      }).data('royalSlider');
	
	      this.slider.ev.on('rsBeforeAnimStart', function () {
	        if (_this2.posts.length - 1 === _this2.slider.currSlideId) {
	          if (!_this2.isFinished && !_this2.isLoading) {
	            _this2.isLoading = true;
	            _this2.props.onFetch(function (posts, isFinished) {
	              _this2.isFinished = isFinished;
	              _this2.add(posts);
	              _this2.posts = _this2.posts.concat(posts);
	              _this2.isLoading = false;
	            });
	          }
	        }
	      });
	
	      this.slider.ev.on('rsAfterSlideChange', function () {
	        // if (this.posts.length - 1 === this.slider.currSlideId) {
	        //   console.log(this.isFinished);
	        //   if (!this.isFinished && !this.isLoading) {
	        //     this.isLoading = true;
	        //     this.props.onFetch((posts, isFinished) => {
	        //       this.add(posts);
	        //       this.posts = this.posts.concat(posts);
	        //       this.isFinished = isFinished;
	        //       this.isLoading = false;
	        //     });
	        //   }
	        // }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.slider.destroy();
	    }
	  }, {
	    key: 'add',
	    value: function add(posts) {
	      var _this3 = this;
	
	      posts.forEach(function (post, i) {
	        _this3.slider.appendSlide(_server2.default.renderToString(_react2.default.createElement(_ModalPost.ModalPost, {
	          key: i,
	          post: post })));
	      });
	
	      if (this.isFinished) {
	        this.slider.appendSlide(_server2.default.renderToString(_react2.default.createElement(
	          'div',
	          { className: 'modal-slide', key: posts.length + 1 },
	          _react2.default.createElement(
	            'a',
	            { className: 'nstabinge-pod-wrap instagram', href: 'http://www.instagram.com/adventuresinmotion', target: '_blank' },
	            _react2.default.createElement('img', { src: posts[posts.length - 1].images.standard_resolution.url }),
	            _react2.default.createElement(
	              'div',
	              { className: 'text-wrapper' },
	              _react2.default.createElement(
	                'span',
	                null,
	                'To see more of my work'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'link' },
	                'www.instagram.com/adventuresinmotion'
	              )
	            )
	          )
	        )));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var postNodes = this.posts.map(function (post, i) {
	        return _react2.default.createElement(_ModalPost.ModalPost, {
	          key: i,
	          post: post
	        });
	      });
	
	      if (this.isFinished) {
	        postNodes.push(_react2.default.createElement(
	          'div',
	          { className: 'modal-slide', key: this.posts.length + 1 },
	          _react2.default.createElement(
	            'a',
	            { className: 'instabinge-pod-wrap instagram', href: 'http://www.instagram.com/adventuresinmotion', target: '_blank' },
	            _react2.default.createElement('img', { src: this.posts[this.posts.length - 1].images.standard_resolution.url }),
	            _react2.default.createElement(
	              'div',
	              { className: 'text-wrapper' },
	              _react2.default.createElement(
	                'span',
	                null,
	                'To see more of my work'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'link' },
	                'www.instagram.com/adventuresinmotion'
	              )
	            )
	          )
	        ));
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'modal modal-instabinge' },
	        _react2.default.createElement(
	          'button',
	          {
	            type: 'button',
	            className: 'modal-action',
	            onClick: this.props.onClose },
	          'x'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-wrap' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-instabinge-slider' },
	            postNodes
	          )
	        ),
	        _react2.default.createElement('button', {
	          type: 'button',
	          className: 'modal-prev',
	          onClick: this.onPrev.bind(this) }),
	        _react2.default.createElement('button', {
	          type: 'button',
	          className: 'modal-next',
	          onClick: this.onNext.bind(this) })
	      );
	    }
	  }, {
	    key: 'onPrev',
	    value: function onPrev() {
	      this.slider.prev();
	    }
	  }, {
	    key: 'onNext',
	    value: function onNext() {
	      this.slider.next();
	    }
	  }]);
	
	  return Modal;
	}(_react2.default.Component);

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalPost = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Time = __webpack_require__(62);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _Video = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //eslint-disable-line
	
	
	var ModalPost = exports.ModalPost = function (_React$Component) {
	  _inherits(ModalPost, _React$Component);
	
	  function ModalPost(props) {
	    _classCallCheck(this, ModalPost);
	
	    var _this = _possibleConstructorReturn(this, (ModalPost.__proto__ || Object.getPrototypeOf(ModalPost)).call(this, props));
	
	    _this.state = {
	      isVideo: _this.props.post.type === 'video'
	    };
	    return _this;
	  }
	
	  _createClass(ModalPost, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var locationNode,
	          mediaNode,
	          playNode,
	          classes = ['modal-view-image'];
	
	      if (this.props.post.location) {
	        locationNode = _react2.default.createElement(
	          'div',
	          { className: 'inst-post-location' },
	          _react2.default.createElement('i', { className: 'icon-location inline' }),
	          _react2.default.createElement(
	            'span',
	            { className: 'inline' },
	            this.props.post.location.name
	          )
	        );
	      }
	
	      if (this.props.post.type === 'video') {
	        classes.push('video');
	
	        // when viewing video dont show triangle
	        if (this.state.isVideo) {
	          playNode = _react2.default.createElement('div', { className: 'icon-play', onClick: function onClick() {
	              _this2.refs.vid.onPlay();
	            } });
	        }
	
	        mediaNode = _react2.default.createElement(_Video.Video, { controls: true,
	          ref: 'vid',
	          poster: this.props.post.images.standard_resolution.url,
	          src: this.props.post.videos.standard_resolution.url,
	          onPlay: this.onPlay.bind(this) });
	      } else {
	        mediaNode = _react2.default.createElement('img', { src: this.props.post.images.standard_resolution.url });
	      }
	
	      if (this.props.post.images.standard_resolution.height > this.props.post.images.standard_resolution.width) {
	        classes.push('height-100');
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'modal-slide', onClick: this.props.onClick },
	        _react2.default.createElement(
	          'div',
	          { className: 'instabinge-pod-wrap inst-post' },
	          _react2.default.createElement(
	            'div',
	            { className: classes.join(' ') },
	            mediaNode,
	            playNode
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-view-details' },
	            _react2.default.createElement(
	              'div',
	              { className: 'inst-wrap' },
	              locationNode,
	              _react2.default.createElement(
	                'span',
	                { className: 'inst-post-time' },
	                _Time2.default.format(Date.now(), this.props.post.created_time)
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                this.props.post.caption.text
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'onPlay',
	    value: function onPlay() {
	      this.setState({
	        isVideo: false
	      });
	    }
	  }]);
	
	  return ModalPost;
	}(_react2.default.Component);

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Post = undefined;
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Time = __webpack_require__(62);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Post = function Post(props) {
	  var playNode, locationNode;
	
	  if (props.post.location !== null) {
	    locationNode = _react2.default.createElement(
	      'div',
	      { className: 'inst-post-location' },
	      _react2.default.createElement('i', { className: 'icon-location inline' }),
	      _react2.default.createElement(
	        'span',
	        { className: 'inline' },
	        props.post.location.name
	      )
	    );
	  }
	
	  if (props.post.type === 'video') {
	    playNode = _react2.default.createElement('div', { className: 'icon-play' });
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'inst-post', onClick: props.showModal },
	    _react2.default.createElement(
	      'div',
	      { className: 'inst-post-img ' + props.post.type },
	      _react2.default.createElement('img', { src: props.post.images.thumbnail.url.replace('s150x150', 's320x320') }),
	      playNode
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'inst-post-detail' },
	      locationNode,
	      _react2.default.createElement(
	        'span',
	        { className: 'inst-post-time' },
	        _Time2.default.format(Date.now(), props.post.created_time)
	      )
	    )
	  );
	}; //eslint-disable-line
	exports.Post = Post;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Video = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Video = exports.Video = function (_React$Component) {
	  _inherits(Video, _React$Component);
	
	  function Video(props) {
	    _classCallCheck(this, Video);
	
	    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
	  }
	
	  _createClass(Video, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('video', {
	        poster: this.props.poster,
	        preload: 'none',
	        src: this.props.src,
	        type: 'video/mp4',
	        loop: '',
	        onClick: this.onPlay.bind(this) });
	    }
	  }, {
	    key: 'onPlay',
	    value: function onPlay() {
	      _reactDom2.default.findDOMNode(this).play();
	      this.props.onPlay();
	    }
	  }]);
	
	  return Video;
	}(_react2.default.Component);

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(140);


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMServer
	 */
	
	'use strict';
	
	var ReactDefaultInjection = __webpack_require__(75);
	var ReactServerRendering = __webpack_require__(157);
	var ReactVersion = __webpack_require__(50);
	
	ReactDefaultInjection.inject();
	
	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};
	
	module.exports = ReactDOMServer;

/***/ },

/***/ 156:
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerBatchingStrategy
	 */
	
	'use strict';
	
	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};
	
	module.exports = ReactServerBatchingStrategy;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRendering
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(4);
	
	var ReactDOMContainerInfo = __webpack_require__(72);
	var ReactDefaultBatchingStrategy = __webpack_require__(74);
	var ReactElement = __webpack_require__(9);
	var ReactInstrumentation = __webpack_require__(8);
	var ReactMarkupChecksum = __webpack_require__(81);
	var ReactReconciler = __webpack_require__(19);
	var ReactServerBatchingStrategy = __webpack_require__(156);
	var ReactServerRenderingTransaction = __webpack_require__(86);
	var ReactUpdates = __webpack_require__(12);
	
	var emptyObject = __webpack_require__(21);
	var instantiateReactComponent = __webpack_require__(57);
	var invariant = __webpack_require__(2);
	
	var pendingTransactions = 0;
	
	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToStringImpl(element, makeStaticMarkup) {
	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
	
	    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);
	
	    pendingTransactions++;
	
	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, true);
	      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
	      );
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
	      }
	      if (!makeStaticMarkup) {
	        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
	      }
	      return markup;
	    }, null);
	  } finally {
	    pendingTransactions--;
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    if (!pendingTransactions) {
	      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	    }
	  }
	}
	
	/**
	 * Render a ReactElement to its initial HTML. This should only be used on the
	 * server.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
	 */
	function renderToString(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
	  return renderToStringImpl(element, false);
	}
	
	/**
	 * Similar to renderToString, except this doesn't create extra DOM attributes
	 * such as data-react-id that React uses internally.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
	 */
	function renderToStaticMarkup(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
	  return renderToStringImpl(element, true);
	}
	
	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});
//# sourceMappingURL=app.js.map