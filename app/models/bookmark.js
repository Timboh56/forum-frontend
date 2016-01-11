import DS from 'ember-data';

export default DS.Model.extend({
  bookmarkable: DS.belongsTo('bookmark', { polymorphic: true }),
  user: DS.belongsTo('user')
});
