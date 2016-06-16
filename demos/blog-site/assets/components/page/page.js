; (function (gloabal, $) {
  var defaultParams = {
    limit: 3,
    render: $.noop,
    onChangeFn: $.noop,
    ctx: null
  };
  function Pager(params){
    $.extend(this, defaultParams, params);

    this.pageAt = 1;// 第一页
  }

  Pager.prototype = {
    setPageAt: function (pageAt) {
      this.pageAt = pageAt;
    },
    // 总条数
    setTotalNum: function (totalNum) {
      if(totalNum % this.limit === 0){
        this.pageTotalNum = totalNum / this.limit;
      } else {
        this.pageTotalNum = Math.floor(totalNum / this.limit) + 1;
      }
    },
    nextPage: function () {
      this.pageAt++;
    },
    prevPage: function () {
      this.pageAt--;
    },
    refresh: function(){
      this.render.call(this.ctx, {
        pageAt: this.pageAt,
        pageTotalNum: this.pageTotalNum,
        prevDisabled: this.pageAt === 1,
        nextDisabled: this.pageAt === this.pageTotalNum
      });
    }
  }

  gloabal.Pager = Pager;
  // body...
})(window, jQuery);