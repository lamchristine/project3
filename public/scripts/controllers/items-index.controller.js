ItemsIndexController.$inject = ["$http"]; // minification protection
function ItemsIndexController ($http) {
  var vm = this;
  vm.items = [];
  vm.places = [];

  query(); // fetch all the categoies (index)
  query_place();
  ////

  function query() {
    $http
      .get('/api/items')
      .then(function onSuccess(response) {
        vm.items = response.data;
      });
  }

  function query_place() {
    $http
      .get('/api/places')
      .then(function onSuccess(response) {
        vm.places = response.data;
      });
  }

  //user sign up
// $('#signUpBtn').on('click', function(){
//   $("#signUpForm input").val('');
//   $('#signUpModal').modal('show');
// });
//
// $('#sign').on('click', function () {
//   console.log("signed up!");
//   console.log ( $("input[name = 'username']").val() );
//   $('#signUpModal').modal('hide');
// });

}
