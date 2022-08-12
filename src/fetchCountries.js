const MAIN_URL = `https://restcountries.com/v3.1/name`;
const FILTER = `fields=name,capital,population,flags,languages`;

export default function fetchCountries(name) {
  fetch('https://restcountries.com/v3.1/name/{name}');
}
