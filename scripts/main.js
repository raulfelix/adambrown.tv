///////////////////////////////
// blog
///////////////////////////////
import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { BlogGrid } from './BlogGrid.react';

var Format = {
    
  MINUTE_IN_SECONDS : 60,
  HOUR_IN_SECONDS   : 60 * 60,
  DAY_IN_SECONDS    : 24 * 60 * 60,
  WEEK_IN_SECONDS   : 7 * 24 * 60 * 60,
  YEAR_IN_SECONDS   : 365 * 24 * 60 * 60,

  time: function(now, unixSeconds) {
    var calc, diff = (now/1000) - unixSeconds;
    
    if ( diff < Format.HOUR_IN_SECONDS ) {
      calc = Math.round( diff / Format.MINUTE_IN_SECONDS );
      return Format.pluralize(calc, 'minute', 'minutes');
    } 
    else if ( diff < Format.DAY_IN_SECONDS && diff >= Format.HOUR_IN_SECONDS ) {
      calc = Math.round( diff / Format.HOUR_IN_SECONDS );
      return Format.pluralize(calc, 'hour', 'hours');
    } 
    else if ( diff < Format.WEEK_IN_SECONDS && diff >= Format.DAY_IN_SECONDS ) {
      calc = Math.round( diff / Format.DAY_IN_SECONDS );
      return Format.pluralize(calc, 'day', 'days');
    } 
    else if ( diff < 30 * Format.DAY_IN_SECONDS && diff >= Format.WEEK_IN_SECONDS ) {
      calc = Math.round( diff / Format.WEEK_IN_SECONDS );
      return Format.pluralize(calc, 'week', 'weeks');
    } 
    else if ( diff < Format.YEAR_IN_SECONDS && diff >= 30 * Format.DAY_IN_SECONDS ) {
      calc = Math.round( diff / ( 30 * Format.DAY_IN_SECONDS ) );
      return Format.pluralize(calc, 'month', 'months');
    } 
    else if ( diff >= Format.YEAR_IN_SECONDS ) {
      calc = Math.round( diff / Format.YEAR_IN_SECONDS );
      return Format.pluralize(calc, 'year', 'years');
    }
  },

  pluralize: function(value, singular, plural) {
    var label = '1 ' + singular;
    if (value > 1) {
      label = value + ' ' + plural;
    }
    return label + ' ago';
  }
};


window.Blog = {

  init: function() {
    ReactDOM.render(
      <BlogGrid />,
      document.getElementById('instagram-container')
    );
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