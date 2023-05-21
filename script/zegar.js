//alert();

function zegar(){
    const czasTeraz = new Date();
    let godzina = czasTeraz.getHours();
    let minuta = czasTeraz.getMinutes();
    let sekunda = czasTeraz.getSeconds();
    let milisekunda = czasTeraz.getMilliseconds();
    let czasWartosc = (godzina>12)? godzina-12 : godzina;
    czasWartosc = (godzina==0)? 12 : godzina-12;
    czasWartosc += (minuta<=9)? ":0" + minuta : ":" + minuta;
    czasWartosc += (sekunda<=9)? ":0" + sekunda : ":"+ sekunda;
    czasWartosc += (milisekunda<=9)? ":0" + milisekunda : ":"+ milisekunda;
    czasWartosc += (godzina > 12)? "PM" : "AM";
    

    const elementZegarDiv = document.getElementById("Zegar");
    elementZegarDiv.innerHTML = "<b>" + czasWartosc + "</b>";    
    setTimeout(zegar,1);      // czasTeraz.toTimeString() zamiast czasWartosc
}

//stoper
// s.ms*100   1.1
let stoper_sek = 0;
let stoper_ms = 0;
function stoper() {
    if(stoper_ms>=9) {stoper_ms=0; stoper_sek++; }
    else{ stoper_ms++; }
    const elemeStoper = document.getElementById("Stoper");
    elemeStoper.innerHTML = "<i>" + stoper_sek + "." + stoper_ms + "</i>";

}
let stoperID = null;
function start_stoper(){
    stoperID = setInterval(stoper, 100);
    console.log(stoperID);
}
function stop_stoper() {
    clearInterval(stoperID);

}
window.onload = function() {zegar(); start_stoper(); }