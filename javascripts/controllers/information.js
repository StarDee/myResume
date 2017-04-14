/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-22 14:17:54
 * @version $Id$
 */
app.controller('informationCtrl', ['$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {
        var vm = this;

        //读取轮播图数据
        $http.get("javascripts/factory/images.json").then(function (res) {
                vm.homeCarousel = res.data;
                carouselConfig(2500);
        });
        $timeout(function() {
            vm.toTop=true;
        },1000);
        $timeout(function() {
            vm.toShow=true;
        },2000)
    }]);
