CategoriesIndexController.$inject = ["$http", "$location"]; // minification protection
function CategoriesIndexController ($http, $location) {
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
        // console.log(response);
        vm.categories = response.data;
      });
  }

  function createReview() {
    $http
      .post('/api/categories/' + vm.newReview.category + '/reviews', vm.newReview) //.method(url, data)
      .then(onCreateSuccess, onCreateError);
      function onCreateSuccess(response) {
        // console.log("creating new review",response);
        // vm.category.reviews.push(response.data);
        // vm.newReview = {};
        // console.log("*******", response.data.item);
        $location.path('/items/' + response.data.item);
        // $location.path('/reviews/')
      }

      function onCreateError (response) {
        console.log("error in creating", response);
      }
  }
}
