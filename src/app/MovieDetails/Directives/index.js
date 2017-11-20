import angular from 'angular'
import MovieDetailsDrv from './MovieDetails.drv'

const MovieDetailsDrvMdl = angular.module('movie.details.drv', [])
	.directive('fullFilm', MovieDetailsDrv)

export default MovieDetailsDrvMdl.name