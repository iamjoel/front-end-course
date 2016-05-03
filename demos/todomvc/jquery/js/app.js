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
        isComplete: false
      });
      this.sync(todos);
    },
    update: function(id, title) {
      var todos = this.query();
      var updateItem = todos.filter(function(item) {
        return item.id == id;
      })[0];
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
    removeAllCompleted: function() {
      var todos = this.query('active');
      this.sync(todos);
    },
    clear: function() {
      util.sync([]);
    },
    updateStatus: function(id, isComplete) {
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
    updateAllStatus: function(isComplete) {
      var todos = this.query();
      todos = todos.map(function(item) {
        item.isComplete = isComplete;
        return item;
      });
      this.sync(todos);
    },
    query: function(filters) {
      var todos = util.store('todos');
      if (filters === 'active') {
        todos = todos.filter(function(item) {
          return !item.isComplete;
        })
      } else if (filters === 'completed') {
        todos = todos.filter(function(item) {
          return item.isComplete;
        })
      }
      return todos;
    },
    sync: function(datas) {
      util.store('todos', datas);
    }
  };

  var todoController = {
    model: todoModel,
    template: $('#todo-template').html(),
    footTemplate: $('#foot-template').html(),
    $app: $('#todoapp'),
    $todolist: $('#todo-list'),
    $todolistInput: $('#new-todo'),
    $toggleAll: $('#toggle-all'),
    $footer: $('#footer'),
    init: function() {
      // localStorage.clear();
      this.registerEvent();
      // 客户端路由
      new Router({
        '/:filter': function(filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init('/all');
    },
    registerEvent: function() {
      var $todos = $('#todo');
      this.$todolistInput.keyup(this.create.bind(this)); // 创建
      this.$todolist
        .on('dblclick', 'label', this.edit.bind(this))
        .on('keyup', '.edit', this.editKeyup.bind(this))
        .on('focusout', '.edit', this.update.bind(this)); // 编辑
      this.$app.on('click', '.destroy', this.remove.bind(this)); // 删除
      this.$app.on('click', '.toggle', this.updateStatus.bind(this)); // 修改状态
      this.$toggleAll.click(this.updateAllStatus.bind(this)); // 修改所有状态

      this.$footer.on('click', '#clear-completed', this.removeAllCompleted.bind(this));
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
    edit: function(event) {
      var $input = $(event.target).closest('li').addClass('editing').find('.edit');
      $input.val($input.val()).focus(); // 用 $input.val($input.val()) 主要是为了让光标在输入框文字的最后，不这么做，光标在输入框开头。
    },
    editKeyup: function(event) {
      var ENTER_KEY = 13;
      if (event.which === ENTER_KEY) {
        event.target.blur();
      }
    },
    update: function(event) {
      var $input = $(event.target);
      var $item = $input.closest('li');
      var val = $.trim($input.val());
      if (!val) {
        this.remove(event);
      } else {
        this.model.update($item.data('id'), val);
      }
      this.render();

    },
    remove: function(event) {
      var $item = $(event.target).closest('li');
      this.model.remove($item.data('id'));
      this.render();
    },
    removeAllCompleted: function() {
      this.model.removeAllCompleted();
      this.render();
    },
    updateStatus: function(event) {
      var $input = $(event.target);
      var $item = $input.closest('li');
      this.model.updateStatus($item.data('id'), $input.prop('checked'));
      this.render();
    },
    updateAllStatus: function() {
      this.model.updateAllStatus(this.$toggleAll.prop('checked'));
      this.render();
    },
    render: function() {
      var todoHTML = _.template(this.template)({
        todolists: this.model.query(this.filter)
      });

      this.$todolist.html(todoHTML);
      this.renderFoot();
      this.$todolistInput.focus();
    },
    renderFoot: function function_name() {
      var todos = this.model.query();
      var activeTodos = this.model.query('active');
      var completedTodos = this.model.query('completed');
      var footHTML = _.template(this.footTemplate)({
        filter: this.filter,
        activeTodosCount: activeTodos.length,
        completedTodosCount: completedTodos.length
      });

      this.$footer.toggle(todos.length > 0).html(footHTML);
    }
  };

  todoController.init();


});
