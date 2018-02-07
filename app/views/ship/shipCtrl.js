angular.module('starships').controller('shipCtrl', function($scope, shipsSrvc, $stateParams){
    var scope = $scope
    scope.id = $stateParams.id;

    shipsSrvc.getShip($stateParams.id).then(ship => {
        scope.ship = ship
    })
})