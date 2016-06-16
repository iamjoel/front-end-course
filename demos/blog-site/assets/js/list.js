(function($, blogListStore, pager) {
  // 宽度小于 768 认为是移动设备
  var isMobile = document.documentElement.getBoundingClientRect().width < 768;
  $(document).ready(function() {
    var list = {
      init: function() {
        this.store = blogListStore;
        // 是移动设备的话，不显示分页
        if (!isMobile) {
          this.pager = new Pager({
            limit: this.PAGE_LIMIT,
            render: this.renderPage,
            ctx: this
          });
        }

        this.registerEvent();
        this.search();

      },
      PAGE_LIMIT: 3,
      registerEvent: function() {
        $('.js-search-btn').click(function() {
          this.pager && this.pager.setPageAt(1);
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
          this.pager && this.pager.setPageAt(1);
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
        if (this.pager) {
          // 分页
          this.pager.setTotalNum(data.totalNum);
          this.pager.refresh();
        }


        if (data.totalNum > 0) {
          var itemTemplate = this.itemTemplate;
          var html = data.listData.map(function(item) {
            return itemTemplate
              .replace('{author}', item.author)
              .replace('{time}', item.time)
              .replace('{name}', item.name);
          }).join('');
        } else {
          html = '没有数据可以展示';
        }

        list.$listWrap.html(html);

      },
      search: function() {
        var renderData = this.getRenderData();
        this.render(renderData);
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
      getRenderData: function() {
        var allData = this.store.get();
        var filterCondition = this.getFilterConditon();
        var filteredData = allData;
        filterCondition.forEach(function(eachCondition) {
          filteredData = filteredData.filter(function(item) {
            return item[eachCondition.key].indexOf(eachCondition.value) > -1;
          });
        });

        if (filteredData.length === 0) {
          return {
            totalNum: 0,
            listData: []
          };
        }

        var totalNum = filteredData.length;
        var sortConditon = this.getSortCondition();
        var sortedData = filteredData;
        if (sortConditon) {
          if (sortConditon.value === 'desc') {
            sortedData.sort(function(a, b) {
              return new Date(a[sortConditon.key]).getTime() > new Date(b[sortConditon.key]).getTime();
            });
          } else {
            sortedData.sort(function(a, b) {
              return new Date(a[sortConditon.key]).getTime() < new Date(b[sortConditon.key]).getTime();
            });
          }
        }


        var listData = sortedData;
        if (this.pager) {
          var startIndex = (this.pager.pageAt - 1) * this.PAGE_LIMIT;
          listData = listData.slice(startIndex, startIndex + this.PAGE_LIMIT);
        }

        return {
          totalNum: totalNum,
          listData: listData
        };
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



    list.init();
  });
})(jQuery, blogListStore, Pager);
