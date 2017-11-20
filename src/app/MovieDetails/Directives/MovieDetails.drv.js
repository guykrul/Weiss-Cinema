/**
 * Full film information directive.
 *
 * Uses the Omdb api service to get details about a selected movie.
 * Uses the "ngDialog" service to display the movie details in a dialog box.
 */
import MovieDetailsCtrl from './../Controllers/MovieDetails.ctrl'

export default [ 'ngDialog', function ( ngDialog ) {
	return {
		restrict: 'A',
		link: ( scope, element ) => {

			element.on('click', () => {
				ngDialog.open({
					templateUrl: '_movie-details.tpl.html',
					controller: MovieDetailsCtrl,
					controllerAs: 'movie',
					className: 'ngdialog-theme-default weiss-dialog',
					resolve: {
						details: ['OmdbApiSrv', OmdbApiSrv  => {
							//instantiate controller only after resolving the movie details from the server
							return OmdbApiSrv.getMovie( scope.movie.imdbID)
						}]
					}
				})
			})
		}
	}
}]