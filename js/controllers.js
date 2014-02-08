'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('SuperCtrl', ['$scope',function($scope) {
        $scope.title = 'hello there';
        $scope.companyName = 'Angular Technologies Pvt. Ltd. 2013';
  }]);