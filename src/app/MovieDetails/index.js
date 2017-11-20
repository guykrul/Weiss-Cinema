import angular from 'angular'
import ngDialog from 'ng-dialog'
import MovieDetailsTemplates from './Templates'
import MovieDetailsDirectives from './Directives'

const MovieDetailsMdl = angular.module('movie.details', [
	ngDialog,
	MovieDetailsTemplates,
	MovieDetailsDirectives
])

export default MovieDetailsMdl.name