/**
 * Utils Service
 *
 * A general service with utils "helper" methods
 */
export default class Utils {
	constructor () {
	}

	/**
	 * Filter values from a given object.
	 * Keeps only allowed keys witch stores as an Array in the "allowed" parameter and valid values.
	 *
	 * @param object {Object}
	 * @param allowed {Array}
	 * @returns {*}
	 */
	filterObject( object, allowed ) {
		return Object.keys( object )
			.filter(key => allowed.includes(key) && object[key] !== 'N/A')
			.reduce((obj, key) => {
				obj[key] = object[key]
				return obj
			}, {})
	}
}