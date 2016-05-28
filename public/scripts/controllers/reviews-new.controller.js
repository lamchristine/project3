ReviewsNewController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function ReviewsNewController ($location, $http, $routeParams) {
  var vm = this;

  // vm.create = create;
  vm.review = {}; // form data
  vm.category={}

  // console.log(vm.review);

  function createReview() {
    alert("yo")
    $http
      .post('/api/categories/' + $routeParams.id + '/reviews', vm.review) //.method(url, data)
      .then(onCreateSuccess, onCreateError);
      function onCreateSuccess(response) {
        console.log("creating new review",response)
        $location.path('/');
        // $location.path('/reviews/')
      }

      function onCreateError (response) {
        console.log("error in creating", response);
      }
  }
}
