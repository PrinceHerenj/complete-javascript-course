'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
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
  countriesContainer.style.opacity = 1;
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

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country Not Found`)
    .then(data => {
      renderCountry(data[0]);
      let neighbour;
      if (data[0].hasOwnProperty('borders')) neighbour = data[0].borders[0];

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

// getCountryData('France');

// btn.addEventListener('click', function () {
//   getCountryData('Australia');
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
// console.log('Lottery being drawn');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 🤑');
//     } else {
//       reject('You Lose');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('waited for 1 second'));

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

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('5 seconds passed');
//     return wait(1);
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('abc')).catch(x => console.error(x));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=9501f72e613d45c0adebde5fcd97a44a
//   `,
//     { method: 'GET' }
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       const city = data.features[0].properties.city;
//       const country = data.features[0].properties.country;
//       console.log(`You are in ${city}, ${country}`);
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);

//       return fetch(
//         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=9501f72e613d45c0adebde5fcd97a44a
//     `,
//         { method: 'GET' }
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       const city = data.features[0].properties.city;
//       const country = data.features[0].properties.country;
//       console.log(`You are in ${city}, ${country}`);
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// whereAmI();

// // Challenge 2
// const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 1 Loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 2 Loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//   })
//   .catch(err => console.error(err));

const whereAmI = async function () {
  // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res)) is the same as:
  // Geolocation
  try {
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=9501f72e613d45c0adebde5fcd97a44a
      `,
      { method: 'GET' }
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.features[0].properties.country}`
    );
    if (!res.ok) throw new Error('Problem getting location data');
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.features[0].properties.state}, ${dataGeo.features[0].properties.country}`;
  } catch (err) {
    console.log(err.message);
    renderError(`Something went wrong ${err.message}`);
    // Rejeect promise returned from async function
    throw err;
  }
};

// console.log('1: Will get location');

// whereAmI()
//   .then(loc => console.log(`2: ${loc}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const res = await whereAmI();
//     console.log(res);
//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     console.log(`Finished getting location`);
//   }
// })();

// btn.addEventListener('click', whereAmI);

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries(`Portugal`, `France`, `Germany`);

// // Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long!`));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // // Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
// ]).then(res => console.log(res));

// // Promise.any

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.resolve('Another Success'),
//   Promise.reject('Error'),
// ]).then(res => console.log(res));

const imgContainer = document.querySelector('.images');

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('img-1 loaded');
    await wait(2);
    img.style.display = `none`;

    img = await createImage(`img/img-2.jpg`);
    console.log('img-2 loaded');
    await wait(2);
    img.style.display = `none`;
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
