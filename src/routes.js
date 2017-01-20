module.exports = function(app) {
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/asd', {template: '<h1>asdadasdasd</h1>'})

            .otherwise({redirectTo: '/'});

        $locationProvider.hashPrefix('');
    });
};