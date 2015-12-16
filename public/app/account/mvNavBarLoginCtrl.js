'use strict';
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.signInFormToggle = false;
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    if (!$scope.signInFormToggle) {
      $scope.toggleSignInForm();
      return;
    }
    mvAuth.authenticateUser(username, password).then(function(success) {
      if (success) {
        mvNotifier.success('You have successfully logged in!');
      } else {
        mvNotifier.error('Username/Password combination is invalid!');
      }
    });
  };
  $scope.signout = function() {
    $scope.toggleSignInForm();
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.success("You have successfully logged out.");
      $location.path('/');
    });
  };
  $scope.toggleSignInForm = function() {
    $scope.signInFormToggle = !$scope.signInFormToggle
  };
});
