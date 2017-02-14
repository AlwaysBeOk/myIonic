(function(angular){
  // 1.创建主模块
  // ionic 是 lib/ionic/js/ionic.bundle.js 文件里创建的模块
      // 这个里提供一些自定义标签(组件)允许我们使用(ion-header-bar) (ion-content)
  var app = angular.module('xiaoming',[
    'ionic', // ionic提供的,标签(组件)
    // 如果有别的模块，继续写上
    'global',
    'guidePage',
    'ui.router',
    'tab',
    'home',
    'category.route',
    'account',
    'ngCordova'
    ])

  app.config(function($urlRouterProvider){

    // 如果所有模块的配置的路由时的state的规则都没有就，就匹配otherwise
    // 跳转
    $urlRouterProvider.otherwise('/guidePage')
  })

})(angular)