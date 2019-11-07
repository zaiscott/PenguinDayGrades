var penPromise = d3.json("penguins/classData.json");




var Days = d3.range(1,39);





penPromise.then(
function(penguins)
{
    
    console.log(penguins);
    
    // Ok data is grabbed, time to really start the lab ;)
    
     Days.forEach(function(dayNum, index) // needs two parameters for buttons and indexing
    {
        d3.select("body")
          .append("button")
          .text("Day: " + dayNum)
         
         // Made the buttons based off the variable (Days).
         
          .on("click", function()
            {
                plotPoints(penguins, index); // finds data from given penguin and plots it
                d3.select("p").text("Visualization for Day " + dayNum); // Labels  the Graph for each button
            })
            
    })
   
},
function(err)
{
    console.log("fail", err);
})







// Put functions to use in Promise down here

var screen = {height: 600, width: 800}; // svg screen, tells it how big it is

var drawGraph = function(points, xAxis, yAxis)
{
    d3.selectAll("svg *").remove();
    
    d3.select("svg")
        .selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", function(p){return xAxis(p.x)})
        .attr("cy", function(p){return yAxis(p.y)})
        .attr("r", 5);
}

var plotPoints = function(penguins, indexDay) 
{
    var points = penguins.map(function(d, i) // needs to look at every position in the array and return the day and grade being asked for in order to plot
    {
        var yData = d.quizes[indexDay].grade
        var xData = i
        return {x: xData, y: yData};
    })
    
    d3.select("svg")
        .attr("height", screen.height)  
        .attr("width", screen.width);
    
    var xAxis = d3.scaleLinear()
    
    xAxis.domain(
        [
            d3.min(points, function(d){return d.x;}), 
            d3.max(points, function(d){return d.x;})
        ]);
    
    xAxis.range([0,screen.width]);
    
    var yAxis = d3.scaleLinear()
    
    yAxis.domain(
        [
            d3.min(points, function(d){return d.y;}), 
            d3.max(points, function(d){return d.y;})
        ]);
    
    yAxis.range([screen.height,0]);
    
    drawGraph(points, xAxis, yAxis);
}


