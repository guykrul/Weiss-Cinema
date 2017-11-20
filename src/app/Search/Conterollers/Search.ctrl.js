/**
 * Search Controller:
 *
 * Interacting with the search input.
 * Search for films in the OMDB API when the user types in the search bar.
 * The autoCompleteOptions property was given as a value to the third party "angular-auto-complete" library
 * witch executes the search in the API.
 */
export default class Search {

	constructor( $scope, OmdbApiSrv, MoviesSrv ) {
		this.scope = $scope
		this.api = OmdbApiSrv
		this.moviesSrv = MoviesSrv
		this.term = null //Require attribute by the "angular-auto-complete" library

		this.autoCompleteOptions = {
			minimumChars: 1,
			data: (term) => {
			 	return this.api.search( term ).then(
					 results => {

					  	//Change the page title according to the user input.
					 	this.scope.$parent.main.title = `Search Results For "${term}"`

					 	//Set the search result to the movies service to be presented in the movie container with their poster.
					 	this.moviesSrv.Movies = results

					 	//Return the movie titles were found to the autocomplete element.
					 	return  results.map( movie => { return movie.Title } )
					 },
					error => {

					 	//Change the page title.
						this.scope.$parent.main.title = `No Results For "${term}"`

						//Reset movies container
						this.moviesSrv.Movies = []

						//Empty autocomplete suggestions
						return  null
					}
				 )
			}
		}
	}
}

/**
 * Inject angular services to class.
 * For minification purpose.
 * @type {[string,string]}
 */
Search.$inject = ['$scope', 'OmdbApiSrv', 'MoviesSrv']