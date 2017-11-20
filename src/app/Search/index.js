import angular from 'angular'
import ngSanitize from 'angular-sanitize' //autoCompleteModule requires ngSanitize as a dependency.
import autoCompleteModule from 'angular-auto-complete'
import SearchControllers from './Conterollers'

const MovieSearch = angular.module('movies.search', [ngSanitize, 'autoCompleteModule', SearchControllers])

export default MovieSearch.name