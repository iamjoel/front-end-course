{
  var listData = [{
    name: '苹果',
    price: 18,
    saleNum: 20
  }, {
    name: '梨',
    price: 16,
    saleNum: 40
  }, {
    name: '香蕉',
    price: 14,
    saleNum: 30
  }, {
    name: '荔枝',
    price: 58,
    saleNum: 5
  }]
  new Vue({
    el: '.list',
    data: {
      list: cloneArray(listData),
      filterObj: {
        name: ''
      },
      sortObj: {
        name: false,
        type: 'default'
      }
    },
    methods: {
      search: function() {
        this.list = cloneArray(listData)
        var filterName = this.filterObj.name
        if (filterName) {
          this.list = this.list.filter(function(each) {
            return each.name.indexOf(filterName) > -1
          })
        }
        if (this.sortObj.name && this.sortObj.type !== 'default') {
          if (this.sortObj.type === 'asce') {
            this.list.sort(function(a, b) {
              return a[this.sortObj.name] - b[this.sortObj.name]
            }.bind(this))
          } else {
            this.list.sort(function(a, b) {
              return b[this.sortObj.name] - a[this.sortObj.name]
            }.bind(this))
          }
        }
      },
      getSortName: function(sortName) {
        if (this.sortObj.name === sortName) {
          return {
            'desc': '降序',
            'asce': '升序'
          }[this.sortObj.type]
        } else {
          return '默认'
        }
      },
      sort: function(sortName) {
        this.sortObj.name = sortName
        if (this.sortObj.type === 'default' || this.sortObj.type === 'asce') {
          this.sortObj.type = 'desc'
        } else {
          this.sortObj.type = 'asce'
        }
        this.search()
      }
    }
  })

  function cloneArray(arr) {
    return arr.map(function(each) {
      return each
    })
  }
}
