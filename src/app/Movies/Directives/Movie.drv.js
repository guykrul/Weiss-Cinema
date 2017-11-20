/**
 * Movie directive
 *
 * Template loader directive for single movie
 */
export default [ () => {
	return {
		restrict: 'A',
		templateUrl: '_movie.tpl.html',
		replace: true,
	}
}]