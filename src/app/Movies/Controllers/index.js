import angular from 'angular'
import MoviesCtrl from './Movies.ctrl'

const MoviesCtrlMdl = angular.module('movies.ctrl', [])
	.controller('MoviesCtrl', MoviesCtrl)

export default MoviesCtrlMdl.name