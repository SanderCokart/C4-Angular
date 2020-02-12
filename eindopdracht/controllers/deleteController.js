endApp.controller('deleteController', ($scope, $http, $routeParams) => {
    $scope.person = $scope.personCollection.find(person => {
        return person.id === $routeParams.id;
    });

    $scope.deletePerson = () => {
        $http.post('api/person/delete.php', $routeParams.id)
            .then(response => {
                $scope.get();
                $scope.goBack();
            });
    };
});