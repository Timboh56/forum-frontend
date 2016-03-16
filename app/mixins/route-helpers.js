import Ember from 'ember';

export default Ember.Mixin.create({
  peekOrFind: function(modelName, params) {
    const length = this.store.peekAll(modelName).get('length');
    if (length > 2)
      return this.store.peekAll(modelName, { page: params.page });
    else
      return this.store.findAll(modelName, { page: params.page });
  }
});
