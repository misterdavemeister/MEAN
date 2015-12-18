angular.module('app').controller('mvUserDetailCtrl', function($scope, mvCachedUsers, $routeParams) {
  mvCachedUsers.query().$promise.then(function(collection) {
    collection.forEach(function(user) {
      if (user._id === $routeParams.id) {
        $scope.user = user;
      }
    });
  });
});