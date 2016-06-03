ItemsIndexController.$inject = ["$http"]; // minification protection
function ItemsIndexController ($http) {
  var vm = this;
  vm.items = [];
  vm.places = [];

  query(); // fetch all the categoies (index)
  ////

  function query() {
    $http
      .get('/api/items')
      .then(function onSuccess(response) {
        var temp = {};
        var place = {};
        response.data.forEach(function (item){

          if (temp[item.name] === undefined) {
            temp[item.name] = 1;
            place[item.place.name] = 1;
          } else {
            temp[item.name] += 1;
            place[item.place.name] += 1;
          }
        });
      
        vm.items = Object.keys(temp);
        vm.all_items = response.data;
      });
  }

}
