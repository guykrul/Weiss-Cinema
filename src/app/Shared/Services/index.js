import angular from 'angular'
import UtilsSrv from './Utils.srv'


const SharedSrvMdl = angular.module('shared.srv', [])
	.service('UtilsSrv', UtilsSrv)

export default SharedSrvMdl.name