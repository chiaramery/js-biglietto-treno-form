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

// Costanti
const userNameInput = document.getElementById("user-name");
const submitBtn = document.getElementById("submit");
const userAgeInput = document.getElementById("user-age");
const userKmInput = document.getElementById("user-km");

const title = document.querySelector("h1");
console.log(title);

const paragraph = document.querySelector("p");
console.log(paragraph);

// Variabili
let discountPercentage = 0;

//Al click sul bottone submit
submitBtn.addEventListener("click", function() {
  //Prendo valore input
  const userName = userNameInput.value;
  console.log(userName, typeof(userName));

  const userAge = parseInt(userAgeInput.value);
  console.log(userAge, typeof(userAge));

  const userKm = parseInt(userKmInput.value);
  console.log(userKm, typeof(userKm));

  //Inserisco valore in h1
  title.innerHTML = `Ciao ${userName}! Ecco il tuo biglietto`;

  //Ripulisco input
 userNameInput.value = " ";
 userKmInput.value = " ";
 userAgeInput.value = " ";


// SE il passeggero ha meno di 18 anni
// Sconto 20%
// ALTRIMENTI SE passeggero ha più di 65 anni
// Sconto 40%
// ALTRIMENTI
// Sconto 0%

if (userAge < 18) {
  discountPercentage = 20;
} else if (userAge > 65) {
  discountPercentage = 40;
}

console.log(discountPercentage);

// Calcolare prezzo base
const basePrice = userKm * pricePerKm;
console.log(basePrice);

// Calcolo il prezzo scontato: totalPrice = basePrice - (basePrice * sconto / 100)
let finalPrice = basePrice - (basePrice * discountPercentage / 100);

finalPrice = finalPrice.toFixed(2);

 //Inserisco valore in p
 paragraph.innerHTML = `Costo biglietto: ${finalPrice} euro`;
});