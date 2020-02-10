routingApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "home.htm"
        })
        .when("/aboutme", {
            templateUrl : "aboutme.htm"
        })
        .when("/hobbies", {
            templateUrl : "hobbies.htm"
        })
});