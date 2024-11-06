mainApp.component('login', {
    templateUrl: '/src/login/login.template.html',
    controller: ($scope, $http, $mdToast, $location) => {

        $scope.login = async () => {
            try {
                const { email, password } = $scope
                const res = await $http.post(window.API_URL + '/auth/login', { email, password })

                sessionStorage.setItem('session', JSON.stringify(res.data))

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('You are logged in!')
                        .hideDelay(3000)
                )
                $location.path('/home')
            } catch (error) {
                console.log(error)
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(error.data)
                        .hideDelay(3000)
                )
            }
        }
    }
})