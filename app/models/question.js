import DS from 'ember-data';

var Question = DS.Model.extend({
  text: DS.attr('string'),
  answers: DS.hasMany('answer'),
  user: DS.belongsTo('user'),
  comments: DS.hasMany('comment'),
  commentsCount: DS.attr('number')
});

export default Question;