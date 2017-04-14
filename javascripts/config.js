/**
 * Created by 星 on 2016/11/22.
 */
angular.module('ngD3', [])
    .constant('d3', d3)
    .directive('d3Bars', function (d3) {
        return {}
    });
var app = angular.module('routerApp', ['ui.router', 'oc.lazyLoad']);

app.config(registerComponents)
    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
function registerComponents($controllerProvider, $compileProvider, $filterProvider, $provide) {
    // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任意可以添加功能
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
}
function carouselConfig(time) {
    $('.carousel').carousel({
        interval: time // in milliseconds
    });
}