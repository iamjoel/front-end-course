$(docment).ready(function() {
  var util = {
    generateId: function (argument) {
      return Date.now();
    },
    store: function(namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };

  var todoModel = {
    datas: [],
    create: function() {
      // body...
    },
    update: function(id, newItem) {
      // body...
    },
    remove: function(id) {
      // body...
    },
    clear: function () {
      // body...
    },
    sync: function () {
      util.store('todos',this.datas);
    }
  };

  var todoController = function() {
    // body...
  };


});
