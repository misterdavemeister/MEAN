angular.module('app').value('mvToaster', toastr);

angular.module('app').factory('mvNotifier', function(mvToaster) {
  return {
    success: function(msg) {
      mvToaster.success(msg);
      console.log(msg);
    },
    warning: function(msg) {
      mvToaster.warning(msg);
      console.log(msg);
    },
    error: function(msg) {
      mvToaster.error(msg);
      console.log(msg);
    }
  }
})
