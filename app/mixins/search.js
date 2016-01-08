import Ember from 'ember';

export default Ember.Mixin.create({
  setupSearch: function(controllerName, resultsName) {
    this.set('resultsName', resultsName);
    if(typeof controllerName === 'string')
      this.controllerFor(controllerName).set('search', this.get('actions.search'));
    if(controllerName instanceof Array) {
      for (var i = 0; i < controllerName.length; i++) {
        this.controllerFor(controllerName[i]).set('search', this.get('actions.search'));
      }
    }
  },

  actions: {
    search: function(keyword, resource_name, store) {
      console.log(keyword);
      var results_name = this.get('resultsName');

      var resources = this.store.query(resource_name, { keywords: keyword }).then((resp) => {
        
        //this.set(results_name, resp);
      });

      return resources;
    }
  }
});
