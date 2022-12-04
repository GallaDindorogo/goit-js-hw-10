export function renderCountryList({ flags, name }) {
  return `
    <li class = country-item>
    <img class = 'country-list__flags'
    src="${flags.svg}" 
    alt="${name.official}"
    width=50
    />
    <h2 class = country-list__name>${name.official}</h2>
    </li>
    `;
}

export function renderCountryCard({
  flags,
  name,
  capital,
  population,
  area,
  languages,
}) {
  return `
    <div class="country">
      <img class = "capital-flag" src="${flags.svg}" alt="${
    name.official
  }" width = 200/>
      <h2 class = "country-title">Country: ${name.official}</h2>
      <p class = "country-text">Capital: ${capital}</p>
      <p class="country-text">Population: ${population.toLocaleString()} person</p>
      <p class="country-text">Area: ${area.toLocaleString()} sq.km</p>
      <p class="country-text">Population Density: ${Math.round(
        population / area
      )} p/sq.km</p>

      <p class="country-text">Languages: ${Object.values(languages)}</p>
    </div>
    `;
}
