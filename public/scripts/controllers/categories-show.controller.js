CategoriesShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function CategoriesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.destroy = destroy;
  vm.category = {};

  get();

  function get(){
    $http
      .get('/api/categories/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.category = response.data;
    }

    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }
}
