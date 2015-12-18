angular.module('app').controller('mvUserListCtrl', function($scope, mvCachedUsers) {
   $scope.users = mvCachedUsers.query();
});
