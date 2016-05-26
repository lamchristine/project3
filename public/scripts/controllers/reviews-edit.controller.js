ReviewsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function ReviewsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.review = {}; // form data

  get();


    function get() {
      $http
        .get('/api/reviews/' + $routeParams.id)
        .then(onGetSuccess, onGetError);

      function onGetSuccess(response){
        vm.review = response.data;
      }

      function onGetError(response){
        console.log("error getting review", response);
        $location.path('/');
      }
    }

    function update(){
      $http
        .put('/api/reviews/' + $routeParams.id, vm.review)
        .then(onUpdateSuccess, onUpdateError);

      function onUpdateSuccess(response){
        // $location.path('/');
        $location.path('/reviews/' + $routeParams.id);
      }

      function onUpdateError(response){
        console.log("Failed in upating review", response);
      }
    }


    function destroy(){
      $http ({
        method: 'DELETE',
        url: '/api/reviews/' + $routeParams.id
      }).then(onDeleteSuccess, onDeleteError);

      function onDeleteSuccess(response) {
        $location.path('/');
      }
      function onDeleteError(response) {
        console.log("Error in deleting post", response);
      }
    }
}
