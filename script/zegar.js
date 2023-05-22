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

function saveStopwatchState() {
  localStorage.setItem("stoper_sek", stoper_sek);
  localStorage.setItem("stoper_ms", stoper_ms);
}

function loadStopwatchState() {
  stoper_sek = parseInt(localStorage.getItem("stoper_sek")) || 0;
  stoper_ms = parseInt(localStorage.getItem("stoper_ms")) || 0;
}

window.onload = function() {
  loadStopwatchState();
  start_stoper();
};

window.addEventListener("beforeunload", function() {
  saveStopwatchState();
});


