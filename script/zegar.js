//alert();

function zegar(){
    const czasTeraz = new Date();
    let godzina = czasTeraz.getHours();
    let minuta = czasTeraz.getMinutes();
    let sekunda = czasTeraz.getSeconds();
    let czasWartosc = (godzina>12)? godzina-12 : godzina;
    //czasWartosc = (godzina==0)? 12 : godzina-12;
    czasWartosc += (minuta<=9)? ":0" + minuta : ":" + minuta;
    czasWartosc += (sekunda<=9)? ":0" + sekunda : ":"+ sekunda;
    czasWartosc += (godzina > 12)? "PM" : "AM";
    

    const elementZegarDiv = document.getElementById("Zegar");
    elementZegarDiv.innerHTML = "<b>" + czasWartosc + "</b>";    
    setTimeout(zegar,1);      // czasTeraz.toTimeString() zamiast czasWartosc
}


function data(){
    const dzisData = new Date();
    let dzien = dzisData.getDate();
    let miesiac = dzisData.getUTCMonth()+1;
    miesiac = (miesiac>12)? miesiac%12 : miesiac ;

    let rok = dzisData.getFullYear();
    
    const elementDataDiv = document.getElementById("Data");
    elementDataDiv.innerHTML = "<b>" + dzien + "-"+ miesiac + "-" + rok + "</b>";
}
//stoper
// s.ms*100   1.1

let stoper_sek = 0;
let stoper_ms = 0;
let stoperID = null;

function stoper() {
    if (stoper_ms >= 9) {
      stoper_ms = 0;
      stoper_sek++;
    } else {
      stoper_ms++;
    }

    const elemeStoper = document.getElementById("Stoper");
    elemeStoper.innerHTML = "<i>" + stoper_sek + "." + stoper_ms + "</i>";
}

function start_stoper() {
    stoperID = setInterval(stoper, 100);
}

function stop_stoper() {
    clearInterval(stoperID);
}

function zapiszStanStopera() {
    sessionStorage.setItem("stoper_sek", stoper_sek);
    sessionStorage.setItem("stoper_ms", stoper_ms);
}

function zaladujStanStopera() {
    stoper_sek = parseInt(sessionStorage.getItem("stoper_sek")) || 0;
    stoper_ms = parseInt(sessionStorage.getItem("stoper_ms")) || 0;
}

window.onload = function() {
    zegar();
    data();
    zaladujStanStopera();
    start_stoper();
};

window.addEventListener("beforeunload", function() {
    zapiszStanStopera();
});




