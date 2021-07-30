// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// CREIAMO UN OGGETTO CHE DESCRIVE UNO STRUMENTO

cartaStudente = {
    nome: "Giovanni",
    cognome: "Rossi",
    età: "17"
}

for (let key in cartaStudente) {
    console.log(key + ": " + cartaStudente[key]);
}


//  CREIAMO UN ARRAY DI OGGETTI

classe = [
    {
        nome: "Giovanni",
        cognome: "Rossi",
        età: "17"
    },

    {
        nome: "Mario",
        cognome: "Verdi",
        età: "18"
    },
    
    {
        nome: "Marco",
        cognome: "Gialli",
        età: "15"
    },
    
    {
        nome: "Veronica",
        cognome: "Rossi",
        età: "16"
    },

]

console.log(classe);

// ACCEDIAMO AGLI ELEMENTI DEL NOSTRO ARRAY (IN QUESTO CASO AGLI OGGETTI)

for (let i=0 ; i<classe.length; i++ ) {
    console.log(classe[i]);
}


// DIAMO LA POSSIBILITA' TRAMITE 3 PROMPT DI INSERIRE UN NUOVO OGGETTO

var nuovoAlunno = {};

var nuovoNome = prompt("Inserisci il nome");
var nuovoCognome = prompt("Inserisci il cognome");
var nuovaEtà = prompt("Inserisci l'età");
nuovoAlunno.nome = nuovoNome;
nuovoAlunno.Cognome = nuovoCognome;
nuovoAlunno.età = nuovaEtà;

classe.push(nuovoAlunno);


console.log(classe);
