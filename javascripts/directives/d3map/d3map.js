/**
 * Created by 星 on 2016/11/24.
 */
angular.module('ngD3', [])
    .constant('d3',d3)
    .directive('d3Bars', function (d3) {
        return {
            restrict:'EA',
            replace:true,
            template:'<div class="chart"></div>',
            scope:{
                data:"="
            },
            link:function(scope,element,attr){
                var width  = 500;
                var height = 440;
                var speed = 0.02;
                var startTime = Date.now();
                var currentTime = Date.now();


                var svg = d3.select(element[0]).append("svg")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "0 0 400 400");

                var projection = d3.geo.orthographic()
                    .scale(200);

                var graticule = d3.geo.graticule();

                var path = d3.geo.path()
                    .projection(projection);

                var color = d3.scale.category20();

                //svg.append("text")
                //    .attr("id","loading")
                //    .attr("x",width/2)
                //    .attr("y",height/2)
                //    .text("Now Loading...");

                d3.json("world_605kb.json", function(error, root) {
                    if (error)
                        return console.error(error);
                    //console.log(root);

                    var grid = graticule();

                    //console.log(grid);

                    var map = svg.append("g")
                        .attr("transform", "translate(" +  -279 + "," + -50 + ")");

                    map.append("path")
                        .datum( grid )
                        .attr("id","grid_id")
                        .attr("class","grid_path")
                        .attr("d",path);

                    map.selectAll(".map_path")
                        .data( root.features )
                        .enter()
                        .append("path")
                        .attr("class","map_path")
                        .attr("fill",function(d,i){
                            return color(i);
                        })
                        .attr("d", path )
                        .on("mouseover",function(d,i){
                            d3.select(this)
                                .attr("fill","yellow");
                        })
                        .on("mouseout",function(d,i){
                            d3.select(this)
                                .attr("fill",color(i));
                        });

                    svg.select("#loading")
                        .attr("opacity",0);

                    d3.timer(function() {

                        currentTime = Date.now();

                        projection.rotate([speed * (currentTime - startTime), -15]).clipAngle(90);

                        map.select("#grid_id")
                            .attr("d",path);

                        map.selectAll(".map_path")
                            .attr("d",path);


                    });

                });
            }
        }
    });


