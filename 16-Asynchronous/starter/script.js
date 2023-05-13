'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

///////////////////////////////////////
// new URL: https://restcountries.com/v2/

// 1. XML HTTP request
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}M people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('bharat');
// getCountryData('Portugal');
// getCountryData('USA');

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('France');

// Callback Hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// // Promises using fetch

// // old
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// // new
// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// // Consuming Promise

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// const getCountryData = country =>
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));

// getCountryData('spain');

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`); // throwing sends a rejected promise
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sadfsdf';
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}🔥🔥🔥`);
//       renderError(`Something went wrong ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('asdsad');

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country Not Found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No Neighbour Found!');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country Not Found`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Handling Errors

btn.addEventListener('click', function () {
  getCountryData('Australia');
});
