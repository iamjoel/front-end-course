(function(gloable) {

  'use strict';


  gloable.generateStore = function(storeKey, defaultVal) {
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

})(window);
