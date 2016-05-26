PostsNewController.$inject = ["$location", "$http"]; // minification protection
function PostsNewController ($location, $http) {
  var vm = this;

  vm.create = create;
  vm.post = {}; // form data


  function create() {
    $http
      .post('/api/posts', vm.post) //.method(url, data)
      .then(onCreateSuccess, onCreateError);

      function onCreateSuccess(response) {
        console.log("creating new post",response)
        $location.path('/posts/' + response.data._id);
        // $location.path('/posts/')
      }

      function onCreateError (response) {
        console.log("error in creating", response);
      }
  }
}
