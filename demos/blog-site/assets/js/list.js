(function($, generateStore, DataList) {
  $(document).ready(function() {
    var list = {
      init: function() {
        this.store = generateStore('bloglist');
        this.datalist = new DataList({
          render: this.render,
          fetchRenderData: this.fetchRenderData
        });

      },
      registerEvent: function() {
        $('.js-search-btn').click(this.search.bind(this));
      },
      $el: $('.blog-list'),
      itemTemplate: $('.blog-item-template').html(),
      render: function(data) {
        var html = data.map(function() {
          return itemTemplate; // todo
        }).join('');
        list.$el.html(html);
      },
      search: function() {
        var datalist = this.datalist;
        datalist.setSortCondition(this.getSortCondition);
        datalist.setFilterCondition(this.getFilterConditon);
        dataList.refresh();
      }
      getSortCondition: function() {
        // body...
      },
      getFilterConditon: function() {
        // body...
      },
      fetchRenderData: function(sortConditon, filterCondition) {
        var allData = this.store.get();
        var filteredData = dataHelper.filterData(allData, filterCondition);
        var sortedData = dataHelper.sortData(filteredData, sortConditon);
        return sortData;
      }
    };

    var dataHelper = {
      // condition: {key: ,value: 'desc'|| 'aesc'}
      sortData: function(data, conditon) {
        if (!$.isArray(data)) {
          throw 'data should be array';
        }
        if (!conditon || !conditon.key) {
          return data;
        }

        var cloneData = this.cloneArray(data);
        if (conditon.value === 'desc') {
          cloneData.sort(function(a, b) {
            return a[conditon.key] > b[conditon.key];
          });
        } else {
          cloneData.sort(function(a, b) {
            return a[conditon.key] > b[conditon.key];
          });
        }
        return cloneData;

      },
      filterData: function(data, conditon) {
        if (!$.isArray(data)) {
          throw 'data should be array';
        }

        if (typeof conditon !== 'object') {
          return data;
        }

        if (!$.isArray(conditon)) {
          conditon = [conditon];
        }

        var res = this.cloneArray(data);
        conditon.forEach(function(eachCondition) {
          res = res.filter(function(item) {
            return item[eachCondition.key] == eachCondition.value;
          });
        });
        return res;
      },
      cloneArray: function(array) {
        array.map(function(item) {
          return item;
        });
      }
    };

    list.init();
  });
})(jQuery, generateStore, DataList);
