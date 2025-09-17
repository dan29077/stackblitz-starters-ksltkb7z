// 01:
let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

// 02:
console.log("FOR:");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

// 03:
console.log("WHILE:");
let j = 0;
while (j < frutas.length) {
  console.log(`Fruta na posição ${j}: ${frutas[j]}`);
  j++;
}
// 04:
console.log("DO...WHILE:");
let k = 0;
do {
  console.log(`Fruta na posição ${k}: ${frutas[k]}`);
  k++;
} while (k < frutas.length);
// 05:
console.log("FOR...OF:");
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}
