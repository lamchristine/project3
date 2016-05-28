// ItemsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
// function ItemsShowController ($location, $http, $routeParams) {
//   var vm = this;
//   vm.item = {};
//
//   get();
//
//   function get(){
//     $http
//       .get('/api/items/item')
//       .then(onGetSuccess, onGetError);
//
//     function onGetSuccess(response){
//       vm.item = response.data;
//     }
//
//     function onGetError(response){
//       console.log("Error in getting reviews", response);
//       $location.path('/');
//     }
//   }
// }
