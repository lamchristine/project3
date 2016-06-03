CategoriesShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function CategoriesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.category = {};
  vm.items = [];

  get();

  function get(){
    $http
      .get('/api/categories/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.category = response.data;
      //mapping
      var places = { type: 'FeatureCollection', features: [{ geometry: { type: "Point", coordinates: [-122.4194, 37.7749] },
  properties: { id: "cover", zoom: 10 }, type: 'Feature' }] };

      var item_arr = response.data.items;

      for (var i in item_arr) {
        var coord_arr = item_arr[i].place.coord_arr; //gives you coord_arr = [222, 333]
        var loc = item_arr[i].place.name;

        var places_hash = { geometry: { type: "Point", coordinates: coord_arr },
            properties: { id: loc, zoom: 14 }, type: 'Feature' };

        var features_arr = places["features"];
        features_arr.push(places_hash);
      }
      console.log("places***", places);

      mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhbTA2IiwiYSI6ImNpb294d25xMzAwMXJ1eG0zdXdtaGtqMmwifQ.baGJ8eoCmGvgnMptSrTGyw';

      L.mapbox.accessToken = 'pk.eyJ1IjoiY2xhbTA2IiwiYSI6ImNpb294d25xMzAwMXJ1eG0zdXdtaGtqMmwifQ.baGJ8eoCmGvgnMptSrTGyw';
      var map = L.mapbox.map('map', 'mapbox.streets', {
        zoomControl: false
      });

    var placesLayer = L.mapbox.featureLayer(places)
        .addTo(map);

    // Ahead of time, select the elements we'll need -
    // the narrative container and the individual sections
    var narrative = document.getElementById('narrative'),
        sections = narrative.getElementsByTagName('section'),
        currentId = '';

    setId('cover');

    function setId(newId) {
        // If the ID hasn't actually changed, don't do anything
        if (newId === currentId) return;
        // Otherwise, iterate through layers, setting the current
        // marker to a different color and zooming to it.
        placesLayer.eachLayer(function(layer) {
            if (layer.feature.properties.id === newId) {
                map.setView(layer.getLatLng(), layer.feature.properties.zoom || 14);
                layer.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#a8f'
                }));
            } else {
                layer.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#404040'
                }));
            }
        });
        // highlight the current section
        for (var i = 0; i < sections.length; i++) {
            sections[i].className = sections[i].id === newId ? 'active' : '';
        }
        // And then set the new id as the current one,
        // so that we know to do nothing at the beginning
        // of this function if it hasn't changed between calls
        currentId = newId;
    }

    // If you were to do this for real, you would want to use
    // something like underscore's _.debounce function to prevent this
    // call from firing constantly.
    narrative.onscroll = function(e) {
        var narrativeHeight = narrative.offsetHeight;
        var newId = currentId;
        // Find the section that's currently scrolled-to.
        // We iterate backwards here so that we find the topmost one.
        for (var i = sections.length - 1; i >= 0; i--) {
            var rect = sections[i].getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= narrativeHeight) {
                newId = sections[i].id;
            }
        };
        setId(newId);
    }; //map

    } //closes onGetSuccess

    function onGetError(response){
      console.log("Error in getting categories", response);
      $location.path('/');
    } //closes onGetError
  } //closes get()
}; //closes CategoriesShowController
