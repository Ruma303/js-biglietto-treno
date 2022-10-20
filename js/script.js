// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// PRENDI chilometri desiderati, forza in valore numerico;
// CALCOLA km * 0,21 = prezzo iniziale €/Km;

// PRENDI età;
// SE età < 18 {
//     APPLICA 20% di sconto;
//     printa "questo è il tuo prezzo:  max 2 decimali"; 
// } else {
//     non applicare sconto;
//     printa prezzo finale.
// }

// SE SE età > 65 {69

//     APPLICA 40% di sconto;
//     printa "questo è il tuo prezzo:"; 
// } else {
//     non applicare sconto;
//     printa prezzo finale, max 2 decimali.
// }


const path = parseFloat(prompt("Gentile cliente, quanti chilometri percorrerà con il nostro treno?"));
let price = parseInt(path * 0.21).toFixed(2);
const age = parseInt(prompt('Quanti anni hai?'));

if (age < 18) {
     let underagePrice = parseInt(price * 0.80).toFixed(2);
     console.log("Grazie alla promozione riservata ai minorenni hai diritto allo sconto del 20%. Il suo nuovo prezzo del biglietto è", underagePrice,"€.  Selezioni la modalità di pagamento alla cassa automatica.");
 }
else if (age > 65) {
     let newPrice = parseInt(price * 0.60).toFixed(2);
    console.log("Grazie alla promozione riservata agli Over 65 hai diritto allo sconto del 40%. Il suo nuovo prezzo del biglietto è", newPrice,"€.  Selezioni la modalità di pagamento alla cassa automatica.");
} else {
    console.log("Gentile cliente, il costo del biglietto è di " + price + "€. Selezioni la modalità di pagamento alla cassa automatica.")
}

