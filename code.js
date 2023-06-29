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
    for (var x = -3.14; x <= 3.14; x += 0.1) {
        var y = eval(equation);
        x=Math.round(x*100)/100
        y=Math.round(y*100)/100
        console.log(y)
        xlist.push(x);
        ylist.push(y);
    }
    new Chart("graph", {
        type: "line",
        data: {
          labels: xlist,
          datasets: [{
            fill: false,
            pointRadius: 2,
            borderColor: "#cffafe",
            data: ylist
          }]
        },    
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "y = "+f,
            fontSize: 16
          }
        }
      });
    xlist=[];
    ylist=[];
}
function inverse(f){
    var eqinput=f
    var equation = "Math."+eqinput;
    for (var x=-3.14;x<=3.14;x+=0.1){
        var y=eval(equation);
        var t=1/y
        x=Math.round(x*100)/100
        t=Math.round(t*100)/100
        xlist.push(x);
        ylist.push(t);
    }
    console.log(xlist,ylist)
    new Chart("graph", {
      type: "line",
      data: {
        labels: xlist,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "#cffafe",
          data: ylist
        }]
      },    
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "y = "+f,
          fontSize: 16
        }
      }
    });
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
        x=Math.round(x*100)/100
        xlist.push(x);
        ylist.push(y);
    }
    console.log(xlist,ylist)
    new Chart("graph", {
      type: "line",
      data: {
        labels: xlist,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "#cffafe",
          data: ylist
        }]
      },    
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "y = Linear",
          fontSize: 16
        }
      }
    });
    xlist=[];
    ylist=[];
}
function quadratic(){
    var a=document.getElementById("a");
    a=a.value;
    var b=document.getElementById("b");
    b=b.value;
    var c=document.getElementById("c");
    c=c.value;
    a=String(a)
    b=String(b)
    c=String(c)
    var equation=a+"*x*x+"+b+"*x+"+c
    for (var x=-10;x<=10;x+=0.1){
        var y=eval(equation);
        x=Math.round(x*100)/100
        xlist.push(x);
        ylist.push(y);
    }
    new Chart("graph", {
      type: "line",
      data: {
        labels: xlist,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "#cffafe",
          data: ylist
        }]
      },    
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "y = Quadratic",
          fontSize: 16
        }
      }
    });

    xlist=[];
    ylist=[];
}
function show(i,n){
    a=document.getElementById(i).getAttribute("style")
    if (a=="display:flex"){
        document.getElementById(i).setAttribute("style","display:none")
    }
    else
    {
    document.getElementById(i).setAttribute("style","display:flex")
    }}

function rv(i,r,){
    a=document.getElementById(r);
    b=a.value;
    document.getElementById(i).innerHTML=b;
}