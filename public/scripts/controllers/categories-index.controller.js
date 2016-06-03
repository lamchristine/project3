CategoriesIndexController.$inject = ["$http", "$location", "$routeParams"]; // minification protection
function CategoriesIndexController ($http, $location, $routeParams) {
  var vm = this;
  vm.categories = [];
  vm.newReview = {};
  vm.createReview = createReview;

  query(); // fetch all the posts (index)

  ////

  function query() {
    $http
      .get('/api/categories')
      .then(function onSuccess(response) {
        console.log("*****", response);
        vm.categories = response.data;
      });
  }

  function createReview() {
    $http
      .post('/api/items/' + vm.newReview.item + '/reviews',  vm.newReview) //.method(url, data)
      .then(onCreateSuccess, onCreateError);
      function onCreateSuccess(response) {
        $location.path('/items/' + response.data.item._id);
      }

      function onCreateError (response) {
        console.log("error in creating", response);
      }
  }
}
