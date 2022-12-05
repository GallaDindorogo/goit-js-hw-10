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

