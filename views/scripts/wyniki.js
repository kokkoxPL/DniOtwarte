var wynik = document.querySelectorAll(".scoretr");
var osoba = document.querySelectorAll(".nicktr");


for (let i = 0; i < wynik.length; i++) {
if (wynik[i].innerHTML == 1) {
  wynik[i].style.background = "#ffb7b7";
  osoba[i].style.background = "#ffb7b7";
}

if (wynik[i].innerHTML == 2) {
  wynik[i].style.background = "#ff9999";
  osoba[i].style.background = "#ff9999";
}

if (wynik[i].innerHTML == 3) {
  wynik[i].style.background = "#ff7373";
  osoba[i].style.background = "#ff7373";
}

if (wynik[i].innerHTML == 4) {
  wynik[i].style.background = "#ff6363";
  osoba[i].style.background = "#ff6363";
}

if (wynik[i].innerHTML == 5) {
  wynik[i].style.background = "#ff3c3c";
  osoba[i].style.background = "#ff3c3c";
}

if (wynik[i].innerHTML == 6) {
  wynik[i].style.background = "#ff2a2a";
  osoba[i].style.background = "#ff2a2a";
}
  if (wynik[i].innerHTML == 7) {
    wynik[i].style.background = "#ff1919";
    osoba[i].style.background = "#ff1919";
}

if (wynik[i].innerHTML == 8) {
  wynik[i].style.background = "#ff0606";
  osoba[i].style.background = "#ff1919";
}

if (wynik[i].innerHTML == 9) {
  wynik[i].style.background = "#de0202";
  osoba[i].style.background = "#de0202";
}

if (wynik[i].innerHTML == 10) {
  wynik[i].style.background = "#ad0000";
  osoba[i].style.background = "#ad0000";
}
}
