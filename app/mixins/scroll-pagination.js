import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Mixin.create(RouteMixin, {
  perPage: 25,
  page: 1,
  init() {
    var self = this,
      w = $(window);
    $(window).scroll(function() {
        let s = w.scrollTop(),
           wh = window.innerHeight,
           h = $(document).height();

       if(s + wh > h - 200) {
           //$(window).unbind('scroll');
           console.log("near bottom!");
           self.get('paginate').call(self);
       }
    });
  },

  paginate() {
    var self = this,
      page = self.get('page') + 1;

    this.store.query('question', { page: page }).then((resp) => {
      self.get('model.content').pushObjects(resp.get('content'));
      self.set('page', page);
    });
  }
});
