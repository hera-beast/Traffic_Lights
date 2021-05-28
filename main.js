window.onload = function() {
  stopTraffic();
};
var BROJAC = 0;
var svetla = document.getElementsByClassName("boje");
var crveno = svetla[0];
var zuto = svetla[1];
var zeleno = svetla[2];

function stopTraffic(){
crveno.style.background = "red";  
zuto.style.background = "gray";
zeleno.style.background = "gray";
}
function prepareToGO(){
crveno.style.background = "red";  
zuto.style.background = "yellow";
zeleno.style.background = "gray";
}
function goodToGO(){
crveno.style.background = "gray";  
zuto.style.background = "gray";
zeleno.style.background = "green";
}

function KontrolerVremena() {
BROJAC++;
console.log(BROJAC);
    switch (BROJAC) {
        case 1:
		console.log("ZAUSTAVLJAMO SAOBRAĆAJ");
            stopTraffic();
            break;

        case 5:
		console.log("PRIPREMA ZA KRETANJE");
            prepareToGO();
            break;
		case 8:
		console.log("VOZI");
            goodToGO();
            break;	

        case 15:
		console.log("ZAUSTAVLJAMO SAOBRAĆAJ I RESETUJEMO BROJAČ NA 0");
            stopTraffic();
            BROJAC = 0;
            break;
    }
}

setInterval("KontrolerVremena()", 1000);