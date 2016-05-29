PlacesShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PlacesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.place = {};
  // vm.newReview = {};
  // vm.createReview = createReview;

  get();

  function get(){
    console.log("****", $routeParams.id);
    $http
      .get('/api/places/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.place = response.data;
    }

    function onGetError(response){
      console.log("Error in getting places", response);
      $location.path('/');
    }
  }
};
