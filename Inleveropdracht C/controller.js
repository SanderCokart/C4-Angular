phpApp.controller('phpController', ($scope, $http) => {
    $http.get('./auto.php')
        .then(function (response) {
            $scope.bedrijven = response.data.records;
            $scope.columns = Object.keys($scope.bedrijven[0]);
        });

});

