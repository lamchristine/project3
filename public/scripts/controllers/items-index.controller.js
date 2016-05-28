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
          // console.log(item.place.name);

          if (temp[item.name] === undefined) {
            temp[item.name] = 1;
            place[item.place.name] = 1;
          } else {
            temp[item.name] += 1;
            place[item.place.name] += 1;
          }
        });
        // console.log('temp obj: ', temp);
        // console.log('keys: ', Object.keys(temp));
        // console.log(place);
        // var summed = 0;
        //
        // for (var key in place) {
        //   if ( isNaN(place[key]) ){
        //     summed += place[key];
        //   }
        // }
        // console.log(summed);
        vm.items = Object.keys(temp);
        vm.all_items = response.data;
      });
  }

}
