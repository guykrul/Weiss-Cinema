/**
 * Movies Service
 * Uses as a data source for current movie list.
 * Being update and watched for changes by the movie controller and the search module
 * (to hold the data for presenting search results).
 */
export default class Movies {
	constructor () {
		this.movies = []
	}

	set Movies( movies ) {
		this.movies = movies
	}
}