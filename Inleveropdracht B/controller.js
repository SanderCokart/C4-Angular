filterApp.controller('filterController', ($scope) => {
    $scope.autos = [
        {kenteken: '80273', kleur: 'grijs', merk: 'audi', aantalDeuren: 4, prijs: 30000},
        {kenteken: '12312', kleur: 'paars', merk: 'porsche', aantalDeuren: 2, prijs: 20000},
        {kenteken: '12412', kleur: 'geel', merk: 'bmw', aantalDeuren: 4, prijs: 45000},
        {kenteken: '87908', kleur: 'oranje', merk: 'volvo', aantalDeuren: 4, prijs: 60000},
        {kenteken: '35345', kleur: 'blauw', merk: 'ford', aantalDeuren: 2, prijs: 25000},
    ];


    $scope.columns = Object.keys($scope.autos[0]);
    $scope.sortColumn = 'kenteken';
    $scope.reverseSort = false;

    $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortColumn === column) && !$scope.reverseSort;
        $scope.sortColumn = column;
    };

});

