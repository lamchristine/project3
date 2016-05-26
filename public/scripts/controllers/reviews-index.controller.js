ReviewsIndexController.$inject = ["$http"]; // minification protection
function ReviewsIndexController ($http) {
  var vm = this;
  vm.reviews = [];

  query(); // fetch all the posts (index)

  ////

  function query() {
    $http
      .get('/api/reviews')
      .then(function onSuccess(response) {
        vm.reviews = response.data;
      });
  }
}
