const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
// ab hier Aufgabe
console.log("%c===== lev1_1: Math.PI =====", "background-color:green");
console.log(Math.PI);
// Deklariere die const PI mit dem passenden Wert.
// Runde den Wert von PI auf zwei Dezimalstellen und weise den Wert der Variablen roundedPI zu.
const PI = Math.PI;
roundedPI = PI.toFixed(2);
const rounded_PI = PI.toFixed(2);
// Gib roundedPI in der Konsole aus.
console.log(rounded_PI);
console.log("%c===== lev1_2: Math.round() =====", "background-color:green");
lev1_3: Math.random(), Math.floor();

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

console.log(rounded_PI);
console.log(
  "%c===== lev1_3: Math.random(), Math.floor() =====",
  "background-color:green"
);
// Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
// Deklariere die Variable randomNum1_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
// Deklariere die Variable randomNum1_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10);
console.log(Math.random() * 10);
let randomNUm1_100 = Math.floor(Math.random() * 100);
console.log(Math.random() * 100);
console.log(
  "%c===== lev1_4: Math.min Math.max =====",
  "background-color:green"
);
// In dieser Übung werden wir Math.min und Math.max kennenlernen.

// Finde mit Math.min den niedrigsten Wert aus den Zahlen im Kommentar.
// Finde nun mit Math.max den höchsten Wert aus den Zahlen im Kommentar.
const min = Math.min(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);

const max = Math.max(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);
console.log(min, max);
console.log(
  "%c===== lev2_2: Math.random() Math.floor() Game =====",
  "background-color:green"
);
// Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:

// Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

// Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.
// Funktion deklarieren
let userInput = document.getElementById("userInput");
let output = document.getElementById("output");

function game() {
  userInput.innerHTML = prompt("Schätzen Sie eine Nummer zwischen 1 und 10");
  console.log(userInput);
  let number = Math.ceil(Math.random() * 10);
  console.log(number);
  if (number === number.value) {
    console.log("Jipiieh! Du hast richtig geraten.");
  } else {
    console.log("Du hast verloren. Die Nummer lautet " + number);
  }
}
game();
console.log("%c===== Übung lev2_1 =====", "background-color:green");

// Der Code dazu ist im Kommentarbereich.

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
// Verwende map() und greife auf alle name zu.
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
// Verwende map() und greife auf alle preiseGramEuro zu.
// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
// Verwende map() und greife auf alle veraenderung zu.
// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu
// Gib alles als Tabelle in deinem HTML-Dokument aus.

// Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.
let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
let metalleName = [];
edelMetallPreise.forEach((a) => {
  metalleName.push(a.name);
  console.log(metalleName);
});
// Verwende map() und greife auf alle name zu.
let map = edelMetallPreise.map((b) => b.name);
console.log(map);
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
let preise = [];
edelMetallPreise.forEach(function (metalle) {
  console.log(metalle.preiseGramEuro);
  preise.push(metalle.preiseGramEuro);
});
console.log(preise);

let map2 = edelMetallPreise.map((metalle) => {
  return metalle.preiseGramEuro;
});
console.log(map2);
// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
let prozente = [];
edelMetallPreise.forEach(function (metalle) {
  console.log(metalle.veraenderung);
  prozente.push(metalle.veraenderung);
});
console.log(prozente);
// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
let map3 = edelMetallPreise.map((metalle) => {
  return metalle.veraenderung;
});
console.log(map3);
// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu
let expensive = edelMetallPreise.filter((metalle) => {
  return metalle.preiseGramEuro > 50;
});
console.log(expensive);
// Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.
document.write(
  "<table cellspacing='2' cellpadding='5' border='4' width='50%'>"
);
document.write("<th>" + "Name");
document.write("<th>" + "PreiseGrammEuro");
document.write("<th>" + "Veränderung");
for (i of edelMetallPreise) {
  document.write("<tr>");
  document.write("<td>" + i.name + "</td>");
  document.write("<td>" + i.preiseGramEuro + "</td>");
  document.write("<td>" + i.veraenderung + "</td>");
  document.write("</tr>");
}
