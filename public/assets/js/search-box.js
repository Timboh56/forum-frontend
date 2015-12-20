var App = window.App = {};
(function($, App) {

  /** App.SearchBox is a text input for searching through 
    * an array of items.
    * search_items [{ name: 'item1', ...}, { name: 'item2', ... }]
    **/

  App.SearchBox = function(params, search_items) {
    var self = this;

    if (!search_items || !params) throw "You are missing params or search_items object";

    self.selector = params.selector;
    self.search_items = params.search_items;
    self.onClickResult = params.onClickResult;
    
    self.bind = (function(self) {
      $(document).on('click', self.selector, function(el) {
        var keywords, results;

        keywords = $(self).val();
        results = search(keywords);

        displayResults(results);
      });
    })(self);


    function search(keywords) {
      var search_items, i, regexp, results;

      results = [];
      search_items = self.search_items;

      for(i = 0; i < search_items.length; i++) {
        regexp = new RegExp(keywords, "i");
        if(search_items[i].match(regexp))
          results.push(search_items[i]);
      }
      return results;
    }

    function displayResults() {

    }

    function bindResults() {

    }

    return self;
  }

  return App;
})(jQuery, App || {});