angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses) {
  /*
   mvCachedCourses for cached version
   mvCourse for noncached version
   */
  $scope.courses = mvCachedCourses.query();

  $scope.sortOptions = [{value: "title", text: "Sort by Title"},
    {value: "published", text: "Sort by Publish Date"}];

  $scope.sortOrder = $scope.sortOptions[0].value;
});