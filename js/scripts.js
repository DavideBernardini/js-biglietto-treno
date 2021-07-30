// Chiedere all'utente il numero di chilometri che vuole percorrere
var km = parseInt(prompt("Indicare il numero di kilometri da percorrere"));
// Chiedere all'utente l'età del passeggero
var age = parseInt(prompt("Indicare l'età del passeggero")); 
// calcora prezzo biglietto intero
var price = parseInt(km * 0.21);
// calcolare prezzo ridotto per minorenni e over 65
if (age <= 18) {
    price = price - (price * 20) / 100;
} else if (age >= 65) {
    price = price - (price * 40) / 100;
}
// Aggiungere totale biglietto nell'html
document.getElementById("ticket_price").innerHTML += price.toFixed(2) + "€";


