//alert();
//szablon na bazie funkcja
function kibice(Lp, druzyna, rok, liga, woj, stronaKlub)
{
    this.Lp = Lp;
    this.druzyna = druzyna;
    this.rok = rok;
    this.liga = liga;
    this.woj = woj;
    this.stronaKlub = stronaKlub
}

const tabKibice=[];
tabKibice [0]= new kibice(1, "Arka Gdynia", 1929, "I liga", "Pomorskie", "http://www.arka.gdynia.pl/");
tabKibice [1]= new kibice(2, "Cracovia", 1906, "Ekstraklasa", "Małopolskie", "https://cracovia.pl/");
tabKibice [2]= new kibice(3, "ŁKS Łódź", 1908, "I liga", "Łódzkie", "https://lkslodz.pl/");
tabKibice [3]= new kibice(4, "KSZO Ostrowiec Świętokrzyski", 1929, "III liga", "Świętokrzyskie", "https://kszo1929ostrowiec.pl/");

//console.log(ob_kib1);

//console.table(tabKibice);

let wyswietl = (tab)=> {

    let txt="";
    txt += `<tr>
    <th> Lp. </th>
    <th> Drużyna </th>
    <th> Rok Założenia </th>
    <th> Klasa rozgrywkowa </th>
    <th> Wojewodztwo </th>
    <th> Strona Klubu </th>
    </tr>`;

    tab.forEach(obiekt => {
        txt+= "<tr>";
        txt+= "<td>" + obiekt.Lp + "</td>";       //dla for tab[i].id
        txt+= "<td>" + obiekt.druzyna + "</td>";
        txt+= "<td>" + obiekt.rok + "</td>";
        txt+= "<td>" + obiekt.liga + "</td>";
        txt+= "<td>" + obiekt.woj + "</td>";
        txt+= "<td><a href=" + obiekt.stronaKlub +">" + "Strona www </a>" + "</td>";
        txt+= "</tr>";
        
    });
    const elTablica= document.getElementById("tablica");
    elTablica.innerHTML = txt;
   
}