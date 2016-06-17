var settings = {
  menu: [{
    name: '音乐',
    path: '/music',
    sub: [{
      name: '歌曲',
      path: '/songs'
    },{
      name: '歌手',
      path: '/people'
    }]
  }, {
    name: '电影',
    path: '/film',
    sub: [{
      name: '电影',
      path: '/film'
    },{
      name: '演员',
      path: '/people'
    }]
  }]
};

module.exports = settings;
