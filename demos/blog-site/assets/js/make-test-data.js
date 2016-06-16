;
(function () {
  var bloglistData = [{
    authorId: 1,
    author: '李苏特',
    time: '2016/6/25',
    name: '无限加载的实现',
    id: 1,
    content: 'aaa \n fdffd'
  },{
    author: '徐湖态',
    time: '2016/6/26',
    name: '41岁的男人还在追逐梦想',
    id: 2
  },{
    author: '呵呵呵',
    time: '2016/3/20',
    name: '我的创业之路'
  },
  {
    author: '李苏特',
    time: '2016/6/25',
    name: '2无限加载的实现'
  },{
    author: '徐湖态',
    time: '2016/6/26',
    name: '241岁的男人还在追逐梦想'
  },{
    author: '呵呵呵',
    time: '2016/3/20',
    name: '2我的创业之路'
  },
  {
    author: '李苏特',
    time: '2016/6/25',
    name: '3无限加载的实现'
  },{
    author: '徐湖态',
    time: '2016/6/26',
    name: '341岁的男人还在追逐梦想'
  },{
    author: '呵呵呵',
    time: '2016/3/20',
    name: '3我的创业之路'
  }];


  var blogDetails = [{
    id: 1,
    author: '李苏特',
    time: '2016/6/25',
    name: '无限加载的实现',
    detail: 'aaa'
  }, ]


  localStorage.clear();
  localStorage.setItem('bloglist', JSON.stringify(bloglistData));
})();