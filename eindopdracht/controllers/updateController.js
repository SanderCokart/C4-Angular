endApp.controller('updateController', ($scope, $http, $routeParams, $window) => {
    $scope.updateModels = {
        voornaam: {
            invalidMessage: 'Vul alstublieft een geldige voornaam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 30 karakters).',
            type: 'text', input: null, label: 'Voornaam', pattern: /^[a-zA-Z'", ]{1,30}$/,
        },
        achternaam: {
            invalidMessage: 'Vul alstublieft een geldige achternaam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 30 karakters).',
            type: 'text', input: null, label: 'Achternaam', pattern: /^[a-zA-Z'", ]{1,30}$/,
        },
        straat: {
            invalidMessage: 'Vul alstublieft een geldige straat naam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 50 karakters).',
            type: 'text', input: null, label: 'Straat', pattern: /^[a-zA-Z'", ]{1,50}$/,
        },
        huisnummer: {
            invalidMessage: 'Vul alstublieft een geldig huisnummer in. U mag gebruik maken van alfabethische en numerieke karakters. (max 5 karakters).',
            type: 'text', input: null, label: 'Huisnummer', pattern: /^\w{1,5}$/,
        },
        postcode: {
            invalidMessage: 'Vul alstublieft een geldig postcode in. (Voorbeeld: 1234 AB).',
            type: 'text', input: null, label: 'Postcode', pattern: /^[0-9]{4} ?[a-zA-Z]{2}$/,
        },
        woonplaats: {
            invalidMessage: 'Vul alstublieft een geldige voornaam in. U mag gebruik maken van alfabethsiche karakters, apostrof, commas en spaties. (max 30 karakters).',
            type: 'text', input: null, label: 'Woonplaats', pattern: /^[a-zA-Z '",]{1,30}$/,
        },
        telefoonnummer: {
            invalidMessage: 'Vul alstublieft een geldig telefoonnummer in. (Voorbeeld: 0612345678 of 0591319123).',
            type: 'text', input: null, label: 'Telefoonnummer', pattern: /^[0-9]{10}$/,
        },
    };

    //GET PERSON DATA FROM ID PARAMS IN ROUTE, SET AS INITIAL
    $scope.initialPerson = $scope.personCollection.find(person => {
        return person.id === $routeParams.id;
    });

    //RESET INPUT VALUES TO THE INITIAL VALUES
    $scope.reset = () => {
        const keys = Object.keys($scope.updateModels);
        keys.forEach(key => {
            $scope.updateModels[key].input = $scope.initialPerson[key];
        });
    };

    $scope.reset();

    //SENDS DATA WITH PUT REQUEST TO SERVER
    $scope.updatePerson = () => {
        $http.put('api/person/update.php', {
            id: $routeParams.id,
            voornaam: $scope.updateModels.voornaam.input,
            achternaam: $scope.updateModels.achternaam.input,
            straat: $scope.updateModels.straat.input,
            huisnummer: $scope.updateModels.huisnummer.input,
            woonplaats: $scope.updateModels.woonplaats.input,
            postcode: $scope.updateModels.postcode.input,
            telefoonnummer: $scope.updateModels.telefoonnummer.input,
        }).then(response => {
            //UPON SUCCESS GO BACK TO HOMEPAGE AND REFRESH TABLE
            $scope.goBack();
            $scope.get();
        }).catch(error => {
            //UPON ERROR LOG THE ERROR IN CONSOLE
            console.error(error);
        });
    };
});

