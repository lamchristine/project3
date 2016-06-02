MainController.$inject = ["UserService", "$http"]; // minification protection
function MainController (UserService, $http) {
  var vm = this;
  vm.currentUser = UserService.currentUser();



  query_cat()
  query_item()

  function query_cat() {
    $http
      .get('/api/categories')
      .then(function onSuccess(response) {
        // console.log("*****", response);
        vm.categories = response.data;
      });
  }

  function query_item() {
    $http
      .get('/api/items')
      .then(function onSuccess(response) {
        console.log("****item*", response);
        vm.items = response.data;
      });
  }

}
