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
      //creating map
      var coord_arr = response.data.place.coord_arr;
      L.mapbox.accessToken = 'pk.eyJ1IjoiY2xhbTA2IiwiYSI6ImNpb294d25xMzAwMXJ1eG0zdXdtaGtqMmwifQ.baGJ8eoCmGvgnMptSrTGyw';
      var map = L.mapbox.map('map', 'mapbox.streets')
          .setView([coord_arr[1], coord_arr[0]], 16);
      //setting marker on place coord_arr
      L.mapbox.featureLayer({
        type: 'Feature',
        geometry: {
            type: 'Point',
            // coordinates here are in longitude, latitude order
            coordinates: coord_arr
        },
        properties: {
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'marker'
        }
      }).addTo(map);

      //converting time to time ago
      response.data.reviews.forEach(function(review, i){
        var date = new Date(review.created);
        response.data.reviews[i].created = timeSince(date);
      })
      //function for converting time
      function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }
    }

    function onGetError(response){
      console.log("Error in getting reviews", response);
      $location.path('/');
    }
  }
}
