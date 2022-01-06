var colori = [
    'red', // Rosso: 0
    'orange', // Arancione: 1
    'yellow', // Giallo: 2
    'lime', // lime: 3
    'aqua', // verde acqua: 4
    'blue', // blu: 5
    'purple' // viola: 6
]


Array.from(document.getElementsByClassName('pulsantino')).forEach(pulsante => {
    // Funzione per cambiare i colori quando si clicca
    pulsante.addEventListener('click', function() {
        if (pulsante.id < '6') {
            pulsante.style.color = colori[parseInt(pulsante.id)]
            pulsante.id++;
        } else {
            pulsante.style.color = colori[6];
            pulsante.style.color = 0;
        }
    })
})