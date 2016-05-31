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

      //grabbing the review stars

      // var review_arr = response.data.reviews;
      // console.log(review_arr);

      // for (var i in review_arr) {
      //   if (review_arr[i].rating === 5) {
      //     $('#star').prepend('<img id="img" src="star-on.png"');
      //   } else if (review_arr[i].rating === 4) {
      //     $('.rating').prepend('<img id="img" src="star-off.png"');
      //   }
      // }


      // $(document).ready(function() {
      //     console.log("***",review_arr);
      //     // $('#star').raty({score: review_arr[i].rating});
      //     $.each(review_arr, function (i, val){
      //       console.log("review_" + i + ":" + val.rating);
      //       $('#review_' + i).raty({score: val.rating});
      //     });
      //     // $('.review_' + 0).raty({score: review_arr[0].rating})
      //   });
      }


    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }

  function destroy(review){
    console.log("***review", review)
    $http ({
      method: 'DELETE',
      url: '/api/reviews/' + review._id
    }).then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response) {
      var index = vm.user.reviews.indexOf(response);
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
