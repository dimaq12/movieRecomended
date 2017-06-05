// routes.$inject = ['$stateProvider'];
// routes.$inject = ['$urlRouterProvider'];
export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('topMovies', {
            url: '/top',
            template: require('./partials/topMovies.html'),
            controller: 'mainController as mainCtrl'
        })
        .state('favoritesMovies', {
            url: '/favorites',
            template: require('./partials/favoriteMovies.html'),
            controller: 'likedController as likedCtrl'
        })
        .state('chartMovies', {
            url: '/chart',
            template: require('./partials/chart.html'),
            controller: 'chartController as chartCtrl'
        });
    $urlRouterProvider.otherwise('/top')
    $locationProvider.html5Mode(true);
}
