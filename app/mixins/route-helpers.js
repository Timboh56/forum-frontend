import Ember from 'ember';

export default Ember.Mixin.create({
  peekOrFind: function(params) {
    const questionsLength = this.store.peekAll('question').get('length');
    if (questionsLength > 2)
      return this.store.peekAll('question', { page: params.page });
    else
      return this.store.findAll('question', { page: params.page });
  }
});
