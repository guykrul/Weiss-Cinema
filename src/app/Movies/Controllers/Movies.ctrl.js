/**
 * Movies Controller
 *
 * Responsible for holding the movies list and watch for updates.
 * The movies can be updated by the Movies service after getting search results,
 * or when the user views his wishlist.
 */
export default class Movies {

	constructor ( $scope, MoviesSrv, movies ) {
		this.scope = $scope
		this.scope.$parent.main.title = 'Your Wishlist' //Update page title on controller init.
		this.moviesSrv = MoviesSrv
		this.moviesSrv.movies = movies //Update the Movies Service when the controller initialize with the movies from the user wishlist.

		/**
		 * Watch for changes from the movie service.
		 * can be from assign the movies to be the wishlist items from this controller or from search results.
		 */
		$scope.$watch( () => { return this.moviesSrv.movies },  newMovies => {
			this.movies = newMovies
			this.hasMovies = Object.getOwnPropertyNames(this.movies).length
		})

	}
}

/**
 * Inject angular services to class.
 * For minification purpose.
 * @type {[string,string]}
 */
Movies.$inject = ['$scope', 'MoviesSrv', 'movies']