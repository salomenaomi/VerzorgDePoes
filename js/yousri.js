/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Gebruiker kan de naam van de poes veranderen
var formulierNaam = document.querySelector("#naamgeven");
var naamInvullen = document.querySelector("#geefnaam");
var nieuweTekst = document.querySelector(".empty");

function naamGeven(event) {
    event.preventDefault();
    nieuweTekst.innerHTML = "Hoi! Ik ben " + naamInvullen.value;
}

formulierNaam.addEventListener("submit", naamGeven, false);

// Afbeeldingen die zullen veranderen als gebruiker meerdere keren op een button klikt
// Bron foto's: https://www.vectorstock.com/royalty-free-vector/set-of-cute-cartoon-cat-emotions-vector-23934221
var katIsNeutraal = "images/catnormal.PNG";
var katIsBlij = "images/cathappy.PNG";
var katIsLief = "images/catkiss.PNG";
var katIsVerliefd = "images/catinlove.PNG";
var katIsEenBeetjeVerdrietig = "images/catlittlesad.PNG";
var katIsVerdrietig = "images/catsad.PNG";
var katIsErgVerdrietig = "images/catreallysad.PNG";

// Hier hou ik bij hoevaak een handeling is toegepast op de kat
var aantalKeerSpelen = 0;
var aantalKeerVoeren = 0;
var aantalKeerDrinken = 0;

// Hier koppel ik de buttons aan een variabel
var kat = document.querySelector("#neutralcat");
var speelknopElement = document.querySelector("#spelen");
var voerknopElement = document.querySelector("#voeren");
var bierknopElement = document.querySelector("#bier");

// Hier koppel ik de afbeelding van de kat aan een nieuwe afbeelding
function spelen(  ) {
    kat.src = katIsLief;
    aantalKeerSpelen++;
    if (aantalKeerSpelen > 3) {
        kat.src = katIsVerliefd;
    } else if (aantalKeerSpelen > 1) {
        kat.src = katIsBlij;
    } else {
        kat.src = katIsLief;
    }
}

// Hier koppel ik de afbeelding van de kat aan een nieuwe afbeelding
function voeren(  ) {
    kat.src = katIsBlij;
    aantalKeerVoeren++;
    if (aantalKeerVoeren > 3) {
        kat.src = katIsEenBeetjeVerdrietig;
    } if (aantalKeerVoeren > 5) {
        kat.src = katIsVerdrietig;
    } if (aantalKeerVoeren > 6) {
        kat.src = katIsErgVerdrietig;
    } else if (aantalKeerDrinken > 1) {
        kat.src = katIsNeutraal;
    } else {
        kat.src = katIsVerliefd;
    }
}

// Hier koppel ik de afbeelding van de kat aan een nieuwe afbeelding, en verandert de afbeelding als ik de kat vaker drinken geef
function drinken(  ) {
    aantalKeerDrinken++;
    if (aantalKeerDrinken > 3) {
        kat.src = katIsEenBeetjeVerdrietig;
    } else if (aantalKeerDrinken > 1) {
        kat.src = katIsNeutraal;
    } else {
        kat.src = katIsVerliefd;
    }
}

//Hier roep ik de functies aan waarmee ik de kat eten en drinken geef en met de kat speel
speelknopElement.addEventListener("click", spelen);
voerknopElement.addEventListener("click", voeren);
bierknopElement.addEventListener("click", drinken);

// Door keypress r reset het spel zich
// Bron: https://www.youtube.com/watch?v=VBVOXTgXX2U
function reset(key) {
    if (key.keyCode == "82") {
        aantalKeerSpelen = 0;
        aantalKeerVoeren = 0;
        aantalKeerDrinken = 0;
        kat.src = katIsNeutraal;
    }
}

window.addEventListener("keydown", reset, false);

// Array met alle etenswaren en het drinken
var acties = document.querySelector(".acties");
var etenswaren = ["Geef je kat hamburgers 🍔", "Geef je kat pizza 🍕", "Geef je kat pannenkoeken 🥞", "Geef je kat taco's 🌮", "Geef je kat burrito's 🌯", "Geef je kat frietjes 🍟", "Geef je kat taart 🥧", "Geef je kat fruit 🍒🥝🍓", "Geef je kat fruit 🍉🍐🍎"];
var drankjes = ["Geef je kat bier 🍻", "Geef je kat wijn 🥂", "Geef je kat een milkshake 🥤", "Geef je kat melk 🥛", "Geef je kat koffie ☕", "Geef je kat een cocktail 🍹🍸", "Geef je kat boba 🧋"];

// Als ik op de voerknop druk, zal de tekst op de knop veranderen
function etenVeranderen() {
    voerknopElement.innerHTML = etenswaren[Math.floor(Math.random() * etenswaren.length)];
}

acties.addEventListener("click", etenVeranderen, false);

// Als ik op de drinkknop druk, zal de tekst op de knop veranderen
function drankjesVeranderen() {
    bierknopElement.innerHTML = drankjes[Math.floor(Math.random() * drankjes.length)];
}

acties.addEventListener("click", drankjesVeranderen, false);
