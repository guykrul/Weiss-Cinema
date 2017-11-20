/**
 * Wishlist Service:
 *
 * Handle all wishlist CRUD operations.
 * Uses the 'localStorageService' from 'LocalStorageModule'
 */
export default class Wishlist {

	/**
	 * Set class properties and get list from local storage.
	 * @param localStorageService
	 * @param CELL_NAME
	 */
	constructor ( localStorageService, CELL_NAME ) {
		this.storage = localStorageService
		this.cellName = CELL_NAME
		this.list = JSON.parse( this.storage.get( this.cellName ) ) || {}
	}

	get List() {
		return this.list
	}

	addItem( item ) {
		this.list[ item.imdbID ] = item
	}

	removeItem ( itemId ) {
		delete this.list[ itemId ]
	}

	/**
	 * Check if a given item exist in the user wishlist
	 * @param item
	 * @returns {boolean}
	 */
	isItemInList( item ) {
		return this.list.hasOwnProperty( item.imdbID )
	}

	/**
	 * Toggle item from the user wishlist and save the list to the local storage.
	 * @param item
	 * @returns {void}
	 */
	toggleItem( item ) {
		this.isItemInList( item ) ? this.removeItem( item.imdbID ) : this.addItem( item )
		this.saveList()
	}

	/**
	 * Save the user wishlist as JSON in the browser local storage
	 * @returns {void}
	 */
	saveList() {
		this.storage.set( this.cellName, angular.toJson( this.list ) )
	}
}

/**
 * Inject angular services to class.
 * For minification purpose.
 * @type {[string,string]}
 */
Wishlist.$inject = ['localStorageService', 'CELL_NAME']