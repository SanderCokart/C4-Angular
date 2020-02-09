kleurApp2.controller('kleurController2', ($scope) => {
    $scope.backgroundColor = 'white';
    $scope.changeColor = (event) => {
        $scope.backgroundColor = event.target.style.backgroundColor;
    };

    $scope.resetColor = () => {
        $scope.backgroundColor = 'white';
    };

    $scope.div1 = 0;
    $scope.div2 = 0;
    $scope.div3 = 0;
});