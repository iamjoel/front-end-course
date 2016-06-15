!(function (gloable, $) {
  var defaultParams = {
    sortConditon: {},
    filterCondition: {},
    render: $.noop,
    fetchRenderData: $.noop
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
      var data = this.fetchRenderData(this.sortConditon, this.filterCondition);
      this.render(data);
    }
  }

  window.DataList = DataList;
})(window, jQuery);