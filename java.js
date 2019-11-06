var penPromise= d3.json("penguins/classData.json")
penPromise.then(function(penData){
    console.log("penData", penData);
  var final=  getGrade(penData)
  console.log(final)
},
    function(err)
{
    console.log("fail", err)
})
//create an array of quizes
var getGrade =function(penData)
    {
    var quizGrades= penData.map(function(penguin) 
        {
        return penguin.quizes[0].grade
        
        }

    )
    return quizGrades; }


//Create SVG element
//var svg = d3.select("body")
//            .append("svg")
/*            .attr("width", 500)
            .attr("height", 500);

svg.selectAll("circle")
   .data(getGrade())
   .enter()
   .append("circle")

.attr("cx", function(d) {
        return d[0];
   })
   .attr("cy", function(d) {
        return d[1];
   })
   .attr("r", 5);*/