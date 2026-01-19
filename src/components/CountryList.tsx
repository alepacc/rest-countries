import type { Country } from "../type/types";
import CountryCard from "../components/CountryCard"

type CountryListProp = {
    countries: Country[];
}

function CountryList({countries}: CountryListProp) {
    return (
        <section className='country-list'>
            {countries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </section>
    )
}


export default CountryList;

