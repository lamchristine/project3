ProfileController.$inject = ["$location", "UserService", "$http"]; // minification protection
function ProfileController ($location, UserService, $http) {
  var vm = this;
  vm.new_profile = {}; // form data

  vm.updateProfile = function() {
    UserService
      .updateProfile(vm.new_profile)
      .then(function onSuccess() {
        vm.showEditForm = false;
      });
  };

  get();

  function get(){
    // console.log("**UserService*", UserService.user.user_id);
    $http
      .get('/api/users/' + UserService.user.user_id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.user = response.data;
    }

    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }


}
