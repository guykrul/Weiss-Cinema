import angular from 'angular'
import LoaderDrv from './Loader.drv'


const SharedDrvMdl = angular.module('shared.drv', [])
	.directive('removeLoader', LoaderDrv)

export default SharedDrvMdl.name