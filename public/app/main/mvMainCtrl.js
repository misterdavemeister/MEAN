angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCourses) {
  /*
  mvCachedCourses for cached version
  mvCourse for noncached version
   */
  $scope.courses = mvCachedCourses.query();
});
