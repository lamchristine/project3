ReviewsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function ReviewsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.destroy = destroy;
  vm.review = {};

  get();

  function get(){
    $http
      .get('/api/reviews/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.review = response.data;
    }

    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }

}
