/**
 * Constants for OMDB API service.
 * Contains the url for all api request with a dynamic api key witch is expected as a parameter,
 * in purpose of making the OMDB module generic as possible and good for use in multiple apps.
 *
 * @param KEY
 * @returns {{SEARCH: string, MOVIE: {FULL: string, SHORT: string}}}
 */
export default function( KEY ){

	return {
		SEARCH: `http://www.omdbapi.com/?apikey=${KEY}&type=movie&s=`,
		MOVIE: {
			FULL: `http://www.omdbapi.com/?apikey=${KEY}&type=movie&plot=full&i=`,
			SHORT: `http://www.omdbapi.com/?apikey=${KEY}&type=movie&plot=short&i=`
		}
	}
}