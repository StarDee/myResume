/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-11-22 13:33:40
 * @version $Id$
 */
app.controller('mainCtrl', ['$scope', '$rootScope', '$state', '$window',
    function ($scope, $rootScope, $state, $window) {
        var vm = this;
        // html界面检测url中的值
        $rootScope.$state = $state;
        if (document.body.clientWidth < 768) {
            vm.star = false;
            vm.isToggle = "collapse";
        }
        else {
            vm.isToggle = "";
            vm.star = true;
        }
        //$scope.$watch($window.innerWidth, function(newValue,oldValue) {
        //    if(newValue < 768) {
        //        vm.star = false;
        //        vm.isToggle = "collapse";
        //    }
        //    else {
        //        vm.isToggle = "";
        //        vm.star = true;
        //    }
        //});
        $(window).resize(function () {
            $scope.$apply(function () {
                if (window.innerWidth < 768) {
                    vm.star = false;
                    vm.isToggle = "collapse";
                }
                else {
                    vm.isToggle = "";
                    vm.star = true;
                }
            });
        });
        console.log('你好，很高兴见到你。\n相遇便是缘分。');
        console.log('我的邮箱是 %c di.star@foxmail.com', "color:red");
        console.log('因时间仓促，网站可能会有一些不足，欢迎指教。')
    }]);
