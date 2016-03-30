import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  loadingSpinner: Ember.inject.service('loading-spinner'),
  perPage: 25,
  page: 1,
  fetching: false,
  model: null,
  initializePaginator(model) {
    var self = this,
      w = $(window),
      LoadingSpinner = this.get('loadingSpinner'),
      model = model || self.get('model');

    self.set('model', model);

    Ember.run.once(this, function () {
      var lastScrollTop = 0;
      $(window).scroll(function() {
          let scrollTop = w.scrollTop(),
             windowHeight = window.innerHeight,
             documentHeight = $(document).height(),
             shouldPaginate = (scrollTop + windowHeight > documentHeight - 200) && (scrollTop > lastScrollTop);

          if(shouldPaginate) {
            let fetching = self.get('fetching');
            if (!fetching) {
              LoadingSpinner.start();
              self.get('paginate').call(self).then((resp) => { 
                LoadingSpinner.stop();
              });
              self.set('fetching', true);
            }
          }

          lastScrollTop = scrollTop;
      });
    });
  },

  paginate() {
    var self = this,
      page = self.get('page') + 1,
      Store = self.get('store'),
      modelName = self.get('model').modelName;

    return Store.query(modelName, { page: page }).then((resp) => {
      self.get('model.content').pushObjects(resp.get('content'));
      self.set('page', page);
      self.set('fetching', false);
    });
  }
});
