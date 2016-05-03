$(document).ready(function() {


  var util = {
    generateId: function() {
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
    create: function(title) {
      var todos = this.query();
      todos.push({
        id: util.generateId(),
        title: title,
        isCompleted: false
      });
      this.sync(todos);
    },
    update: function(id, title) {
      var todos = this.query();
      var updateItem = todos.filter(function(item) {
        return item.id == id;
      });
      if (updateItem) {
        updateItem.title = title;
        this.sync(todos);
      } else {
        throw 'item not find';
      }
    },
    remove: function(id) {
      var todos = this.query();
      todos = todos.filter(function(item) {
        return item.id != id;
      });
      this.sync(todos);
    },
    clear: function() {
      util.sync([]);
    },
    updateStatus: function (id, isComplete) {
      var todos = this.query();
      var updateItem = todos.filter(function(item) {
        return item.id == id;
      })[0];
      if (updateItem) {
        updateItem.isComplete = isComplete;
        this.sync(todos);
      } else {
        throw 'item not find';
      }
    },
    updateAllStatus: function (isComplete) {
      var todos = this.query();
      todos = todos.map(function (item) {
        item.isComplete = isComplete;
        return item;
      });
      this.sync(todos);
    },
    query: function(filters) {
      var todos = util.store('todos');
      return todos;
    },
    sync: function(datas) {
      util.store('todos', datas);
    }
  };

  var todoController = {
    model: todoModel,
    template: $('#todo-template').html(),
    $app: $('#todoapp'),
    $todolist: $('#todo-list'),
    $todolistInput: $('#new-todo'),
    $toggleAll: $('#toggle-all'),
    init: function() {
      localStorage.clear();
      this.registerEvent();
      // this.render();
    },
    registerEvent: function() {
      var $todos = $('#todo');
      this.$todolistInput.keyup(this.create.bind(this));
      this.$app.on('click', '.destroy', this.remove.bind(this));
      this.$app.on('click', '.toggle', this.updateStatus.bind(this));
      this.$toggleAll.click(this.updateAllStatus.bind(this));
    },
    create: function(event) {
      var ENTER_KEY = 13;
      if (event.which === ENTER_KEY) {
        var val = this.$todolistInput.val().trim();
        this.model.create(val);
        this.render();
        this.$todolistInput.val('');
      }
    },
    remove: function (event) {
      var $item = $(event.currentTarget).closest('li');
      this.model.remove($item.data('id'));
      this.render();
    },
    updateStatus: function (event) {
      var $input = $(event.currentTarget);
      var $item = $input.closest('li');
      this.model.updateStatus($item.data('id'), $input.prop('checked'));
      this.render();
    },
    updateAllStatus: function () {
      this.model.updateAllStatus(this.$toggleAll.prop('checked'));
      this.render();
    },
    render: function() {
      var todoHTML = _.template(this.template)({
        todolists: this.model.query()
      });

      this.$todolist.html(todoHTML);
    }
  };

  todoController.init();


});
