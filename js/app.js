'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngSanitize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {templateUrl: 'about.html', controller: 'aboutCtrl'});
  $routeProvider.when('/home', {templateUrl: 'homePage.html', controller: 'homeCtrl'});
  $routeProvider.when('/site', {templateUrl: 'index.html', controller: 'MyCtrl2'});
  $routeProvider.when('/contact', {templateUrl: 'contact.html', controller: 'contactCtrl'});
  $routeProvider.when('/blog', {templateUrl: 'blog.html', controller: 'blogCtrl'});
  $routeProvider.when('/products', {templateUrl: 'products.html', controller: 'productCtrl'});
  $routeProvider.when('/', {templateUrl: 'homePage.html', controller: 'homeCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
