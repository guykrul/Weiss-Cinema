/**
 * Ui-Router Configurations
 *
 */
export default ['$stateProvider', '$urlRouterProvider', ( $stateProvider, $urlRouterProvider ) => {

	$urlRouterProvider.when('', ['$state', ( $state ) => {
		$state.go('wishlist')
	}])

	$stateProvider
		.state('wishlist', {
			url: '/',
			views: {
				'movies': {
					templateUrl: '_movies.tpl.html',
					controller: 'MoviesCtrl as movies'
				}
			},
			resolve: {
				movies: ['WishlistSrv', 'OmdbApiSrv', function (WishlistSrv, ApiSrv ) {
					return WishlistSrv.list
				}]
			}
		})
}]