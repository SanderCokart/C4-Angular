kleurApp.controller('kleurController', ($scope) => {
    $scope.backgroundColor = 'white';
    $scope.changeColor = (event) => {
        $scope.backgroundColor = event.target.style.backgroundColor;
    };

    $scope.resetColor = () => {
        $scope.backgroundColor = 'white';
    };
});