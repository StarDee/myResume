/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-22 13:35:50
 * @version $Id$
 */
app.controller('eduCtrl',['$scope', '$timeout',
    function($scope,$timeout){
    vm =this;
    $timeout(function() {
        vm.toShowLine=true;
    },1000)
}]);
