/**
 * Wishlist Directive:
 *
 * Responsible for user interaction with wishlist:
 * 	- Present lit items in a "full heart" class.
 * 	- Bind click event to add / remove items from wishlist.
 */
export default [ 'WishlistSrv', function( WishlistSrv ) {
	return {
		restrict: 'A',
		scope: '=',
		isolated: true,
		link: ( scope, element ) => {

			//See if item is in the user Wishlist and set the correct class
			if( WishlistSrv.isItemInList( scope.movie ) )
				element.toggleClass('fa-heart-o fa-heart')

			//Toggle item from wishlist on click
			element.on('click', () => {
				WishlistSrv.toggleItem( scope.movie )
				element.toggleClass('fa-heart-o fa-heart')
			})
		}
	}
}]