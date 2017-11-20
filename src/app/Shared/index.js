import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import Router from './Router.cnf'
import SharedSrv from './Services'
import SharedCtrl from './Controllers'
import SharedDrv from './Directives'

const SharedMdl = angular.module('weiss.cinema.shared', [ uiRouter, SharedSrv, SharedCtrl, SharedDrv ])
	.config( Router )



export default SharedMdl.name
