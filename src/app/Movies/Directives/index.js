import angular from 'angular'
import MovieDirective from './Movie.drv'

const MoviesDrvMdl = angular.module('movies.drv', [])
	.directive('movie', MovieDirective)

export default MoviesDrvMdl.name