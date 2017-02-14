(function(){
  // 1.创建个人中心模块
  var app = angular.module('account', ['ui.router'])

  // 2.配置路由规则
  app.config(function($stateProvider){
    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'modules/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      })
  })

  app.controller('AccountCtrl',function($scope, $cordovaCamera){
    
    $scope.open  = function(){
      var options = {
      quality: 50, // 质量

      // 得到base64编码的图片
      destinationType: Camera.DestinationType.DATA_URL,

      // 打开相册
      sourceType: Camera.PictureSourceType.CAMERA,
      //Camera.PictureSourceTypePHOTOLIBRARY, 打开相册

      allowEdit: true, // 是否允许编辑
      encodingType: Camera.EncodingType.JPEG, // 图片格式
      targetWidth: 100, // 宽度
      targetHeight: 100, // 高度
      popoverOptions: CameraPopoverOptions,// ios里用的
      saveToPhotoAlbum: false, // 是否保存到相册
      correctOrientation:true  // 是否保持正常方向。
    }
    $cordovaCamera.getPicture(options).then(
      function(imageData) {
      // 成功的回调!
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
    } 
  })

})()