'use strict';
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if (success) {
        mvNotifier.success('You have successfully logged in!');
      } else {
        mvNotifier.error('Username/Password combination is invalid!');
      }
    });
  };
  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.success("You have successfully logged out.");
      $location.path('/');
    });
  }
});
