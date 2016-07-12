(function() {
  var btnElem = document.querySelector('#test-btn');
  btnElem.addEventListener('click', function() {
    var now = new Date();
    var year = now.getFullYear();
    var month = padZero(now.getMonth() + 1);
    var day = padZero(now.getDate());
    var hour = padZero(now.getHours());
    var minute = padZero(now.getMinutes());
    var second = padZero(now.getSeconds());
    var nowStr = [year, month, day].join('/') + ' ' + [hour, minute, second].join(':');
    alert(nowStr);
  });

  function padZero(num) {
    return num < 10 ? '0' + num : num;
  }
})();
