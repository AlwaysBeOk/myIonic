(function(angular){
  // 1.创建引导页模块
  var app = angular.module('guidePage',['ui.router'])

  // 2.配置路由规则
  // #/guidpage
  app.config(function($stateProvider){
//  $stateProvider.state({
//    // 如果name值中没有点,那么它对应的html代码会被放到index.html中
//    // <ion-nav-view></ion-nav-view>06
//    name:'guidpage',
//    url:'/guidpage', //  #/guidpage
//    // 模板文件是相对于index.html页面的
//    templateUrl:'./modules/guidpage/guidpage.html',
//    controller:'guidpageController'
//  })
//  .state({
//    name:'home',
//    url:'/tabs',
//    templateUrl:'./modules/tabs/tabs.html'
//  })
$stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'modules/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
      })
  })

  // 3.创建控制器
  app.controller('GuidePageCtrl',function($scope,$state){
     
    // setTimeout(function(){
      
    // },2000)
      var name = 18;
      var mySwiper = new Swiper('#shisanqi', {
        autoplay: 5000,//可选选项，自动滑动
        onSlideChangeEnd:function(){
          // alert('哈哈！')
        }
      })
      $scope.goHome=function() {
         $state.go("tab.home");
        // body...
      }
       // $state.go("home");


  })
})(angular)