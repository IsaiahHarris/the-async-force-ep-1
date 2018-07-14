'use strict'
let darthVader = new XMLHttpRequest();
darthVader.open('GET', 'https://swapi.co/api/people/4/')
darthVader.send();

darthVader.addEventListener('load', function () {
  const darthVaderObj = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerHTML = darthVaderObj.name;
});

let darthVaderHome = new XMLHttpRequest();
darthVaderHome.open('GET', 'https://swapi.co/api/planets/1/')
darthVaderHome.send();

darthVaderHome.addEventListener('load', function () {
  const darthVaderObj = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerHTML = darthVaderObj.name;
})

let hanSolo = new XMLHttpRequest();
hanSolo.open('GET', 'https://swapi.co/api/people/14/');
hanSolo.send();

hanSolo.addEventListener('load', function () {
  const HanSoloObj = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerHTML = HanSoloObj.name;
})

let hanSoloSpecies = new XMLHttpRequest();
hanSoloSpecies.open('GET', 'https://swapi.co/api/species/1/');
hanSoloSpecies.send();
hanSoloSpecies.addEventListener('load', function () {
  const hanSoloObj = JSON.parse(this.responseText);
  document.getElementById('person14Species').innerHTML = hanSoloObj.name;
})

let allFilms = new XMLHttpRequest();
allFilms.open('GET', 'https://swapi.co/api/films/');
allFilms.send();
allFilms.addEventListener('load', function () {
  let filmObj = JSON.parse(this.responseText);
  let filmLiss = document.getElementById('filmList');

  for (let i = 0; i < filmObj.results.length; i++) {
    let listElements = document.createElement('li');
    listElements.innerHTML = filmObj.results[i].title;
    filmLiss.appendChild(listElements);

    for (let j = 0; j < filmObj.results[i].planets.length; j++) {
      const getPlanets = new XMLHttpRequest();
      getPlanets.open('GET', filmObj.results[i].planets[j]);
      getPlanets.send();

      getPlanets.addEventListener('load', function () {
        const planetObj = JSON.parse(this.responseText);
        let planetElement = document.createElement('ul');
        planetElement.innerHTML = planetObj.name;
        listElements.appendChild(planetElement);
      })
    }
  }
});

