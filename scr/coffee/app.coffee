nodeAPI = angular.module("nodeAPI", [
  "ngRoute"
  "nodeAPIControllers"
  "nodeAPIServices"
])

nodeAPI.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when("/login",
      templateUrl: "views/partials/login.html"
      controller: "LoginPageCtrl"
    ).when("/articles",
      templateUrl: "views/partials/articles.html"
      controller: "ArticlesCtrl"
    ).otherwise redirectTo: "/"
]