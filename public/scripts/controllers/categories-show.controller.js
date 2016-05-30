CategoriesShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function CategoriesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.category = {};
  vm.items = []
  // vm.newReview = {};
  // vm.createReview = createReview;



  get();

  function get(){
    $http
      .get('/api/categories/' + $routeParams.id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.category = response.data;
      // console.log(response.data)
      var chapters = {};

      var item_arr = response.data.items;

      for (var i in item_arr) {
        var coord_arr = item_arr[i].place.coord_arr; //gives you coord_arr = [222, 333]
        var loc = item_arr[i].place.name;
        // var coord_arr = [-22, 455]

        var place_ob = {
          bearing: 27,
          center: coord_arr,
          zoom: 15.5,
          pitch: 20,
          speed: 0.8
        };
        chapters[loc] = place_ob;
      }
      console.log(chapters);


      window.onscroll = function() {
          var chapterNames = Object.keys(chapters);
          for (var i = 0; i < chapterNames.length; i++) {
              var chapterName = chapterNames[i];
              if (isElementOnScreen(chapterName)) {
                  setActiveChapter(chapterName);
                  break;
              }
          }
      };
      var activeChapterName = 'baker';
      function setActiveChapter(chapterName) {
          if (chapterName === activeChapterName) return;

          map.flyTo(chapters[chapterName]);

          document.getElementById(chapterName).setAttribute('class', 'active');
          document.getElementById(activeChapterName).setAttribute('class', '');

          activeChapterName = chapterName;
      }

      function isElementOnScreen(id) {
          var element = document.getElementById(id);
          var bounds = element.getBoundingClientRect();
          return bounds.top < window.innerHeight && bounds.bottom > 0;
      }
    } //closes onGetSuccess

    function onGetError(response){
      console.log("Error in getting categories", response);
      $location.path('/');
    } //closes onGetError
  } //closes get()


  // function createReview() {
  //   console.log(vm.newReview);
  //   $http
  //     .post('/api/categories/' + $routeParams.id + '/reviews', vm.newReview) //.method(url, data)
  //     .then(onCreateSuccess, onCreateError);
  //     function onCreateSuccess(response) {
  //       console.log("creating new review",response);
  //       vm.category.reviews.push(response.data);
  //       vm.newReview = {};
  //       $location.path('/categories/' + $routeParams.id);
  //       // $location.path('/reviews/')
  //     }
  //
  //     function onCreateError (response) {
  //       console.log("error in creating", response);
  //     }
  // }

// console.log("***chapter", chapters)
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhbTA2IiwiYSI6ImNpb294d25xMzAwMXJ1eG0zdXdtaGtqMmwifQ.baGJ8eoCmGvgnMptSrTGyw';

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [-122.4194, 37.7749],
      zoom: 15.5,
      bearing: 27,
      pitch: 45
    });

    // var chapters = {
    //   'baker': {
    //       bearing: 27,
    //       center: [-0.15591514, 51.51830379],
    //       zoom: 15.5,
    //       pitch: 20
    //   },
    //   'aldgate': {
    //       duration: 6000,
    //       center: [-0.07571203, 51.51424049],
    //       bearing: 150,
    //       zoom: 15,
    //       pitch: 0
    //   },
    // };

    // On every scroll event, check which element is on screen
    // window.onscroll = function() {
    //     var chapterNames = Object.keys(chapters);
    //     for (var i = 0; i < chapterNames.length; i++) {
    //         var chapterName = chapterNames[i];
    //         if (isElementOnScreen(chapterName)) {
    //             setActiveChapter(chapterName);
    //             break;
    //         }
    //     }
    // };
    // var activeChapterName = 'baker';
    // function setActiveChapter(chapterName) {
    //     if (chapterName === activeChapterName) return;
    //
    //     map.flyTo(chapters[chapterName]);
    //
    //     document.getElementById(chapterName).setAttribute('class', 'active');
    //     document.getElementById(activeChapterName).setAttribute('class', '');
    //
    //     activeChapterName = chapterName;
    // }
    //
    // function isElementOnScreen(id) {
    //     var element = document.getElementById(id);
    //     var bounds = element.getBoundingClientRect();
    //     return bounds.top < window.innerHeight && bounds.bottom > 0;
    // }



}; //closes CategoriesShowController
