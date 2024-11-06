mainApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<login></login>'
        })
        .when('/home', {
            template: '<home></home>'
        })
        .otherwise({
            redirectTo: '/'
        });
});