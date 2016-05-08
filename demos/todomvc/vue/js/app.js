;
(function(exports) {

  var filters = {
    all: function(todos) {
      return todos;
    },
    active: function(todos) {
      return todos.filter(function(todo) {
        return !todo.completed;
      });
    },
    completed: function(todos) {
      return todos.filter(function(todo) {
        return todo.completed;
      });
    }
  };

  exports.app = new Vue({
    el: '#todoapp',
    data: {
      todos: todoStorage.fetch(),
      newTodo: '',
      editingTodo: null,
      beforeEditCache: '',
      visibility: 'all'
    },
    // http://vuejs.org/guide/computed.html
    computed: {
      filteredTodos: function() {
        return filters[this.visibility](this.todos);
      },
      // 未完成的 item 数量
      activeItemNum: function() {
        return filters.active(this.todos).length;
      },
      completedItemNum: function() {
        return filters.completed(this.todos).length;
      },
      allStatus: {
        get: function() {
          return this.activeItemNum === 0;
        },
        set: function(isCompleted) {
          this.todos.forEach(function(todo) {
            todo.completed = isCompleted;
          });
        }
      }
    },
    methods: {
      create: function() {
        var title = this.newTodo.trim();
        if (title) {
          this.todos.push({
            title: title,
            completed: false
          })
        }
        this.newTodo = '';
      },
      edit: function(todo) {
        this.beforeEditCache = todo.title;
        this.editingTodo = todo;
      },
      cancelEdit: function(todo) {
        this.editingTodo = null;
        todo.title = this.beforeEditCache;
      },
      update: function(todo) {
        if (!this.editingTodo) {
          return;
        }
        this.editingTodo = null;
        todo.title = todo.title.trim();
        if (!todo.title) {
          this.remove(todo);
        }
      },
      remove: function(todo) {
        this.todos.$remove(todo);
      },
      removeAllCompleted: function() {
        this.todos = filters.active(this.todos);
      }
    },
    // 每当 todos 变化时，保存todos
    watch: {
      todos: {
        deep: true,
        handler: todoStorage.save
      }
    },
    // 自定义指令 http://vuejs.org/guide/custom-directive.html
    directives: {
      // DOM 更新后再 focus
      'todo-focus': function(isEditingTodo) {
        if (!isEditingTodo) {
          return;
        }
        var el = this.el;
        Vue.nextTick(function() {
          el.focus();
        });
      }
    }
  })
})(window);
