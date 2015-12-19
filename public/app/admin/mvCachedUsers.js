angular.module('app').factory('mvCachedUsers', function(mvUser) {
  var userList;

  return {
    query: function() {
      if (!userList) {
        userList = mvUser.query();
      }
      return userList;
    },
    reload: function() {
      userList = mvUser.query();
      return userList;
    }
  }
});