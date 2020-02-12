endApp.controller('readController', ($scope, $http, $window) => {
    //DATA FOR NG-REPEAT
    $scope.columns = [
        {columnFrontName: 'Voornaam', columnBackName: 'voornaam'},
        {columnFrontName: 'Achternaam', columnBackName: 'achternaam'},
        {columnFrontName: 'Straat', columnBackName: 'straat'},
        {columnFrontName: 'Huisnummer', columnBackName: 'huisnummer'},
        {columnFrontName: 'Postcode', columnBackName: 'postcode'},
        {columnFrontName: 'Woonplaats', columnBackName: 'woonplaats'},
        {columnFrontName: 'Telefoonnummer', columnBackName: 'telefoonnummer'},
    ];

    //READ ALL FROM DATABASE
    $scope.get = () => {
        $http.get('api/person/read.php')
            .then(function (response) {
                $scope.personCollection = response.data;
            });
    };

    //GET INITIAL DATA FROM DATABASE UPON LOADING APP
    $scope.get();


    //RETURN TO MAIN TABLE
    $scope.goBack = () => {
        $window.location.href = '#!/';
    };

    $scope.filter = '';
});