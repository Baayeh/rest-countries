import { getCountries } from '../services/countries.js';

import renderFilter from './Filter.js';

import populate from './CountryDetails.js';

const content = document.querySelector('#content');

let countryList;

const countryCard = (item) => {
  const html = `
    <div class="card rounded-md overflow-hidden shadow-md md:w-72 border" data-id="${item.cca3}">
      <div class="card-img w-full h-48 bg-center bg-cover" style="background-image: url(${item.flags.svg})"></div>
      <div class="card-body p-6">
        <h3 class="font-bold text-3xl md:text-2xl">${item.name.common.length > 15 ? `${item.name.common.slice(0, 15)}...` : item.name.common}</h3>
        <div class="details mt-4">
          <p class="text-md">
            <span class="font-semibold">Population: </span>
            <span>${item.population.toLocaleString('en-US')}</span>
          </p>
          <p class="text-md">
            <span class="font-semibold">Region: </span>
            <span>${item.region}</span>
          </p>
          <p class="text-md">
            <span class="font-semibold">Capital: </span>
            <span>${item.capital}</span>
          </p>
        </div>
      </div>
      <div class="card-actions px-6 pb-4">
        <button type="button" class="detailBtn border-2 px-4 py-2 rounded-md hover:bg-slate-400 hover:text-white hover:shadow-inner transition ease-out duration-300">See Details</button>
      </div>
    </div>`;
  return html;
};

const buttonClick = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('detailBtn')) {
        const code = card.getAttribute('data-id');
        const result = countryList.find((country) => country.cca3 === code);
        populate(result);
        const back = document.querySelector('.back');
        // eslint-disable-next-line no-use-before-define
        back.addEventListener('click', renderMain);
      }
    });
  });
};

const findCountry = () => {
  const input = document.querySelector('#country');
  input.addEventListener('keyup', (e) => {
    e.preventDefault();
    const countryName = input.value;
    let filteredCountries = '';
    const result = countryList.filter((country) => (
      country.name.common.toLowerCase().startsWith(countryName.toLowerCase())
    ));
    result.forEach((country) => {
      const list = countryCard(country);
      filteredCountries += list;
    });
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML = filteredCountries;
    buttonClick();
  });
};

const filterByRegion = () => {
  const selectForm = document.querySelector('#select-form');
  selectForm.addEventListener('change', () => {
    const [region] = selectForm.elements;
    let filteredCountries = '';
    const result = countryList.filter((country) => (
      country.region.toLowerCase() === region.value
    ));
    result.forEach((country) => {
      const list = countryCard(country);
      filteredCountries += list;
    });
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML = filteredCountries;
    buttonClick();
  });
};

const main = async () => {
  let allCountries = '';
  await getCountries().then((data) => {
    countryList = data;
    countryList.forEach((country) => {
      const list = countryCard(country);
      allCountries += list;
    });

    const main = document.createElement('main');
    main.classList.add('main', 'px-8', 'py-10', 'flex', 'flex-col', 'flex-wrap', 'gap-14', 'md:flex-row', 'md:justify-center');
    main.innerHTML = allCountries;
    content.innerHTML = '';
    content.innerHTML = renderFilter();
    content.appendChild(main);
    buttonClick();
    findCountry();
    filterByRegion();
  });
};

const renderMain = () => {
  main();
};

export default renderMain;
