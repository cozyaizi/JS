let souvenir = 75;
let trinket = 112;

let NumberOfSouvenir = Number(prompt("How many souvenirs do you buy", ""));
let NumberOfTrinket = Number(prompt("How many trinket do you buy", ""));

console.log(
    (NumberOfSouvenir * souvenir + NumberOfTrinket * trinket)
);