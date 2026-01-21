import type { Country } from '../type/types';

const BASE_URL = 'https://restcountries.com/v3.1';

const countriesAPI = {
  getAllCountries: async (): Promise<Country[]> => {
    try {
      const response = await fetch(`${BASE_URL}/all?fields=name,flags,population,region,capital,cca3,region`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  },

  getCountryByCca3: async (cca3: string): Promise<Country> => {
    try {
      const response = await fetch(`${BASE_URL}/alpha/${cca3}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error(`Error fetching flag for country code ${cca3}:`, error);
      throw error;
    }
  },

  async getCountriesByCodes(codes: string[]) {
    const res = await fetch(
      `${BASE_URL}/alpha?codes=${codes.join(',')}&fields=name,cca3`
    )

    if (!res.ok) {
      throw new Error('Failed to fetch border countries')
    }

    return res.json()
  },
  

  getFilteredCountries: async (region: string): Promise<Country[]> => {
    try {
      const response = await fetch(`${BASE_URL}/region/${region}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching filtered countries:', error);
      throw error;
    }
  },
  
}




export default countriesAPI;