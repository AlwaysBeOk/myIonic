(function(angualr){
  
  // 1.创建tabs选项卡模块
  var app = angular.module('tab', ['ui.router'])

  // 2. 配置路由规则
  app.config(function($stateProvider){
    // ngRoute $routeProvider.when('/xx',{template:,controller})
//  $stateProvider.state({
//    // 我们希望tabs对应的模板能和home对应的模板同时显示
//    // 我们就让它们的name有个关联, home的name以tabs. 开头
//    name:'tabs',
//    url:'/tabs',
//    // 当这个属性为true时 #/tabs 不能单独访问了，目的是为了防止页面
//    // 只显示一个tabs选项，没有其他东西！
//    abstract:true,
//    templateUrl:'./modules/tabs/tabs.html',
//    controller:'tabsController'
//  })
			$stateProvider
			      .state('tab', {
			        url: '/tab',
			        abstract: true,
			        templateUrl: 'modules/tab/tab.html',
			        controller:'TabCtrl'
			      })
  })


  // 3.创建控制器
  app.controller('TabCtrl',function($scope){
    // 在这个控制器中，所有的$scope的属性，
    // 都可以在对应的模板(templateUrl:'./modules/tabs/tabs.html)中使用
  // 哈哈
  //  $scope.msg = '我是中国人，我爱自己的祖国!'
  })
})(angular)