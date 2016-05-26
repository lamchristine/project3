PlacesIndexController.$inject = ["$http"]; // minification protection
function PlacesIndexController ($http) {
  var vm = this;
  vm.places = [];

  query(); // fetch all the categoies (index)
  ////

  function query() {
    $http
      .get('/api/places')
      .then(function onSuccess(response) {
        vm.places = response.data;
      });
  }
}
