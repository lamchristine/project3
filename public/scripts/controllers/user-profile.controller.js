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
      //converting user joined date to mm/dd/yy
      var created = new Date(response.data.created);
      response.data.created = (created.getMonth() + 1) + '/' + created.getDate() + '/' +  created.getFullYear();

      //converting time to time ago
      response.data.reviews.forEach(function(review, i){
        var date = new Date(review.created);
        response.data.reviews[i].created = timeSince(date);
      })
      //function for converting time
      function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }
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

      review_arr = vm.user.reviews
      var index;
      function findInd(){
        for(var i = 0; i < review_arr.length; i++){
          if(review_arr[i]._id === response.data._id){
             return index = i;
          }
        }
      }
      console.log("**deleted_review_id3", index)
      vm.user.reviews.splice(index,1);

      findInd();

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
