import BASE_URL from './BASE_URL.js';

// Get list of countries
const getCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  return response.json();
};

// Get specific country using code
const getSpecificCountry = async (code) => {
  const response = await fetch(`${BASE_URL}/alpha/${code}`);
  return response.json();
};

export { getCountries, getSpecificCountry };
