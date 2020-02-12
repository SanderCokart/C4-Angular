endApp.controller('createController', ($scope, $http, $window) => {
    //CONTAINS ARRAY OF OBJECTS WHICH CONTAIN A MESSAGE, MODEL INPUT, LABEL & PATTERN
    $scope.createModels = {
        voornaam: {
            invalidMessage: 'Vul alstublieft een geldige voornaam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 30 karakters).',
            input: null, label: 'Voornaam', pattern: /^[a-zA-Z'", ]{1,30}$/,
        },
        achternaam: {
            invalidMessage: 'Vul alstublieft een geldige achternaam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 30 karakters).',
            input: null, label: 'Achternaam', pattern: /^[a-zA-Z'", ]{1,30}$/,
        },
        straat: {
            invalidMessage: 'Vul alstublieft een geldige straat naam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 50 karakters).',
            input: null, label: 'Straat', pattern: /^[a-zA-Z'", ]{1,50}$/,
        },
        huisnummer: {
            invalidMessage: 'Vul alstublieft een geldig huisnummer in. U mag gebruik maken van alfabethische en numerieke karakters. (max 5 karakters).',
            input: null, label: 'Huisnummer', pattern: /^\w{1,5}$/,
        },
        postcode: {
            invalidMessage: 'Vul alstublieft een geldig postcode in. (Voorbeeld: 1234 AB).',
            input: null, label: 'Postcode', pattern: /^[0-9]{4} ?[a-zA-Z]{2}$/,
        },
        woonplaats: {
            invalidMessage: 'Vul alstublieft een geldige voornaam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 30 karakters).',
            input: null, label: 'Woonplaats', pattern: /^[a-zA-Z '",]{1,30}$/,
        },
        telefoonnummer: {
            invalidMessage: 'Vul alstublieft een geldig telefoonnummer in. (Voorbeeld: 0612345678 of 0591319123).',
            input: null, label: 'Telefoonnummer', pattern: /^[0-9]{10}$/,
        },
    };

    //SENDS DATA WITH POST REQUEST TO SERVER
    $scope.createPerson = () => {
        $http.post('api/person/create.php', {
            voornaam: $scope.createModels.voornaam.input,
            achternaam: $scope.createModels.achternaam.input,
            straat: $scope.createModels.straat.input,
            huisnummer: $scope.createModels.huisnummer.input,
            woonplaats: $scope.createModels.woonplaats.input,
            postcode: $scope.createModels.postcode.input,
            telefoonnummer: $scope.createModels.telefoonnummer.input,
        }).then(response => {
            //UPON SUCCESS GO BACK TO HOMEPAGE AND REFRESH TABLE
            $scope.goBack();
            $scope.get();
        }).catch(error => {
            //UPON ERROR LOG THE ERROR IN CONSOLE
            console.error(error);
        });

    };

    //CLEAR ALL FIELDS
    $scope.reset = () => {
        let keys = Object.keys($scope.createModels);
        keys.forEach(key => {
            $scope.createModels[key].input = null;
        });
    };
});
