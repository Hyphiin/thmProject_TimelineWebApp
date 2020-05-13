function eintragErstellenAusklappen(){
    document.getElementById("eintragerstellen").innerHTML =
        '<div class="erstellen">Eintrag erstellen<br>' +
        'Title: <input type="text" id="title"><br>' +
        'Text: <input type="text" id="message"><br><br></div>';
}