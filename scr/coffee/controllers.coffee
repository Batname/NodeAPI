nodeAPIControllers = angular.module("nodeAPIControllers", [])

nodeAPIControllers.controller "LoginPageCtrl", [
  "$scope"
  ($scope) ->
    $scope.bat = "author"
    return
]
nodeAPIControllers.controller "ArticlesCtrl", [
  "$scope"
  "Articles"
  ($scope, Articles) ->
    $scope.articles = Articles.query();
    $scope.orderProp = "title"
    return
]