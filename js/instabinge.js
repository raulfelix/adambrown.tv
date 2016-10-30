/**
 * Instabinge class
 * Depends on jQuery for ajax request
 *
 * @author Raul Felix Carrizo
 * @copyright Raul Felix Carrizo 2014
 * @version 0.1.0
 * @license MIT
 */

(function($) {

  window.Instabinge = function(config) {
    
    var cache = [],
      options = {
        asJSON: true,
        cache: false,
        count: 15,
        formatTime: false,
        url: undefined,
        template: undefined,
        // callbacks
        onSuccess: undefined,
        onFail: undefined
      };


    var Ajax = {
      
      params: {},

      get: function() {
        $.getJSON(options.url, this.params)
          .done(this.success)
          .fail(this.fail);
      },

      success: function(response) {
        if (options.cache) {
          cache.push(response.data);
        }

        if (options.formatTime) {
          var now = Date.now();
          for (var i = 0, length = response.data.length; i < length; i++) {
            response.data[i].created_time = Format.time(now, response.data[i].created_time);
          }
        }

        // add next_max_id to the params
        Ajax.params.next_url = response.pagination.next_url;

        if (options.asJSON && options.onSuccess) {
          options.onSuccess(response);
        } else {
          // use the defined template to return html
        }
      },

      fail: function(response) {
        if (options.onFail) {
          options.onFail(response);
        }
      }
    };

    // initialise options
    options.url = config.url ? config.url : undefined;
    options.asJSON = config.asJSON ? config.asJSON : options.asJSON;
    options.count = config.count ? config.count : options.count;
    options.onSuccess = config.onSuccess ? config.onSuccess : undefined;
    options.template = config.template ? config.template : undefined;
    options.formatTime = config.formatTime === true;

    Ajax.params.action = config.params.action;
    Ajax.params.fn = config.params.fn;
    Ajax.params.count = options.count;

    return {
      run: function() {
        Ajax.get();
      }
    };

  };

})(jQuery);