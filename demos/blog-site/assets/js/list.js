(function($, generateStore, DataList) {
  $(document).ready(function() {
    var list = {
      init: function() {
        this.store = generateStore('bloglist');
        this.datalist = new DataList({
          render: this.render,
          fetchRenderData: this.fetchRenderData,
          ctx: this
        });
        this.pager = new Pager({
          limit: this.PAGE_LIMIT,
          render: this.renderPage,
          ctx: this
        });
        this.registerEvent();
        this.search();

      },
      PAGE_LIMIT: 3,
      registerEvent: function() {
        $('.js-search-btn').click(function() {
          this.pager.setPageAt(1);
          this.search();
        }.bind(this));

        var $sortTimeBtn = $('.js-sort-time-btn');
        $sortTimeBtn.click(function() {
          var sortType = $sortTimeBtn.attr('data-type');
          this.sortConditon = {
            key: 'time',
            value: sortType
          }
          $sortTimeBtn.attr('data-type', sortType === 'desc' ? 'aese' : 'desc');
          $sortTimeBtn.text(sortType === 'desc' ? '按时间（降序）' : '按时间（升序）');
          this.pager.setPageAt(1);
          this.search();
        }.bind(this));

        $('.pager').on('click', '.pager__btn-item:not(.pager__btn--disabled)', function() {
          list.pager.setPageAt(parseInt($(this).text()));
          list.search();
        });
        $('.pager').on('click', '.pager__btn-prev:not(.pager__btn--disabled)', function() {
          list.pager.prevPage();
          list.search();
        });
        $('.pager').on('click', '.pager__btn-next:not(.pager__btn--disabled)', function() {
          list.pager.nextPage();
          list.search();
        });
      },
      $el: $('.blog-list'),
      $listWrap: $('.blog-list__list'),
      itemTemplate: $('.blog-item-template').html(),
      render: function(data) {
        // 分页
        this.pager.setTotalNum(data.length);
        this.pager.refresh();

        var startIndex = (this.pager.pageAt - 1) * this.PAGE_LIMIT;
        var renderData = data.slice(startIndex, startIndex + this.PAGE_LIMIT);
        // debugger;
        var itemTemplate = this.itemTemplate;
        var html = renderData.map(function(item) {
          return itemTemplate
            .replace('{author}', item.author)
            .replace('{time}', item.time)
            .replace('{name}', item.name);
        }).join('');
        list.$listWrap.html(html);

      },
      search: function() {
        var datalist = this.datalist;
        datalist.setSortCondition(this.getSortCondition());
        datalist.setFilterCondition(this.getFilterConditon());
        datalist.refresh();
      },
      getSortCondition: function() {
        return this.sortConditon;
      },
      getFilterConditon: function() {
        var conditon = [];
        var name = $.trim($('.js-search-name').val());
        if (name !== '') {
          conditon.push({
            key: 'name',
            value: name
          });
        }
        return conditon;
      },
      fetchRenderData: function(sortConditon, filterCondition) {
        var allData = this.store.get();
        var filteredData = dataHelper.filterData(allData, filterCondition);
        var sortedData = dataHelper.sortData(filteredData, sortConditon);
        return sortedData;
      },
      $pager: $('.pager'),
      renderPage: function(info) {
        if (info.pageTotalNum === 0) {
          this.$pager.html('');
          return;
        }
        var html = [];
        var $prev = $('<a href="javascript:void(0);" class="pager__btn-prev">上一页</a>');
        if (info.prevDisabled) {
          $prev.addClass("pager__btn--disabled");
        }
        html.push($prev.prop('outerHTML'));
        for (var i = 1; i <= info.pageTotalNum; i++) {
          html.push(
            '<a href="javascript:void(0);" class="pager__btn-item {curr}">{pageNum}</a>'
            .replace('{pageNum}', i)
            .replace('{curr}', i == info.pageAt ? 'pager__btn--disabled' : '')
          )
        }

        var $next = $('<a href="javascript:void(0);" class="pager__btn-next">下一页</a>');
        if (info.nextDisabled) {
          $next.addClass("pager__btn--disabled");
        }
        html.push($next.prop('outerHTML'));
        this.$pager.html(html.join(''));
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
        // 目前时间搜索
        if (conditon.value === 'desc') {
          cloneData.sort(function(a, b) {
            return new Date(a[conditon.key]).getTime() > new Date(b[conditon.key]).getTime();
          });
        } else {
          cloneData.sort(function(a, b) {
            return new Date(a[conditon.key]).getTime() < new Date(b[conditon.key]).getTime();
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
            return item[eachCondition.key].indexOf(eachCondition.value) > -1;
          });
        });
        return res;
      },
      cloneArray: function(array) {
        return array.map(function(item) {
          return item;
        });
      }
    };

    list.init();
  });
})(jQuery, generateStore, DataList, Pager);
