(function() {
  var nodeAPI;

  nodeAPI = angular.module("nodeAPI", ["ngRoute", "nodeAPIControllers", "nodeAPIServices"]);

  nodeAPI.config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/login", {
        templateUrl: "views/partials/login.html",
        controller: "LoginPageCtrl"
      }).when("/articles", {
        templateUrl: "views/partials/articles.html",
        controller: "ArticlesCtrl"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);

(function() {
  var nodeAPIControllers;

  nodeAPIControllers = angular.module("nodeAPIControllers", []);

  nodeAPIControllers.controller("LoginPageCtrl", [
    "$scope", function($scope) {
      $scope.bat = "author";
    }
  ]);

  nodeAPIControllers.controller("ArticlesCtrl", [
    "$scope", "Articles", function($scope, Articles) {
      $scope.articles = Articles.query();
      $scope.orderProp = "title";
    }
  ]);

}).call(this);

(function() {
  var config, nodeAPIServices;

  config = {
    headers: {
      'Authorization': 'Bearer irxAON7TZf7f+0PG/huZqY9CTPmUBPScBNsdK4hBJIA='
    }
  };

  nodeAPIServices = angular.module("nodeAPIServices", ["ngResource"]);

  nodeAPIServices.factory("Articles", [
    "$resource", function($resource) {
      return $resource("http://localhost:1337/api/articles", {}, {
        query: {
          method: "GET",
          headers: {
            'Authorization': 'Bearer irxAON7TZf7f+0PG/huZqY9CTPmUBPScBNsdK4hBJIA='
          },
          isArray: true
        }
      });
    }
  ]);

}).call(this);
