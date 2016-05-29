configRoutes.$inject = ["$routeProvider", "$locationProvider"]; // minification protection
function configRoutes($routeProvider, $locationProvider) {

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    // .when('/', {
    //   templateUrl: 'templates/reviews/index.html',
    //   controller: 'ReviewsIndexController',
    //   controllerAs: 'home'
    // })
    .when('/', {
      templateUrl: 'templates/categories/index.html',
      controller: 'CategoriesIndexController',
      controllerAs: 'home'
    })

    .when('/categories/:id', {
      templateUrl: 'templates/categories/show.html',
      controller: 'CategoriesShowController',
      controllerAs: 'categoriesShowCtrl'
    })

    .when('/places/:id', {
      templateUrl: 'templates/places/show.html',
      controller: 'PlacesShowController',
      controllerAs: 'placesShowCtrl'
    })

    .when('/signup', {
      templateUrl: 'templates/user/signup.html',
      controller: 'SignupController',
      controllerAs: 'sc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/login', {
      templateUrl: 'templates/auth/login.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/logout', {
      template: null,
      controller: 'LogoutController',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/profile', {
      templateUrl: 'templates/user/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profileCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    // .when('/reviews', {
    //   templateUrl: 'templates/reviews/index.html',
    //   controller: 'ReviewsIndexController',
    //   controllerAs: 'home'
    // })
    // .when('/reviews/new', {
    //   templateUrl: 'templates/reviews/new.html',
    //   controller: 'ReviewsNewController',
    //   controllerAs: 'reviewsNewCtrl',
    //   resolve: {
    //     loginRequired: loginRequired
    //   }
    // })
    // .when('/reviews/:id', {
    //   templateUrl: 'templates/reviews/show.html',
    //   controller: 'ReviewsShowController',
    //   controllerAs: 'reviewsShowCtrl'
    // })
    // .when('/reviews/:id/edit', {
    //   templateUrl: 'templates/reviews/edit.html',
    //   controller: 'ReviewsEditController',
    //   controllerAs: 'reviewsEditCtrl',
    //   resolve: {
    //     loginRequired: loginRequired
    //   }
    // })

    .otherwise({redirectTo: '/'});

    //BEFORE ACTION -- like middleware
    function skipIfLoggedIn($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) { //if user is not authenticated
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }

}
