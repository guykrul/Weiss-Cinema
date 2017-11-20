import angular from 'angular'
import OmdbApiService from './OmdbApi.srv'

const OmdbSrvMdl = angular.module('omdb.srv', [])
	.service('OmdbApiSrv', OmdbApiService)

export default OmdbSrvMdl.name