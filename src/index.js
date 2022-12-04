import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import './css/styles.css';

import { getRefs } from './JS/refs';
import { fetchCountries } from './JS/fetchCountries';
import { renderCountryList } from './JS/template';
import { renderCountryCard } from './JS/template';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
const { inputSearch, countryList, countryInfo } = refs;

inputSearch.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  const search = inputSearch.value.trim();
  if (search === '') {
    clear();
    return;
  }
  fetchCountries(search)
    .then(countries => {
      console.log(countries);
      if (countries.length > 10) {
        toMatchFound();
        clear();
        return;
      }
      if (countries.length > 1 && countries.length <= 10) {
        const markUpList = countries.map(country => renderCountryList(country));
        countryList.innerHTML = markUpList.join('');
        countryInfo.innerHTML = '';
      }
      if (countries.length === 1) {
        const markUpCard = countries.map(country => renderCountryCard(country));
        countryList.innerHTML = '';
        countryInfo.innerHTML = markUpCard.join('');
      }
    })
    .catch(error => {
      notFound();
      clear();
      return error;
    });
}

function clear() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function toMatchFound() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function notFound() {
  Notify.failure('Oops, there is no country with that name');
}
