import angular from 'angular'
import MoviesServices from './Services'
import MoviesControllers from './Controllers'
import MoviesViews from './Views'
import MoviesDirectives from './Directives'
import MoviesTemplates from './Templates'

const MoviesMdl = angular.module('weiss.movies', [
	MoviesServices,
	MoviesViews,
	MoviesTemplates,
	MoviesControllers,
	MoviesDirectives
])

export default MoviesMdl.name