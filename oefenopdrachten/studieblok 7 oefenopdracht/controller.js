selectApp.controller('selectController', ($scope) => {
    $scope.kleuren = [
        'Geel',
        'Rood',
        'Groen',
        'Bruin',
    ];

    $scope.fruit = [
        {naam: 'banaan', kleur: 'Geel'},
        {naam: 'stervrucht', kleur: 'Geel'},
        {naam: 'Rode Appel', kleur: 'Rood'},
        {naam: 'Aardbij', kleur: 'Rood'},
        {naam: 'Peer', kleur: 'Groen'},
        {naam: 'Groene Appel', kleur: 'Groen'},
        {naam: 'Longans', kleur: 'Bruin'},
        {naam: 'Mamey Sapote', kleur: 'Bruin'},
    ];


    $scope.autos = [
        {kenteken: '80273', kleur: 'grijs', merk: 'audi', aantalDeuren: 4},
        {kenteken: '12312', kleur: 'paars', merk: 'porsche', aantalDeuren: 2},
        {kenteken: '12412', kleur: 'geel', merk: 'bmw', aantalDeuren: 4},
        {kenteken: '87908', kleur: 'oranje', merk: 'volvo', aantalDeuren: 4},
        {kenteken: '35345', kleur: 'blauw', merk: 'ford', aantalDeuren: 2}
    ];

    $scope.columns = Object.keys($scope.autos[0]);

});