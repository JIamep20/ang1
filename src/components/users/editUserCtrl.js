module.exports = function(app) {
    app.controller('EditUserCtrl', function ($scope, $routeParams, $http) {
        $http.get('https://jsonplaceholder.typicode.com/users/' + $routeParams.userId)
            .then(
                function(r) {$scope.user = r.data;},
                function(e) {console.log('Eror in ajax, ' + e.status + ' ' + e.statusText);}
                );

        $scope.saveUser = function() {
            $http.put('https://jsonplaceholder.typicode.com/users/' + $routeParams.userId, {data: $scope.user});
        };
    });
};