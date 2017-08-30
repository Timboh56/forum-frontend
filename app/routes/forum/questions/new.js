import Ember from 'ember';
$(document).ready(function() {
  $('.tags-input').tags({
    classNames: ["other-class"],
    suggestions:["basic", "suggestions"],
    excludeList:["not", "these", "words"],
  });
});
export default Ember.Route.extend({
  model() {
    return {};
  }
});
