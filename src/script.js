var colori = [
    'red', // Rosso: 0
    'orange', // Arancione: 1
    'yellow', // Giallo: 2
    'lime', // lime: 3
    'aqua', // verde acqua: 4
    'blue', // blu: 5
    'purple' // viola: 6
]
var alreadyClicked = false;


Array.from(document.getElementsByClassName('pulsantino')).forEach(pulsante => {
    // Funzione per cambiare i colori quando si clicca
    pulsante.addEventListener('click', function() {
        if (pulsante.id < '6') {
            pulsante.style.color = colori[parseInt(pulsante.id)]
            pulsante.id++;
        } else {
            pulsante.style.color = colori[6];
            pulsante.id = '0';
        }
    })
})

// Funzione che aggiunge un ascoltatore per il click al <button> con la classe "pulsantone"
var listaCheContieneSoloUnElemento = Array.from(document.getElementsByClassName("pulsantone"));
var pulsante = listaCheContieneSoloUnElemento[0];
pulsante.addEventListener("click", function() {
    // La funzione deve rendere lo sfondo del pulsante trasparente ('transparent')
    pulsante.style.opacity = '1';
    
    if (!alreadyClicked) {
        var icon = document.getElementsByTagName('link')[0];
        icon.rel = 'icon';
        icon.href = '../icons/spara coriandoli.ico';
        document.getElementsByTagName('head')[0].appendChild(icon);
        alreadyClicked = true;
    }
})