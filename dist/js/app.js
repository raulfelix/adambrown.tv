webpackJsonp([1],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(17),a=o(i),r=n(34),s=o(r),l=n(93);window.Blog={init:function(){s["default"].render(a["default"].createElement(l.BlogGrid,null),document.getElementById("instagram-container"))}},window.Blog.init()},60:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={MINUTE_IN_SECONDS:60,HOUR_IN_SECONDS:3600,DAY_IN_SECONDS:86400,WEEK_IN_SECONDS:604800,YEAR_IN_SECONDS:31536e3,format:function(e,t){var o,i=e/1e3-t;return i<n.HOUR_IN_SECONDS?(o=Math.round(i/n.MINUTE_IN_SECONDS),n.pluralize(o,"minute","minutes")):i<n.DAY_IN_SECONDS&&i>=n.HOUR_IN_SECONDS?(o=Math.round(i/n.HOUR_IN_SECONDS),n.pluralize(o,"hour","hours")):i<n.WEEK_IN_SECONDS&&i>=n.DAY_IN_SECONDS?(o=Math.round(i/n.DAY_IN_SECONDS),n.pluralize(o,"day","days")):i<30*n.DAY_IN_SECONDS&&i>=n.WEEK_IN_SECONDS?(o=Math.round(i/n.WEEK_IN_SECONDS),n.pluralize(o,"week","weeks")):i<n.YEAR_IN_SECONDS&&i>=30*n.DAY_IN_SECONDS?(o=Math.round(i/(30*n.DAY_IN_SECONDS)),n.pluralize(o,"month","months")):i>=n.YEAR_IN_SECONDS?(o=Math.round(i/n.YEAR_IN_SECONDS),n.pluralize(o,"year","years")):void 0},pluralize:function(e,t,n){var o="1 "+t;return e>1&&(o=e+" "+n),o+" ago"}};t["default"]=n},93:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.BlogGrid=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(17),u=o(l),c=n(94),d=n(96);t.BlogGrid=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={posts:[],isLoading:!0,isFinished:!1},n.onSuccess=n.onSuccess.bind(n),n.showModal=n.showModal.bind(n),n}return r(t,e),s(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e,t,n=this,o=[];return this.state.isFinished||(e=this.state.isLoading?u["default"].createElement("button",{id:"load-more",className:"button",onClick:this.loadMore.bind(this)},u["default"].createElement("div",{className:"loader-icon"},u["default"].createElement("i",{className:"icon-loader"}))):u["default"].createElement("button",{id:"load-more",className:"button",onClick:this.loadMore.bind(this)},u["default"].createElement("span",null,"LOAD MORE..."))),this.state.isModalActive&&(t=u["default"].createElement(c.Modal,{posts:this.state.posts,index:this.state.index,isFinished:this.state.isFinished,onClose:this.onModalClose.bind(this),onFetch:this.onFetchFromModal.bind(this)})),this.state.posts.length>0&&(o=this.state.posts.map(function(e,t){return u["default"].createElement(d.Post,{key:t,post:e,showModal:function(){n.showModal(e,t)}})})),u["default"].createElement("div",{className:"blog-grid"},o,u["default"].createElement("div",{className:"center"},e),t)}},{key:"fetch",value:function(e,t){var n=this,o={action:"do_ajax",fn:"instabinge",nextUrl:e};jQuery.getJSON(AjaxData.url,o).done(function(e){var o=n.state.posts.concat(e.data);n.setState({posts:o,nextUrl:e.pagination.next_url,isLoading:!1,isFinished:void 0===e.pagination.next_url},function(){t&&t(e.data,n.state.isFinished)})})}},{key:"onFetchFromModal",value:function(e){this.fetch(this.state.nextUrl,e)}},{key:"onSuccess",value:function(e){this.setState({posts:this.state.posts.concat(e.data),nextUrl:e.pagination.next_url,isLoading:!1,isFinished:void 0===e.pagination.next_url})}},{key:"showModal",value:function(e,t){this.setState({isModalActive:!0,index:t})}},{key:"onModalClose",value:function(){this.setState({isModalActive:!1})}},{key:"loadMore",value:function(){this.setState({isLoading:!0}),this.fetch(this.state.nextUrl)}}]),t}(u["default"].Component)},94:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(17),u=o(l),c=n(110),d=o(c),f=n(95);t.Modal=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=576;return window.matchMedia("(max-width: 680px)").matches&&(o=600),n.isFinished=e.isFinished,n.posts=e.posts,n.state={height:o},n}return r(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;this.slider=jQuery(".modal-instabinge-slider").royalSlider({keyboardNavEnabled:!0,sliderDrag:!1,arrowsNavHideOnTouch:!0,navigateByClick:!1,transitionSpeed:260,startSlideId:this.props.index,controlNavigation:"none"}).data("royalSlider"),this.slider.ev.on("rsAfterSlideChange",function(){e.posts.length-1===e.slider.currSlideId&&(console.log(e.isFinished),e.isFinished||e.props.onFetch(function(t,n){e.add(t),e.posts=e.posts.concat(t),e.isFinished=n}))})}},{key:"componentWillUnmount",value:function(){this.slider.destroy()}},{key:"add",value:function(e){var t=this;e.forEach(function(e,n){t.slider.appendSlide(d["default"].renderToString(u["default"].createElement(f.ModalPost,{key:n,post:e})))})}},{key:"render",value:function(){var e=this.posts.map(function(e,t){return u["default"].createElement(f.ModalPost,{key:t,post:e})});return u["default"].createElement("div",{className:"modal modal-instabinge"},u["default"].createElement("button",{type:"button",className:"modal-action",onClick:this.props.onClose},"x"),u["default"].createElement("div",{className:"modal-wrap"},u["default"].createElement("div",{className:"modal-instabinge-slider"},e)),u["default"].createElement("button",{type:"button",className:"modal-prev",onClick:this.onPrev.bind(this)}),u["default"].createElement("button",{type:"button",className:"modal-next",onClick:this.onNext.bind(this)}))}},{key:"onPrev",value:function(){this.slider.prev()}},{key:"onNext",value:function(){this.slider.next()}}]),t}(u["default"].Component)},95:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ModalPost=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(17),u=o(l),c=n(60),d=o(c),f=n(97);t.ModalPost=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isVideo:"video"===n.props.post.type},n}return r(t,e),s(t,[{key:"render",value:function(){var e,t,n=["modal-view-image"];return this.props.post.location&&(e=u["default"].createElement("div",{className:"inst-post-location"},u["default"].createElement("i",{className:"icon-location inline"}),u["default"].createElement("span",{className:"inline"},this.props.post.location.name))),t="video"===this.props.post.type?u["default"].createElement(f.Video,{controls:!0,poster:this.props.post.images.standard_resolution.url,src:this.props.post.videos.standard_resolution.url,onPlay:this.onPlay.bind(this)}):u["default"].createElement("img",{src:this.props.post.images.standard_resolution.url}),this.state.isVideo&&n.push("video"),this.props.post.images.standard_resolution.height>this.props.post.images.standard_resolution.width&&n.push("height-100"),u["default"].createElement("div",{className:"modal-slide",onClick:this.props.onClick},u["default"].createElement("div",{className:"instabinge-pod-wrap inst-post"},u["default"].createElement("div",{className:n.join(" ")},t),u["default"].createElement("div",{className:"modal-view-details"},u["default"].createElement("div",{className:"inst-wrap"},e,u["default"].createElement("span",{className:"inst-post-time"},d["default"].format(Date.now(),this.props.post.created_time)),u["default"].createElement("p",null,this.props.post.caption.text)))))}},{key:"onPlay",value:function(){this.setState({isVideo:!1})}}]),t}(u["default"].Component)},96:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Post=void 0;var i=n(17),a=o(i),r=n(60),s=o(r),l=function(e){var t;return null!==e.post.location&&(t=a["default"].createElement("div",{className:"inst-post-location"},a["default"].createElement("i",{className:"icon-location inline"}),a["default"].createElement("span",{className:"inline"},e.post.location.name))),a["default"].createElement("div",{className:"inst-post",onClick:e.showModal},a["default"].createElement("div",{className:"inst-post-img "+e.post.type},a["default"].createElement("img",{src:e.post.images.thumbnail.url.replace("s150x150","s320x320")})),a["default"].createElement("div",{className:"inst-post-detail"},t,a["default"].createElement("span",{className:"inst-post-time"},s["default"].format(Date.now(),e.post.created_time))))};t.Post=l},97:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Video=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(17),u=o(l),c=n(34),d=o(c);t.Video=function(e){function t(e){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),s(t,[{key:"render",value:function(){return u["default"].createElement("video",{poster:this.props.poster,preload:"none",src:this.props.src,type:"video/mp4",loop:"",onClick:this.onPlay.bind(this)})}},{key:"onPlay",value:function(){d["default"].findDOMNode(this).play(),this.props.onPlay()}}]),t}(u["default"].Component)},110:function(e,t,n){"use strict";e.exports=n(134)},134:function(e,t,n){"use strict";var o=n(73),i=n(147),a=n(50);o.inject();var r={renderToString:i.renderToString,renderToStaticMarkup:i.renderToStaticMarkup,version:a};e.exports=r},146:function(e,t){"use strict";var n={isBatchingUpdates:!1,batchedUpdates:function(e){}};e.exports=n},147:function(e,t,n){"use strict";function o(e,t){var n;try{return h.injection.injectBatchingStrategy(f),n=p.getPooled(t),y++,n.perform(function(){var o=v(e,!0),i=d.mountComponent(o,n,null,s(),m,0);return t||(i=c.addChecksumToMarkup(i)),i},null)}finally{y--,p.release(n),y||h.injection.injectBatchingStrategy(l)}}function i(e){return u.isValidElement(e)?void 0:r("46"),o(e,!1)}function a(e){return u.isValidElement(e)?void 0:r("47"),o(e,!0)}var r=n(2),s=n(70),l=n(72),u=n(9),c=(n(7),n(78)),d=n(16),f=n(146),p=n(83),h=n(10),m=n(18),v=n(55),y=(n(1),0);e.exports={renderToString:i,renderToStaticMarkup:a}}});
//# sourceMappingURL=app.js.map