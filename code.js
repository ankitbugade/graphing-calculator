var xlist=[];
var ylist=[];   
function drawgraph(){
    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}
function trignometric(f) {
    var equationInput = f
    console.log(f)
    var equation = "Math."+equationInput;
    // var r=document.getElementById("pre");
    // var n= r.value;
    for (var x = -3.14; x <= 3.14; x += 0.1) {
        var y = eval(equation);
        xlist.push(x);
        ylist.push(y);
    }

    // pi=Math.PI
    // r=[0,pi/6,pi/4,pi/3,80*pi/180]
    // for (var x in r){
    //     var y=eval(equation);
    //     console.log("this is y")
    //     console.log(y)
    //     xlist.push(x);
    //     ylist.push(y);}
    // console.log(ylist)
    data=[{x:xlist,y:ylist,mode:"line"}];
    layout={title:"MARVS"};
    Plotly.newPlot("graph",data,layout);
    xlist=[];
    ylist=[];1
}
function inverse(){
    var eqinput='sin(x)'
    var equation = "Math."+eqinput;
    // var r=document.getElementById("pre");
    var n=r.value;
    // for (var x=0;x<=n;x+=0.1){
    //     var y=eval(equation);
    //     var t=1/y
    //     xlist.push(x);
    //     ylist.push(t);
    // }
   
    console.log(xlist,ylist)
    data=[{x:xlist,y:ylist,mode:"line"}];
    layout={title:"sam"};
    Plotly.newPlot("ss",data,layout);
    xlist=[];
    ylist=[];
}
function linear(){
    var equation="*x+";
    var mr= document.getElementById("m");
    var cr= document.getElementById("c");
    var m=mr.value;
    var c=cr.value;
        m=String(m)
        c=String(c)
    equation=m+equation+c

    for (var x=-1;x<=1;x+=0.1){
        var y=eval(equation);
        xlist.push(x);
        ylist.push(y);
    }
    console.log(xlist,ylist)

    // new Chart("myChart", {
    //     type: "line",
    //     data: {
    //       labels: xlist,
    //       datasets: [{
    //         data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
    //         borderColor: "red",
    //         fill: false
    //       }]},
    //       options: {
    //         legend: {display: false}
    //       }})

    data=[{x:xlist,y:ylist,mode:"line"}];
    layout={title:"mayur",
    yaxis: {
      autotick: false
    }};
    Plotly.newPlot("graph",data,layout);
    xlist=[];
    ylist=[];
}
function quadratic(){
    var equation="x*x+4*x+3"
    // var r=document.getElementById("pre");
    // var n=r.value;
   
    
    for (var x=-10;x<=10;x+=0.1){
        var y=eval(equation);

        xlist.push(x);
        ylist.push(y);
    }
    console.log(xlist,ylist)
    data=[{x:xlist,y:ylist,mode:"line"}];
    layout={title:"mayur"};
    Plotly.newPlot("graph",data,layout);
    xlist=[];
    ylist=[];
}
function show(i){
    a=document.getElementById(i).getAttribute("style")
    console.log(a)
    if (a=="display:block"){
        document.getElementById(i).setAttribute("style","display:none")
    }
    else
    {
    document.getElementById(i).setAttribute("style","display:block")
    }}
