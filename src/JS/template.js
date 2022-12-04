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
  <img
    class="capital-flag"
    src="${flags.svg}"
    alt="${name.official}"
    width="200"
  />
  <h2 class="country-title">Country: ${name.official}</h2>
  <div class="country-table">
    <p class="country-table-text">Capital:</p>
    <p class="country-table-value">${capital}</p>
  </div>
  <div class="country-table">
    <p class="country-table-text">Population:</p>
    <p class="country-table-value">${population.toLocaleString()} person</p>
  </div>
  <div class="country-table">
    <p class="country-table-text">Area:</p>
    <p class="country-table-value">${area.toLocaleString()} sq.km</p>
  </div>
  <div class="country-table">
    <p class="country-table-text">Population Density:</p>
    <p class="country-table-value">${Math.round(population / area)} p/sq.km</p>
  </div>
<div class="country-table">
  <p class="country-table-text">Languages:</p>
  <p class="country-table-value">${Object.values(languages)}</p>
</div>
  
</div>
    `;
}
