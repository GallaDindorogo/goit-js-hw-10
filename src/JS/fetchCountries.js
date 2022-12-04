const URL = `https://restcountries.com/v3.1/name/`;
const FIELDS = `?fields=name,capital,population,area,flags,languages`;

export function fetchCountries(name) {
  return fetch(`${URL}${name}${FIELDS}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков

// https://restcountries.com/v3.1/name/{name}?fullText=true
// https://restcountries.com/v3.1/capital/{capital}

// "flags": {
//   "svg": "https://restcountries.com/data/per.svg",
//   "png": "https://restcountries.com/data/png/per.png"
// }
// https://restcountries.com/v3.1/lang/{lang}
