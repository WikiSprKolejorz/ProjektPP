
function podmienKlase(idObiektu, nazwaKlasy){
    const element= document.getElementById(idObiektu);
    element.className=nazwaKlasy

}

//ruchomy tekst....
 let napis= "ruchomy tekst....";
 function ruchomyTekst(){
    napis= napis.substring(1, napis.length) + napis.substring(0,1);
    //napis.charAt(0);
    const element= document.getElementById("rTekst");
    element.value=napis;
 }
 let setID= null;
 function ruchomyTekstStart(){
    clearInterval(setID);
    setID= setInterval(ruchomyTekst, 200);
 }

 function ruchomyTekstStop(){
    clearInterval(setID);
    
 }