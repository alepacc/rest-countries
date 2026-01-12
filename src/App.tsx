import {useEffect, useState } from 'react'
import { countriesAPI } from './utils/api';
import type { Country } from './type/country';


function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await countriesAPI.getAllCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries in App component:', error);
        // TODO: Handle error appropriately in the UI
      }
    };

    fetchData();
  }, []);


  // input filtro 

  return (
    <>
      <div className="container">
        <section className='header'>
          <h1>Where in the world?</h1>
          <button className='header__button'>Dark Mode</button>
        </section>
        <input className='search-bar' type="text" placeholder='Search for a country...'/>
        <input className='filter-bar' type="text" placeholder='Filter by Region'/>
        
        <main className='country-list'>
        {countries.map((country) => (
            <section key={country.cca3} className='country-card'>
              <picture>
                <img src={country.flags.png} alt={country.flags.alt || `Flag of ${country.name.common}`} />
              </picture>
              <section className='country-card__detail'>
                <h2>{country.name.common}</h2> 
                <span><b>Population:</b> {country.population}</span>
                <span><b>Region:</b> {country.region}</span>
                <span><b>Capital:</b> {country.capital}</span>
              </section>
            </section>  
          ))}
        </main>
      </div>
    </>
  )
}

export default App
