/**
 * Remove Loader Directive
 *
 * Remove a loading class from element when the app bootstraps.
 * Use to prevent angular html template from being briefly displayed by the browser in its raw (uncompiled).
 */
export default [ function (  ) {
	return {
		restrict: 'A',
		link: ( scope, element ) => {
			element.removeClass('loading')
		}
	}
}]