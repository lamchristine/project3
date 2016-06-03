ItemsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function ItemsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.item = {};

  get();

  function get(){
    $http
      .get('/api/items/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){

      vm.item = response.data;
      var coord_arr = response.data.place.coord_arr;
      // var lng =
      console.log("****itemshowdata", response.data);
      console.log("****itemcoord", coord_arr);

      // show marker on map
      L.mapbox.accessToken = 'pk.eyJ1IjoiY2xhbTA2IiwiYSI6ImNpb294d25xMzAwMXJ1eG0zdXdtaGtqMmwifQ.baGJ8eoCmGvgnMptSrTGyw';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([coord_arr[1], coord_arr[0]], 16);
// [-122.4194, 37.7749]
    L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org
        // for the full specification
        type: 'Feature',
        geometry: {
            type: 'Point',
            // coordinates here are in longitude, latitude order because
            // x, y is the standard for GeoJSON and many formats
            coordinates: coord_arr
        },
        properties: {
            title: 'Peregrine Espresso',
            description: '1718 14th St NW, Washington, DC',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'marker'
        }
    }).addTo(map);
    }

    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }
}
