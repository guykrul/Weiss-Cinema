import angular from 'angular'
import WishlistDrv from './Wishlist.drv'

const WishlistDrvMdl = angular.module('wishlist.drv', [])
	.directive( 'wishlist', WishlistDrv )

export default WishlistDrvMdl.name