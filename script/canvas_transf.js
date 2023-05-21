let can2, cont2, can, cont;
window.onload= ()=>{
    can2= document.getElementById("canvas2");
    cont2= can2.getContext("2d");

     can= document.getElementById("canvas");
     cont= can.getContext("2d");
     cont.translate(can.width/2, can.height/2);

    //cont2.rect(0,0,30,30);
    //cont2.rect(50,50,30,30);
    //cont2.rect(100,100,30,30);

    cont2.save();  //zapisz pocz 0,0
    cont2.rect(0,0,30,30);  //pocz 0,0
    cont2.translate(50,50); 
    cont2.rect(0,0,30,30); //pocz 0,0 => 50,50
    cont2.translate(50,50);
    cont2.scale(2,1);
    cont2.rect(0,0,30,30);    //pocz 0,0 => 100,100
    cont2.translate(50,50); 
    cont2.scale(0.5,1)
    cont2.rect(0,0,30,30);

    cont2.restore();   //pocz 0,0 => 0,0
    cont2.stroke();
}
let czysc = ()=>{
    cont2.clearRect(0,0,can2.width,);
}
let rysuj = (ilosc)=>{
    cont.beginPath();
    
    let kat0= (ilosc>1)? 2*Math.PI/ilosc : 0;
    cont.rect(0,0,60,60);
    for (let i=1; i<ilosc; i++)
    {
        cont.rotate(kat0);
        cont.rotate(0,0,60,60);
        console.log(kat0);
    }

    cont.stroke();

}