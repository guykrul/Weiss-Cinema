import angular from 'angular'
import movieTpl from './_movie.tpl.html'

const MoviesTplMdl = angular.module('movies.templates', [ movieTpl ])

export default MoviesTplMdl.name