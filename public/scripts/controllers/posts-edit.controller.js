PostsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.post = {}; // form data

  get();


    function get() {
      $http
        .get('/api/posts/' + $routeParams.id)
        .then(onGetSuccess, onGetError);

      function onGetSuccess(response){
        vm.post = response.data;
      }

      function onGetError(response){
        console.log("error getting post", response);
        $location.path('/');
      }
    }

    function update(){
      $http
        .put('/api/posts/' + $routeParams.id, vm.post)
        .then(onUpdateSuccess, onUpdateError);

      function onUpdateSuccess(response){
        // $location.path('/');
        $location.path('/posts/' + $routeParams.id);
      }

      function onUpdateError(response){
        console.log("Failed in upating post", response);
      }
    }


    function destroy(){
      $http ({
        method: 'DELETE',
        url: '/api/posts/' + $routeParams.id
      }).then(onDeleteSuccess, onDeleteError);

      function onDeleteSuccess(response) {
        $location.path('/');
      }
      function onDeleteError(response) {
        console.log("Error in deleting post", response);
      }
    }
}
