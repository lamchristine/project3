PostsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.destroy = destroy;
  vm.post = {};

  get();

  function get(){
    $http
      .get('/api/posts/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.post = response.data;
    }

    function onGetError(response){
      console.log("Error in getting posts", response);
      $location.path('/');
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
