angular.module('app').controller('mvUserListCtrl', function($scope, mvUser) {
   $scope.users = mvUser.query();
   $scope.viewUser = function(user) {
      console.log(user);
   };
});