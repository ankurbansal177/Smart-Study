'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('SuperCtrl', ['$scope',function($scope) {
        $scope.title = 'Study Smart';
        $scope.companyName = 'Angular Technologies Pvt. Ltd. 2013';
        $scope.venture = 'Smart Study';

  }])
  .controller('homeCtrl', ['$scope',function($scope) {
        $scope.motivationMessage1 = '<p>We are studying by the conventional ways since ages. What if we tell you that study can be fun. What if we' +
            ' make your parents buy you a SMART PHONE or a cool TABLET (You can get NOTE 10, if you lie about the compatibility of our applications). Just tell them about our products.</p> '+
            '<p>We have created some very useful apps to prepare for JEE. You can get the links of all our products here. You don\'t'+
        'have to pay anything. Just click the ads there once in a while so that we can eat pav bhaji every weekend</p>';
        $scope.next = {};
        $scope.next.title =  "Future Endeavours"
        $scope.next.summary=  "<p>We have developed the android apps for JEE and now we are working on helping people to prepare for Medical Exams.</p>" +
            "<p>After Engineering you are anyways going to do MBA, you will find our apps for CAT preparations by then. MBA is no shit, Don\'t listen to Amir khan" +
            " from 3 Idiots, he doesn\'t know anything about Studies. Keep studying your entire life and use only our applications. </p>"


  }])
  .controller('aboutCtrl', ['$scope',function($scope) {
        $scope.aboutMessage = '<p>We are a startup with a scale of 5-10 employees Our motive is to improve the study standards of the students in India</p>' +
            '<p>We are capable of delivering software solutions in many fields which includes Web applications, Mobile Applications etc.' +
            'You can come up with an abstract idea and we have a team which is capable of converting your idea into a product </p>';
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

  }])
  .controller('productCtrl', ['$scope',function($scope) {
        $scope.productList =
        [
        {name: "JEE Physics",
         img_link: "img/slide-2.jpg",
        desc:"<p>Get prepared for the physics with a rich question bank and sample papers which contains the questions with latest patterns.</p>"+
        "<p>You will get all the important formulas and concepts in one place in our learn section. You can schedule your tasks and set some targets.</p>"},
        {name: "JEE Maths",
         img_link: "img/slide-2.jpg",
        desc:"<p>Get prepared for the maths with a rich question bank and sample papers which contains the questions with latest patterns.</p>"+
            "<p>You will get all the important formulas and concepts in one place in our learn section. You can schedule your tasks and set some targets.</p>"},
        {name: "JEE Chemistry",
         img_link: "img/slide-2.jpg",
        desc:"<p>Get prepared for the chemistry with a rich question bank and sample papers which contains the questions with latest patterns.</p>"+
            "<p>You will get all the important formulas and concepts in one place in our learn section. You can schedule your tasks and set some targets.</p>"}
        ];

  }]);
