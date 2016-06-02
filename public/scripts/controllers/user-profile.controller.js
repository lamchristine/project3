ProfileController.$inject = ["$location", "UserService", "$http"]; // minification protection
function ProfileController ($location, UserService, $http) {
  var vm = this;
  vm.destroy = destroy;
  vm.edit = edit;
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

  function destroy(review){
    // console.log("***review", review)
    $http ({
      method: 'DELETE',
      url: '/api/reviews/' + review._id
    }).then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response) {
      console.log("***review1", response)
      console.log("**user.review2", vm.user.reviews)

      var index= vm.user.reviews.indexOf(response.data);
      console.log("**deleted_review_id3", index)
      vm.user.reviews.splice(index,1);
    }
    function onDeleteError(response) {
      console.log("Error in deleting review", response);
    }
  }

  function edit(review){
    $http ({
      method: 'PUT',
      url: '/api/reviews/'+ review._id,
      data: review
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }


}
