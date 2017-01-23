module.exports = function(app) {
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/users', {
                template: require('./components/users/usersList.html'),
                controller: 'UsersListCtrl'
            })
            .when('/users/:userId', {
                template: require('./components/users/addEditUser.html'),
                controller: 'EditUserCtrl'
            })

            .otherwise({redirectTo: '/users'});

        $locationProvider.hashPrefix('');
    });
};