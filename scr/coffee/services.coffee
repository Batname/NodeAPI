config = headers:
  'Authorization': 'Bearer irxAON7TZf7f+0PG/huZqY9CTPmUBPScBNsdK4hBJIA='

nodeAPIServices = angular.module("nodeAPIServices", ["ngResource"])
nodeAPIServices.factory "Articles", [
  "$resource"
  ($resource) ->
    return $resource("http://localhost:1337/api/articles", {},
      query:
        method: "GET"
        headers:{'Authorization': 'Bearer irxAON7TZf7f+0PG/huZqY9CTPmUBPScBNsdK4hBJIA='}
        isArray: true
    )
]