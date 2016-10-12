$(document).ready(function() {
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
  var main = {
    $listContent: $('.list__content'),
    data: listData,
    filter: {
      name: false
    },
    sort: {
      name: false,
      type: 'default' // asce 升序，dese
    },
    itemTemplate: $('#item-template').html(),
    init: function() {
      this.search()
      this.registerEvent()
    },
    search: function() {
      var data = this.data
      if (this.filter.name) {
        var filterName = this.filter.name
        data = data.filter(function(each) {
          return each.name.indexOf(filterName) > -1
        })
      }
      if(this.sort.name && this.sort.type != 'default'){
        if(this.sort.type === 'asce') {
          data = data.sort(function (a, b) {
            return a[this.sort.name] - b[this.sort.name]
          }.bind(this))
        } else {
          data = data.sort(function (a, b) {
            return b[this.sort.name] - a[this.sort.name]
          }.bind(this))
        }
      }
      this.render(data)
    },
    render: function(data) {
      var itemTemplate = this.itemTemplate
      var html = data.map(function(each) {
        return itemTemplate
          .replace('{name}', each.name)
          .replace('{price}', each.price)
          .replace('{saleNum}', each.saleNum)
      })
      this.$listContent.html(html.join(''))
    },
    registerEvent: function() {
      $('.search__btn').click(this.search.bind(this))

      $('.filter-name-input').change(function() {
        this.filter.name = $('.filter-name-input').val()
      }.bind(this))

      var self = this
      $('.sort-price-btn,.sort-sale-num-btn').click(function() {
        var $this = $(this)
        var name = $this.hasClass('sort-price-btn') ? 'price' : 'saleNum'
        var text = $this.text()
        var type
        $('.sort-price-btn,.sort-sale-num-btn').text('默认')
        switch (text) {
          case '默认':
            type = 'desc'
            $this.text('降序')
            break
          case '降序':
            type = 'asce'
            $this.text('升序')
            break
          case '升序':
            type = 'desc'
            $this.text('降序')
            break
        }
        self.sort = {
          name: name,
          type: type
        }
        self.search()
      })
    }
  }


  main.init()
})
