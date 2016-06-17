;(function ($) {
  $(document).ready(function () {
    $('.js-content-input').keyup(function () {
      var content = $('.js-content-input').val();
      console.info(content);
      // $('#pre').html(content);
      $('#markdown-preview').html(parseMarkdown(content));
    });


    var testContent =
    '# 标题 \n'+
    '## 优化方向 \n'+
     '* 页面加载速度 \n'+
     '* 代码运行速度 \n' +
     '**[tit](http://www.baidu.com)**';


    $('.js-content-input').val(testContent);
    $('#markdown-preview').html(parseMarkdown($('.js-content-input').val()));

    // 复杂版 https://github.com/chjj/marked/blob/master/lib/marked.js
    function parseMarkdown(str) {
      var res = str;
      var regs = {
        h1: /# (.*)/g,
        h2: /## (.*)/g,
        ul: /((\* (.*))+)/g,
        li: /\* (.*)\n/g,
        a: /\[(.*)\]\((.*)\)/g,
        strong: /\*\*(.*)\*\*/g
      };
      res = res.replace(regs.h2, '<h2>$1</h2>')
              .replace(regs.h1, '<h1>$1</h1>')
              .replace(regs.ul, '<ul>$1</ul>')
              .replace(regs.li, '<li>$1</li>')
              .replace(regs.a, '<a href="$2">$1</a>')
              .replace(regs.strong, '<strong>$1</strong>')
              ;
      return res;
    }
  });
})(jQuery);