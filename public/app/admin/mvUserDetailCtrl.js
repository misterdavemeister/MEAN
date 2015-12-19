angular.module('app').controller('mvUserDetailCtrl', function($scope, mvCachedUsers, $routeParams, mvUser, $location, $route, $window, mvNotifier) {
  mvCachedUsers.query().$promise.then(function(collection) {
    collection.forEach(function(user) {
      if (user._id === $routeParams.id) {
        $scope.user = user;
      }
    });
  });
  $scope.deleteUser = function(id, firstName, lastName) {
     mvUser.delete({_id: id}, function() {
       $scope.users = mvCachedUsers.reload();
       $location.path("/admin/users");
       mvNotifier.success("You have successfully deleted the user '" + firstName + " " + lastName + "'!");
     });
  };
});