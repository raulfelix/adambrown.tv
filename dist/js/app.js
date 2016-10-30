webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _BlogGrid = __webpack_require__(90);
	
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

/***/ 60:
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

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BlogGrid = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(91);
	
	var _Post = __webpack_require__(93);
	
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
	          onClose: this.onModalClose.bind(this) });
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
	    value: function fetch(nextUrl) {
	      var params = {
	        action: 'do_ajax',
	        fn: 'instabinge',
	        nextUrl: nextUrl
	      };
	
	      console.log('fetch', nextUrl);
	      jQuery.getJSON(AjaxData.url, params).done(this.onSuccess).fail(this.onFail);
	    }
	  }, {
	    key: 'onSuccess',
	    value: function onSuccess(response) {
	      console.log(response);
	      // change thumbnail size to 320 instead of default 150
	      this.setState({
	        posts: this.state.posts.concat(response.data),
	        nextUrl: response.pagination.next_url,
	        isLoading: false,
	        isFinished: response.pagination.next_url === undefined
	      });
	    }
	  }, {
	    key: 'onFail',
	    value: function onFail() {}
	  }, {
	    key: 'showModal',
	    value: function showModal(post, idx) {
	      console.log(post, idx);
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
	      var _this3 = this;
	
	      var count = 0;
	
	      // load from memory
	      this.setState({
	        isLoading: true
	      });
	
	      // on each load get the next 6 images
	      for (var i = this.state.end; i < this.state.posts.length; i++) {
	        count++;
	      }
	
	      console.log('count', count);
	      if (count < 6) {
	        // fetch more from the server
	        this.fetch(this.state.nextUrl);
	      } else {
	        setTimeout(function () {
	          _this3.setState({
	            end: _this3.state.end + 6,
	            isLoading: false
	          });
	        }, 1000);
	      }
	    }
	  }]);
	
	  return BlogGrid;
	}(_react2.default.Component);

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Modal = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModalPost = __webpack_require__(92);
	
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
	    _this.state = {
	      posts: props.posts,
	      height: height
	    };
	    return _this;
	  }
	
	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.slider = jQuery('.modal-instabinge-slider').royalSlider({
	        keyboardNavEnabled: true,
	        sliderDrag: true,
	        arrowsNavHideOnTouch: true,
	        navigateByClick: false,
	        transitionSpeed: 260,
	        startSlideId: this.props.index,
	        controlNavigation: 'none'
	      }).data('royalSlider');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var postNodes = this.state.posts.map(function (post, i) {
	        return _react2.default.createElement(_ModalPost.ModalPost, {
	          key: i,
	          post: post
	        });
	      });
	
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

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalPost = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Time = __webpack_require__(60);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _Video = __webpack_require__(94);
	
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
	      var locationNode,
	          mediaNode,
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
	        mediaNode = _react2.default.createElement(_Video.Video, {
	          poster: this.props.post.images.standard_resolution.url,
	          src: this.props.post.videos.standard_resolution.url,
	          onPlay: this.onPlay.bind(this) });
	      } else {
	        mediaNode = _react2.default.createElement('img', { src: this.props.post.images.standard_resolution.url });
	      }
	
	      if (this.state.isVideo) {
	        classes.push('video');
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
	            mediaNode
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

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Post = undefined;
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Time = __webpack_require__(60);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Post = function Post(props) {
	  var locationNode;
	
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
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'inst-post', onClick: props.showModal },
	    _react2.default.createElement(
	      'div',
	      { className: 'inst-post-img ' + props.post.type },
	      _react2.default.createElement('img', { src: props.post.images.thumbnail.url.replace('s150x150', 's320x320') })
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

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Video = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
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

/***/ }

});
//# sourceMappingURL=app.js.map