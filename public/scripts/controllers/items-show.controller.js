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
          .setView([37.730098, -122.469546], 16);

          L.marker([-122.413385, 37.75264], {
              icon: L.mapbox.marker.icon({
                  'marker-size': 'large',
                  'marker-symbol': 'bus',
                  'marker-color': '#fa0'
              })
          }).addTo(map);

      //     L.mapbox.featureLayer({
      //     // this feature is in the GeoJSON format: see geojson.org
      //     // for the full specification
      //     type: 'Feature',
      //     geometry: {
      //         type: 'Point',
      //         // coordinates here are in longitude, latitude order because
      //         // x, y is the standard for GeoJSON and many formats
      //         coordinates: [-122.413385, 37.75264]
      //     },
      //     properties: {
      //         title: 'Peregrine Espresso',
      //         description: '1718 14th St NW, Washington, DC',
      //         // one can customize markers by adding simplestyle properties
      //         // https://www.mapbox.com/guides/an-open-platform/#simplestyle
      //         'marker-size': 'large',
      //         'marker-color': '#BE9A6B',
      //         'marker-symbol': 'marker'
      //     }
      // }).addTo(map);
    }

    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }
}
