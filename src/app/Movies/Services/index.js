import angular from 'angular'
import MoviesService from './Movies.srv'


const MoviesSrvMdl = angular.module('movies.srv', [])
	.service( 'MoviesSrv', MoviesService )

export default MoviesSrvMdl.name