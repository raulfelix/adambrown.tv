// -  var Modal = {
// -    initializeSlider: function(index) {
// -      View.state.modal.loader.start();
// -
// -      this.state.startTime = new Date().getTime();
// -      this.render(index);
// -      this.element.$frame.royalSlider({
// -        keyboardNavEnabled: true,
// -        sliderDrag: false,
// -        navigateByClick: false,
// -        transitionSpeed: 260,
// -        startSlideId: index,
// -        controlNavigation: 'none'
// -      });
// -      
// -      this.state.slider = this.element.$frame.data('royalSlider');
// -      this.element.$slider = this.element.$frame.find('.rsOverflow');
// -
// -      this.handleImageLoad(this.element.$slider, this.element.$slider.find('.m-bg'), function() {
// -        Modal.setSliderHeight();
// -        View.state.modal.loader.stop();
// -      });
// -     
// -      this.state.slider.ev.on('rsAfterSlideChange', function(event) {
// -        ga('send', 'event', 'Instabinge', 'click', 'Instabinge modal navigate');
// -        if (Modal.state.slider.numSlides - 1 === Modal.state.slider.currSlideId) {
// -          Ajax.get(Modal.onLoad);
// -        }
// -        Modal.handleImageLoad(
// -          Modal.state.slider.currSlide.content,
// -          Modal.state.slider.currSlide.content.find('img')
// -        );
// -      });
// -    },
// -
// -    render: function(index) {
// -      var fragment = $(document.createDocumentFragment());
// -      for (var i = 0, length = Ajax.cache.length; i < length; i++) {
// -        fragment.append(Modal.template({ data: Ajax.cache[i] }));
// -      }
// -      Modal.element.$frame.append(fragment);
// -    },
// -
// -    setSliderHeight: function() {
// -      this.element.$slider.height(this.element.$slider.find('.modal-slide').height());
// -    },
// -
// -    onLoad: function(response) {
// -      var dataArray = response.data;
// -      for (var i = 0, length = dataArray.length; i < length; i++) {
// -        Modal.state.slider.appendSlide( $(Modal.templateSingle(dataArray[i])) );
// -      }
// -    },
// -
// -    reload: function() {
// -      View.state.modal.loader.start();
// -      Modal.element.$slider.height('auto').width(LWA.Modules.Util.windowWidth());
// -
// -      setTimeout(function() {
// -        Modal.state.slider.updateSliderSize(true);
// -        Modal.setSliderHeight();
// -        View.state.modal.loader.stop();
// -      }, 300);
// -    }
// -
// -  };
// 
// // -  // hold off on resize event
// // -  var delay = (function() {
// // -    var timer = 0;
// // -    return function(callback, ms){
// // -      clearTimeout(timer);
// // -      timer = setTimeout(callback, ms);
// // -    };
// // -  })();
