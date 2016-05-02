import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  colorHex: DS.attr('string'),
  rank: DS.attr('number'),
  name: DS.attr('string'),
  requiredPoints: DS.attr('number'),
  userBadges: DS.hasMany('user-badge')
});
