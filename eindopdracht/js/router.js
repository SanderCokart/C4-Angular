//ROUTER FUNCTION FOR END APP, SOME LINKS HAVE PARAMETERS USING ROUTEPARAMS
endApp.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "templates/read.htm"
		})
		.when("/create", {
			templateUrl: "templates/create.htm"
		})
		.when("/update/:id", {
			templateUrl: "templates/update.htm"
		})
		.when("/delete/:id", {
			templateUrl: "templates/delete.htm"
		});
});
