CategoriesShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function CategoriesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.category = {};
  // vm.newReview = {};
  // vm.createReview = createReview;

  get();

  function get(){
    $http
      .get('/api/categories/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.category = response.data;
      console.log("*****", response.data)
    }

    function onGetError(response){
      console.log("Error in getting categories", response);
      $location.path('/');
    }
  }
  // function createReview() {
  //   console.log(vm.newReview);
  //   $http
  //     .post('/api/categories/' + $routeParams.id + '/reviews', vm.newReview) //.method(url, data)
  //     .then(onCreateSuccess, onCreateError);
  //     function onCreateSuccess(response) {
  //       console.log("creating new review",response);
  //       vm.category.reviews.push(response.data);
  //       vm.newReview = {};
  //       $location.path('/categories/' + $routeParams.id);
  //       // $location.path('/reviews/')
  //     }
  //
  //     function onCreateError (response) {
  //       console.log("error in creating", response);
  //     }
  // }



};
