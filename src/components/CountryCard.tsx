import {useEffect, useState } from 'react'
import { countriesAPI } from '../utils/api';
import type { Country } from '../type/country';

function CountryCard() {
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


    return (
    <>
        <section className='country-list'>
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
        </section>
    </>
        
    )

}

export default CountryCard;