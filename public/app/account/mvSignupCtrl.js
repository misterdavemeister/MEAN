angular.module('app').controller('mvSignupCtrl', function($scope, $location, mvNotifier, mvUser, mvAuth) {

  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    mvAuth.createUser(newUserData).then(function() {
      mvNotifier.success("User account created!");
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }
})