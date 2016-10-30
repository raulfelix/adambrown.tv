let Time = {
    
  MINUTE_IN_SECONDS : 60,
  HOUR_IN_SECONDS   : 60 * 60,
  DAY_IN_SECONDS    : 24 * 60 * 60,
  WEEK_IN_SECONDS   : 7 * 24 * 60 * 60,
  YEAR_IN_SECONDS   : 365 * 24 * 60 * 60,

  format: function(now, unixSeconds) {
    var calc, diff = (now/1000) - unixSeconds;
    
    if ( diff < Time.HOUR_IN_SECONDS ) {
      calc = Math.round( diff / Time.MINUTE_IN_SECONDS );
      return Time.pluralize(calc, 'minute', 'minutes');
    } 
    else if ( diff < Time.DAY_IN_SECONDS && diff >= Time.HOUR_IN_SECONDS ) {
      calc = Math.round( diff / Time.HOUR_IN_SECONDS );
      return Time.pluralize(calc, 'hour', 'hours');
    } 
    else if ( diff < Time.WEEK_IN_SECONDS && diff >= Time.DAY_IN_SECONDS ) {
      calc = Math.round( diff / Time.DAY_IN_SECONDS );
      return Time.pluralize(calc, 'day', 'days');
    } 
    else if ( diff < 30 * Time.DAY_IN_SECONDS && diff >= Time.WEEK_IN_SECONDS ) {
      calc = Math.round( diff / Time.WEEK_IN_SECONDS );
      return Time.pluralize(calc, 'week', 'weeks');
    } 
    else if ( diff < Time.YEAR_IN_SECONDS && diff >= 30 * Time.DAY_IN_SECONDS ) {
      calc = Math.round( diff / ( 30 * Time.DAY_IN_SECONDS ) );
      return Time.pluralize(calc, 'month', 'months');
    } 
    else if ( diff >= Time.YEAR_IN_SECONDS ) {
      calc = Math.round( diff / Time.YEAR_IN_SECONDS );
      return Time.pluralize(calc, 'year', 'years');
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

export default Time;