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
        // console.log("*****", response);
        vm.categories = response.data;
      });
  }

  function createReview() {
    // console.log("*****", vm.newReview.item)
    $http
      .post('/api/items/' + vm.newReview.item + '/reviews',  vm.newReview) //.method(url, data)
      .then(onCreateSuccess, onCreateError);
      function onCreateSuccess(response) {
        // console.log("creating new review",response);
        // vm.category.reviews.push(response.data);
        // vm.newReview = {};
        console.log("*******", response.data);
        $location.path('/items/' + response.data.item);
        // $location.path('/reviews/')
      }

      function onCreateError (response) {
        console.log("error in creating", response);
      }
  }
}
