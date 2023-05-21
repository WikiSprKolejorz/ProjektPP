//alert();
//szablon na bazie funkcja
function samolot(id, model, liczbaPas, klasa, rok, stronaProd)
{
    this.id = id;
    this.model = model;
    this.liczbaPas = liczbaPas;
    this.klasa = klasa;
    this.rok = rok;
    this.stronaProd = stronaProd
}

const tabSamoloty=[];
tabSamoloty [0]= new samolot(1, "737", 200, "Pasażerski", 2004, "https://www.boeing.com/");
tabSamoloty [1]= new samolot(2, "Embraer 170", 150, "Pasażerski", 2002, "https://embraer.com/global/en");
tabSamoloty [2]= new samolot(3, "Boeing 747", 400, "Pasażerski", 1969, "https://www.boeing.com/");
tabSamoloty [3]= new samolot(4, "Airbus A380", 600, "Pasażerski", 2005, "https://www.airbus.com/en");
tabSamoloty [4]= new samolot(5, "Boeing 777", 300, "Pasażerski", 1996, "https://www.boeing.com/");
//console.log(ob_sam1);

//console.table(tabSamoloty);

let wyswietl = (tab)=> {

    let txt="";
    txt += `<tr>
    <th> Id </th>
    <th> Model </th>
    <th> Liczba Pasażerów </th>
    <th> Klasa </th>
    <th> Rok </th>
    <th> Strona Producenta </th>
    </tr>`;

    tab.forEach(obiekt => {
        txt+= "<tr>";
        txt+= "<td>" + obiekt.id + "</td>";       //dla for tab[i].id
        txt+= "<td>" + obiekt.model + "</td>";
        txt+= "<td>" + obiekt.liczbaPas + "</td>";
        txt+= "<td>" + obiekt.klasa + "</td>";
        txt+= "<td>" + obiekt.rok + "</td>";
        txt+= "<td><a href=" + obiekt.stronaProd +">" + "Strona www </a>" + "</td>";
        txt+= "</tr>";
        
    });
    const elTablica= document.getElementById("tablica");
    elTablica.innerHTML = txt;
   
}