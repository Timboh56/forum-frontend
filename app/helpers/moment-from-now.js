import Ember from 'ember';

export function momentFromNow(params) {
  var momentFromNowString = '';
  var nowInSecs = Date.now()/1000,
    dateParam = new Date(params),
    thenInSecs = Date.parse(params)/1000,
    diffInSecs =  parseInt(nowInSecs - thenInSecs),
    diffInMins = parseInt(diffInSecs/60),
    diffInHours = parseInt(diffInMins/60),
    diffInDays = parseInt(diffInHours/24);

  var diffs = {
    'seconds': diffInSecs,
    'minutes': diffInMins,
    'hours': diffInHours,
    'days': diffInDays
  };

  if (diffInDays > 5) {
    var dateString = (dateParam.getMonth() + 1) + '/' + dateParam.getDate() + '/' + dateParam.getFullYear();
    momentFromNowString = dateString;
  } else {
    var topTimeRange = null;

    for (var i in diffs) {
      if(diffs[i] > 0) {
        momentFromNowString = diffs[i] + ' ' + i + ' ago.';
      }
    }
  }

  return momentFromNowString;
}

export default Ember.Helper.helper(momentFromNow);
