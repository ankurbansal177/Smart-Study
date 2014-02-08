'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {templateUrl: 'about.html', controller: 'MyCtrl1'});
  $routeProvider.when('/home', {templateUrl: 'homePage.html', controller: 'MyCtrl2'});
  $routeProvider.when('/site', {templateUrl: 'index.html', controller: 'MyCtrl2'});
  $routeProvider.when('/contact', {templateUrl: 'contact.html', controller: 'MyCtrl2'});
  $routeProvider.when('/blog', {templateUrl: 'blog.html', controller: 'MyCtrl2'});
  $routeProvider.when('/check', {templateUrl: 'check.html', controller: 'MyCtrl2'});
  $routeProvider.when('/', {templateUrl: 'homePage.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
