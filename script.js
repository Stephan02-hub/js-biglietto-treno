// 1- Chiedo all'utente il numero di km che vuole percorrere
// 2- Chiedo all'utente l'eta del passaggero
// 3- Prezzo km (0.21 € al km)
// 4- Se l'eta del passaggero e < 18 anni viene applicato uno sconto del 20%
//       - Controlo il costo del biglieto
// 5- Se l'eta del passaggero e > 65 anni viene applicato uno sconto del 40%
//       - Controlo il costo del biglieto
// 6- Prezzo finale in forma umana (massimo due decimali)


const km = Number(prompt(`Inserisci il numero di chilometri da percorrere`));

console.log(km);

const age = Number(prompt(`Inserisci la tua eta`));

console.log(age);

const priceKm = 0.21;

console.log(priceKm);

const priceFinalKm = kmDistanceClient * priceKm;
    console.log(priceFinalKm);

const Under = 20;

const Over = 40;

const discountPriceUnder = (priceFinalKm * Under) / 100;

const discountPriceOver = (priceFinalKm * Over) / 100;

const under = 18;

const over = 65;

if (age < under) {
    const priceUnderFinal = priceFinalKm - discountPriceUnder;
    alert(`Hai uno sconto del 20% e il prezzo finale e ${priceUnderFinal.toFixed(2)} €`);
    console.log(priceUnderFinal.toFixed(2));

} else if (age >= over) {
    const priceOverFinal = priceFinalKm - discountPriceOver;
    alert(`Hai uno sconto del 40% e il prezzo finale e ${priceOverFinal.toFixed(2)} €`)
    console.log(priceOverFinal.toFixed(2))

} else {
    let tariffNormal = priceFinalKm;
    console.log(priceFinalKm.toFixed(2));
    alert(`Il prezzo e di ${priceFinalKm.toFixed(2)} €`)
}