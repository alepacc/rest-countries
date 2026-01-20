import { useEffect, useState } from 'react'
import type { Country } from '../type/types';
import countriesAPI from '../services/api';
import CountryList from '../components/CountryList';
import Dropdown from "../components/Dropdown";
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

function Home() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await countriesAPI.getAllCountries();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
                // TODO: Handle error appropriately in the UI
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedRegion == null) return;
        const fetchFiltered = async () => {
            try {
                const filteredData = await countriesAPI.getFilteredCountries(selectedRegion);
                setFilteredCountries(filteredData);
            } catch (error) {
                console.error('Error fetching filtered countries:', error);
            }
        };

        fetchFiltered();
    }, [selectedRegion]); 
    

    return (
        <>  
            <Header />
            <SearchInput />
            <Dropdown
                label="Filter by Region"
                option={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
                value={selectedRegion}
                onChange={setSelectedRegion}
            />
            
            {selectedRegion  ? (
                <CountryList countries={filteredCountries} />
            ) : (
                <CountryList countries={countries}/>
            )
            }
       </>
    )

}

export default Home;
