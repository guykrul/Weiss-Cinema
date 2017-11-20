import angular from 'angular'
import LocalStorageModule from 'angular-local-storage'
import StorageConfig from './storage.cnf'
import Wishlist from './Wishlist.srv'

const WishlistSrv = angular.module( 'wishlist.srv', [ LocalStorageModule ] )
	.constant('CELL_NAME', 'cinema_wishlist')
	.config( ['localStorageServiceProvider', 'CELL_NAME', StorageConfig ] )
	.service('WishlistSrv', Wishlist )

export default WishlistSrv.name