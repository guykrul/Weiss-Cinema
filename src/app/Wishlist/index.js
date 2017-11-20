import angular from 'angular'
import WishlistServices from './Services'
import WishlistDirectives from './Directives'

const Wishlist = angular.module('weiss-cinema.wishlist', [ WishlistServices, WishlistDirectives ])

export default Wishlist.name