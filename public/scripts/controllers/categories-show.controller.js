CategoriesShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function CategoriesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.category = {};

  get();

  function get(){
    $http
      .get('/api/categories/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      console.log(response);
      vm.category = response.data;
    }

    function onGetError(response){
      console.log("Error in getting categories", response);
      $location.path('/');
    }
  }
};
