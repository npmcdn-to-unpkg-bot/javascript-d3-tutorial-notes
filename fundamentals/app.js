d3.select("body").append("p").text("Welcome to D3!");

var dataset = [15, 11, 15, 23, 25, 19];

d3.select("#my-number-list").selectAll("li").data(dataset).enter().append("li").text(function(d) {
    return `Data is ${d}`;
});
