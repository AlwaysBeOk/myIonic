(function(angular){
  // 1.首页模块
  var app = angular.module('home', ['ui.router'])

  // 2.配置路由规则
  app.config(function($stateProvider){
   $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
  })
  app.controller('HomeCtrl',function($scope){

    // $on,是angular时的知识点！
    // 比较合理的是，当dom插入到页面上去时，才能操作dom
    $scope.$on('$ionicView.enter',function(){
      // 这里执行时，我们的dom已经插入到页面上去了!
      new Swiper('#headerSlider',{
      autoplay:1000,
      pagination:'.swiper-pagination'
      })
    })    
  })
})(angular)