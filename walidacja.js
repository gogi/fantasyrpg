function nazwaCzaru(input) {
    var string = input.value;
    var dlugosc = string.length;
    if ( dlugosc > 50) {
        alert('Nazwa czaru moze miec maksymalnie 50 znakow!');
    }
    else if (dlugosc == 0) {
        alert('Wypelnij pole Nazwa!');
    }
}

function klasyPostaci(selObj) {
    var count = 0;
    for (i = 0; i < selObj.options.length; i++) {
        if (selObj.options[i].selected) {
        count++;
        }
    }
    if(count == 0) {
        alert("Wybierz przynajmniej jedna klase");
    }
    
}
function odblokuj() {
   
    document.getElementById(metry_radio).innerHTML();
//    if((document.getElementById(metry_radio).checked) == true) {
//        alert("UOJEZU!");
//        //document.getElementById(metry_input).disabled = false;
//    }
//    else {
//        alert("UOMATKO!");
//        //document.getElementById(metry_input).disabled = true;
//    }
}