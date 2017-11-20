/**
 * Movie Details controller
 *
 * Being instantiated after the selected movie data was fetched from the OMDB api.
 * Present the movie details in the dialog box.
 */
export default class MovieDetails {

	constructor ( UtilsSrv, details ) {
		this.details = details

		//Filters out unnecessary values from the movie details object
		this.detailslList = UtilsSrv.filterObject( this.details , [
			'Released',
			'Genre',
			'Director',
			'Actors',
			'Plot',
			'imdbRating',
			'Website'
		])
	}
}

/**
 * Inject angular services to class.
 * For minification purpose.
 * @type {[string,string]}
 */
MovieDetails.$inject = ['UtilsSrv', 'details']