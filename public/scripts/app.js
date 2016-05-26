angular
  .module('Project3App', [
    'ngRoute',
    'satellizer'
  ])
  .controller('MainController', MainController)
  .controller('ReviewsIndexController', ReviewsIndexController)
  .controller('ReviewsNewController', ReviewsNewController)
  .controller('ReviewsShowController', ReviewsShowController)
  .controller('ReviewsEditController', ReviewsEditController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .controller('CategoriesIndexController', CategoriesIndexController)
  // .controller('PlacesIndexController', PlacesIndexController)

  .config(configRoutes)

  ;
