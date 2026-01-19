import { useEffect, useState } from 'react'
import type { Country } from '../type/types';
import countriesAPI from '../services/api';
import CountryList from '../components/CountryList';
import Dropdown from "../components/Dropdown";
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

function Home() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<null|string>(null);


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
            <CountryList  countries={countries}/>
       </>
    )

}

export default Home;
