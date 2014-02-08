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
        $scope.venture = 'Smart Study';

  }])
  .controller('homeCtrl', ['$scope',function($scope) {
        $scope.motivationMessage = 'We are studying by the conventional ways since ages. What if we tell you that study can be fun. What if we' +
            'make your parents ';

  }])
  .controller('aboutCtrl', ['$scope',function($scope) {
        $scope.aboutMessage = 'We are';
        $scope.ceo = {name: 'Saurabh Singla',
                      imageLink:'',
                      title:'CEO'};
        $scope.cto = {name: 'Ankit Parekh',
                      imageLink:'',
                      title:'CTO'};
        $scope.coo = {name: 'Paresh Goel',
                      imageLink:'',
                      title:'COO'};

  }])
  .controller('blogCtrl', ['$scope',function($scope) {
        $scope.aboutMessage = 'We are';

  }])
  .controller('contactCtrl', ['$scope',function($scope) {
        $scope.address = 'Sector-21, Chandigarh'
        $scope.phone = '+91-98186-98736';
        $scope.email = 'angulartechnologies@gmail.com'

  }]);