/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 

MILESTONE 1:
Iniziamo implementando il programma: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2 (BONUS):
Realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/

// Dati
const pricePerKm = 0.21;
const adult = 18;
const overAdult = 65;

const userNameInput = document.getElementById("user-name");
const userAge = document.getElementById("user-age");
const submitBtn = document.getElementById("submit");

const title = document.querySelector("h1");
const paragrhap = document.querySelector("p");
// INPUT
// Chiedere il numero di chilometri da percorrere
const userKm = parseFloat(prompt("Quanti km vuoi percorrere?"));
console.log(userKm, typeof userKm);

// Chiedere età del passeggero
const userAgeInput = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(userAge, typeof userAge);

// Calcolare biglietto prezzo base
const basePrice = userKm * pricePerKm;
console.log(basePrice);

// Calcolare prezzo SE utente minorenne (sconto 20%)
// Calcolare prezzo SE utente over65 (sconto 40%)
// ALTRIMENTI prezzo pieno (sconto 0%)
let discountPercentage = 0;
if (userAge < adult) {
  discountPercentage = 20;
} else if (userAge > overAdult) {
  discountPercentage = 40;
}
console.log(discountPercentage, typeof(discountPercentage));

//Formula per biglietto prezzo scontato
let finalPrice = basePrice - (basePrice * discountPercentage / 100);
finalPrice = finalPrice.toFixed(2);


// Al click sul bottone submit
submitBtn.addEventListener("click", function() {
    // Perendo valore input
    const userName = userNameInput.value;
    console.log(userName);

    // Inserire valore in h1
    title.innerHTML = `Ciao ${userName}!`;

    // Inserisco valori in p
    paragrhap.innerHTML = `La tua età è: ${userAgeInput}`
})

// OUTPUT
console.log(finalPrice, typeof finalPrice);