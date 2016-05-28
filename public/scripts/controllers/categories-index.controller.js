CategoriesIndexController.$inject = ["$http"]; // minification protection
function CategoriesIndexController ($http) {
  var vm = this;
  vm.categories = [];

  query(); // fetch all the posts (index)

  ////

  function query() {
    $http
      .get('/api/categories')
      .then(function onSuccess(response) {
        console.log(response);
        vm.categories = response.data;
      });
  }
}
