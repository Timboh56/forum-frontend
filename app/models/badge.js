import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  colorHex: DS.attr('string'),
  name: DS.attr('string'),
  userBadges: DS.hasMany('user-badge')
});
