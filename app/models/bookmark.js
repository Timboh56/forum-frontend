import DS from 'ember-data';

export default DS.Model.extend({
  bookmarkable: DS.belongsTo('bookmarkable', { polymorphic: true }),
  user: DS.belongsTo('user')
});
