angular.module('starships').controller('shipsCtrl', function($scope, shipsSrvc) {
    var scope = $scope
    scope.ships = shipsSrvc.ships;
    shipsSrvc.getShips().then(ships => {
        scope.ships = ships;
    })
})