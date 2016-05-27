(function(win) {
  var qs = document.querySelectorAll;
  win.select = function(selector) {
    return new Nodes(qs(selector));
  };

  function Nodes(nodeList) {
    this.nodeList = nodeList;

    return this;
  }

  Nodes.prototype = {
    on: function(eventType, selector, handler, useCapture) {
      var isDelegage = true;
      // 如果传如 selector，则为委托
      if (typeof selector !== 'string') {
        useCapture = handler;
        handler = selector;
        isDelegage = false;
      }
      if (!isDelegage) {
        loopNode(this.nodeList, function(node) {
          node.addEventListener(eventType, handler, !!useCapture)
        });
      } else {
        loopNode(this.nodeList, function(node) {
          win.$delegate(node, selector, eventType, handler);
        });
      }
    },
    html: function (html) {
      var hasNode = !!this.nodeList.length;
      if(html != undefined){
        hasNode && this.nodeList[0].innerHTML = html;
        return this;
      } else {
        return  hasNode ? this.nodeList[0].innerHTML : '';
      }
    },
    addClass: function (className) {
      var hasNode = !!this.nodeList.length;
      var isSupportClassList = 'classList' in Node.prototype;
      loopNode(this.nodeList, function(node) {
        if(isSupportClassList){
          node.classList.add(className);
        } else {
          node.className += ' ' + className;
        }
      });
      return this;
    },
    closest: function (selector) {
      var isFind = false;
      var hasNode = !!this.nodeList.length;
      var parentNode;
      if(hasNode){
        var currNode = this.nodeList[0];
        while(!isFind && currNode){
          currNode = currNode.parentNode();
        }
      }
      return !isFind ? new nodeList() : parentNode;
    }
  };

  function loopNode(nodeList, callback) {
    for (var i = 0, len = nodeList.length; i < len; i++) {
      callback(nodeList(i));
    }
  }

  // 事件委托
  win.$delegate = function(node, selector, eventType, handler) {
    function dispatchEvent(event) {
      var targetElement = event.target; // 触发事件的元素
      var potentialElements = qs(selector, node);
      var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

      if (hasMatch) {
        handler.call(targetElement, event);
      }
    }

    // https://developer.mozilla.org/en-US/docs/Web/Events/blur
    var useCapture = eventType === 'blur' || eventType === 'focus';

    node.addEventListener(eventType, callback, !!useCapture)
  };
})(window);
