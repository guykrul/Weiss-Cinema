import angular from 'angular'
import MainCtrl from './Main.ctrl'


const SharedCtrlMdl = angular.module('shared.ctrl', [])
	.controller('MainCtrl', MainCtrl)

export default SharedCtrlMdl.name