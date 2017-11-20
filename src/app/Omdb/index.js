import angular from 'angular'
import Services from './Services'
import constants from './constants'

const Omdb = angular.module('omdb', [ Services ])
	.constant('API', constants('bb182d9e'))

export default Omdb.name