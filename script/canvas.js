
let canvas, context;

window.onload = ()=>{
    canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
}

let rysujLinie = ()=>{
    context.beginPath();
    context.lineWidth=5;
    context.strokeStyle="blue";
    context.moveTo(10,10); 
    context.lineTo(canvas.width-10, canvas.height-10);
    context.stroke();
    context.beginPath();
    context.lineWidth=3;
    context.strokeStyle= "rgb(0,255,255)";
    context.moveTo(10,20);
    context.lineTo(canvas.width-20, canvas.height-10)
    context.stroke();
}
let rysujKrzywa = ()=>{
  
    context.strokeStyle="rgb(100,255,100)";
    context.lineWidth=4;
    context.beginPath();
    context.arc(200, 200, 150, Math.PI, 2*Math.PI);
    context.stroke();
}
let rysujFigury =()=>{
    let dlRamion = 100;
    let dlPodstawy = 150;
    let h= Math.sqrt( Math.pow(dlRamion,2)-Math.pow(dlPodstawy/2,2));

    context.beginPath();
    //A
    context.moveTo(canvas.width/2-dlPodstawy*0.5,canvas.height/2);
    //B
    context.lineTo(canvas.width/2+dlPodstawy*0.5,canvas.height/2);
    //C
    context.lineTo(canvas.width/2,canvas.height*0.5-h);
    //A
    //context.lineTo(canvas.width/2-dlPodstawy*0.5, canvas.height/2);
    context.closePath();
    context.stroke();

    context.fillStyle="green";
    context.fill();

    context.lineWidth=8;
    context.lineJoin = "round"; //mitre level
    context.strokeStyle = "#224422";
    context.stroke();

    //prostokat
    context.fillStyle= "rgba(0,0,250,0.5)";
    context.fillRect(100,150,150,200);
    context.strokeStyle="rgb(250,0,0)";
    context.strokeRect(100,150,150,200);
    //okrag
    context.beginPath();
    context.globalAlpha=0.2;
    context.arc(170,150,70,0,2*Math.PI);
    context.fillStyle= "rgb(0,250,0)";
    context.fill();
    context.strokeStyle="rgb(120,150,100)";
    context.stroke();
    context.globalAlpha=1;
}
let  czysc= ()=>{
    context.clearRect(0,0,canvas.width, canvas.height);
}