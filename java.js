var penPromise= d3.json("penguins/classData.json")
penPromise.then(function(penData){

  var EachDay= d3.range(39) 
    console.log("penData", penData);
  var final=  getGrade(penData, 1)
  console.log(final)
   console.log(dataset(final))
    setup(dataset(final))
EachDay.forEach(function(num){
    AllDays(penData, num)
})

   
},
    function(err)
    {
        console.log("fail", err)
    })
var AllDays= function(penData, day){
     d3.select("body")
.append("button")
.text("day" + day)
.on("click", function(){
   var final=getGrade(penData, day)
   d3.selectAll("svg *").remove()
   setup(dataset(final))

    })
}
//create an array of quizes
var getGrade =function(penData, day) {
    var quizGrades= penData.map(function(penguin) 
        {
        return penguin.quizes[day].grade
       
        })
    return quizGrades; }

//create the points, array of penguin and grade objects 
var dataset= function(final){
     
  var points= final.map(function(quiz, i){
        return {x: i,
                y: quiz}
    })
  return points}

 //function to display the grades for each day
 


//set up the screen
 var setup= function(points){
    var xScale= d3.scaleLinear()
        xScale.domain([0,22])
    xScale.range([screen.width,0])
    
    var yScale= d3.scaleLinear()
        yScale.domain([10,0])
    yScale.range([screen.width,0])
    drawPoints(points, xScale, yScale)
 }

 var screen = {width: 900, height: 700}
 
 //bind the points onto the screen
 var drawPoints= function(points, xScale, yScale){
     d3.select("svg")
     .attr("height", screen.height)
     .attr("width", screen.width)
     .selectAll("circle")
     .data(points)
     .enter()
     .append("circle")
     .attr("cx", function(p){return xScale(p.x)})
     .attr("cy", function(p){return yScale(p.y)})
     .attr("r", 20)
 }              
