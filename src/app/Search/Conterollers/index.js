import angular from 'angular'
import SearchCtrl from './Search.ctrl'


const SearchCtrlMdl = angular.module('search.ctrl', [])
	.controller('SearchCtrl', SearchCtrl)

export default SearchCtrlMdl.name