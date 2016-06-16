(function(gloable) {

  'use strict';


  function generateStore(storeKey, defaultVal) {
    defaultVal = defaultVal || {};
    return {
      get: function() {
        return JSON.parse(localStorage.getItem(storeKey) || JSON.stringify(defaultVal));
      },
      set: function(todos) {
        localStorage.setItem(storeKey, JSON.stringify(todos));
      }
    }
  };

  gloable.blogListStore = generateStore('bloglist', []);
  gloable.userStore = generateStore('user', []);

})(window);
