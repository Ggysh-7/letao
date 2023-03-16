

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/user',
    'pages/knowledge/knowledge',
    'pages/ordercoach/ordercoach',
    'pages/ordercourse/ordercourse',
    'pages/selfdefined/selfdefined',

    //内置页面
    'pages/knowledgeDetail/knowledgeDetail',
    'pages/coachDetail/coachDetail',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
  },
  tabBar:{
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
      {
        pagePath:'pages/user/user',
        iconPath:'./static/tabBar/mineout.jpg',
        selectedIconPath:'./static/tabBar/mine.png',
        text:'我的'
      }
    ]
  }
})
