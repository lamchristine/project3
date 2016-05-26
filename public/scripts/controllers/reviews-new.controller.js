ReviewsNewController.$inject = ["$location", "$http"]; // minification protection
function ReviewsNewController ($location, $http) {
  var vm = this;

  vm.create = create;
  vm.review = {}; // form data


  function create() {
    $http
      .post('/api/reviews', vm.review) //.method(url, data)
      .then(onCreateSuccess, onCreateError);

      function onCreateSuccess(response) {
        console.log("creating new review",response)
        $location.path('/reviews/' + response.data._id);
        // $location.path('/reviews/')
      }

      function onCreateError (response) {
        console.log("error in creating", response);
      }
  }
}
