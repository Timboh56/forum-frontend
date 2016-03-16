import DS from 'ember-data';

export default DS.Model.extend({
  receiver: DS.belongsTo('user', { inverse: 'receivedMessages' }),
  sender: DS.belongsTo('user', { inverse: 'sentMessages' }),
  text: DS.attr('string')
});
