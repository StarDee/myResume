/**
 * Created by 星 on 2016/11/24.
 */
angular.module('ngD3', [])
    .constant('d3', d3)
    .directive('d3Data', function (d3) {
        return {
            restrict: 'EA',
            replace: true,
            template: '<div class="data-show">d3.js展示数据</div>',
            scope: {
                data: "="
            },
            link: function (scope, element, attr) {
                var dataset=[2.50,2.10,1.70,1.30,0.90];
                var rectHeight = 25;//每个矩形占像素高度
                var svg = d3.select(element[0]).append("svg")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "0 0 400 200");


                var max = d3.max(dataset);
                var linear = d3.scale.linear()
                    .domain([0, max])
                    .range([0, 300]);
                svg.selectAll('rect')//选择svg内所有矩形
                    .data(dataset)	//绑定数组
                    .enter()		//指定选择集的enter部分
                    .append('rect') //添加足够数量的矩形元素
                    .attr('x', 20)
                    .attr('y', function (d, i) {
                        return i * rectHeight;
                    })
                    .attr('width', function (d, i) {
                        return linear(d);
                    })
                    .attr('height', rectHeight - 2)
                    .attr('fill', fallColor);	//给矩形设置颜色
                //function randomColor() {
                //    [].forEach.call(document.all, function (a) {
                //        a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
                //    })
                //}

                function fallColor() {

                    return '#' + (~~(Math.random() * (1 << 24))).toString(16);
                }

                function fallColor2() {
                    svg.selectAll('rect')
                        .transition()
                        .duration(2000)
                        // .delay(2000)
                        .attr('fill', fallColor);
                    // return '#'+(~~(Math.random()*(1<<24))).toString(16);
                }

                setInterval(fallColor2, 2000);
                var axis = d3.svg.axis()
                    .scale(linear)
                    .orient('bottom')
                    .ticks(7);

                svg.append('g')
                    .attr('class', 'axis')
                    .attr('transform', 'translate(20,130)')
                    .call(axis);
            }
        }
    });