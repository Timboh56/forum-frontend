import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  votable: DS.belongsTo('votable', { polymorphic: true })
});
