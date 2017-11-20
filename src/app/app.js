import angular from 'angular'
import Shared from './Shared'
import Omdb from './Omdb'
import Movies from './Movies'
import Search from './Search'
import Wishlist from './Wishlist'
import MovieDetails from './MovieDetails'


angular.module('weiss-cinema', [
	Omdb,
	Wishlist,
	Search,
	Movies,
	MovieDetails,
	Shared
])