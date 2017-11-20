/**
 * OmdbApi Service
 *
 * Responsible for all communication with the OMDB API:
 *	- Search for movies by title
 *	- Get a specific movie object by omdbID
 */
export default class OmdbApi {

	constructor ( $http, $q, API ) {
		this.$http = $http
		this.$q = $q
		this.API = API
	}

	/**
	 * Search for movies by title.
	 *
	 * @param searchTerm
	 * @returns {Promise}
	 */
	search( searchTerm ) {
		const deferred = this.$q.defer()
		this.$http.get( this.API.SEARCH + searchTerm ).then(
			response => {
				 response.data.Response === "True" ? deferred.resolve( response.data.Search ) : deferred.reject( response.data.Error )
			},
			error => {
				deferred.reject('Something\'s wrong.. Try again some other time.')
			}
		)

		return deferred.promise
	}

	/**
	 * Get a specific movie by omdbID with the desire plot length ('FUll' / 'SHORT')
	 * @param movieId {string}
	 * @param plotLength {string}
	 * @returns {Promise}
	 */
	getMovie( movieId, plotLength = 'FULL' ) {
		const deferred = this.$q.defer()
		this.$http.get( this.API.MOVIE[ plotLength ] + movieId ).then(
			response => {
				response.data.Response === "False" ? deferred.reject( 'Something\'s wrong.. Try again some other time.' ) : deferred.resolve( response.data )
			},
			error => {
				deferred.reject('Something\'s wrong.. Try again some other time.')
			}
		)
		return deferred.promise
	}
}

/**
 * Inject angular services to class.
 * For minification purpose.
 * @type {[string,string]}
 */
OmdbApi.$inject = ['$http', '$q', 'API']