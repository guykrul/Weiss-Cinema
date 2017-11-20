/**
 * Settings configurations for localStorageServiceProvider
 * @param localStorageServiceProvider
 * @param CELL_NAME
 */
export default function ( localStorageServiceProvider, CELL_NAME ) {
	localStorageServiceProvider
		.setPrefix( CELL_NAME )
		.setNotify(false, false)
}