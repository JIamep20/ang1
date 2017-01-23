var angular = require('angular');

module.exports = function (app) {
    app.controller('UsersListCtrl', function ($scope, $http, $location, url) {

        $http.get(url + 'users')
            .then(function (r) {
                $scope.users = r.data;
            }, function (e) {
                console.log(e);
            });

        $scope.search = '';

        $scope.deleteUser = function (item, $event) {
            angular.element($event.target).prop('disabled', true);
            $http.delete(url + 'users/' + item.id)
                .then(function (r) {
                    $scope.users = $scope.users.filter(function (el) {
                        return el.id !== item.id
                    });
                }, function (e) {
                    angular.element($event.target).prop('disabled', true);
                    console.log('Error: ', e);
                });
        };
    });
};