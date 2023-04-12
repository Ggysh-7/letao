

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/friendgroup/friendgroup',
    'pages/letaostore/letaostore',
    'pages/user/user',
    'pages/knowledge/knowledge',
    'pages/ordercoach/ordercoach',
    'pages/ordercourse/ordercourse',
    'pages/selfdefined/selfdefined',

    //内置页面
    'pages/knowledgedetail/knowledgedetail',
    'pages/coachdetail/coachdetail',
    'pages/aboutus/aboutus',
    'pages/allorder/allorder',

  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
  },
  tabBar:{
    // custom: true,
    backgroundColor:'#fff',
    color:'#000000',
    selectedColor:'#3399FF',
    position:'bottom',
    list:[
      {
        pagePath:'pages/index/index',
        iconPath:'./static/tabBar/homeout.jpg',
        selectedIconPath:'./static/tabBar/home.png',
        text:'首页'
      },
      // {
      //   pagePath:'pages/friendgroup/friendgroup',
      //   iconPath:'./static/tabBar/movementout.jpg',
      //   selectedIconPath:'./static/tabBar/movement.png',
      //   text:'运动圈'
      // },
      {
        pagePath:'pages/letaostore/letaostore',
        iconPath:'./static/tabBar/shopout.jpg',
        selectedIconPath:'./static/tabBar/shop.png',
        text:'商城'
      },
      {
        pagePath:'pages/user/user',
        iconPath:'./static/tabBar/mineout.jpg',
        selectedIconPath:'./static/tabBar/mine.png',
        text:'我的'
      }
    ]
  }
})
