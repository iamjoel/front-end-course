!(function (gloable, $) {
  var defaultParams = {
    sortConditon: {},
    filterCondition: {},
    render: $.noop,
    fetchRenderData: $.noop,
    ctx: null
  };
  var DataList = function (params) {
    $.extend(this, defaultParams, params);
  };

  DataList.prototype = {
    setSortCondition: function (condition, isRefresh) {
      this.sortConditon = condition;
      isRefresh && this.refresh();
    },
    setFilterCondition: function (condition, isRefresh) {
      this.filterCondition = condition;
      isRefresh && this.refresh();
    },
    refresh: function () {
      var data = this.fetchRenderData.call(this.ctx, this.sortConditon, this.filterCondition);
      this.render.call(this.ctx, data);
    }
  }

  window.DataList = DataList;
})(window, jQuery);