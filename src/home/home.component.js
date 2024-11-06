mainApp.component('home', {
    templateUrl: '/src/home/home.template.html',
    controller: ($scope, $location, $mdToast) => {
        if (!sessionStorage.getItem('session')) {
            $mdToast.simple()
                .textContent('You have been disconnected')
                .hideDelay(3000)
            $location.path('/')
        }


        $scope.email = JSON.parse(sessionStorage.getItem('session'))?.email

        $scope.logout = () => {
            sessionStorage.removeItem('session')
            $location.path('/')
        }
    }
})