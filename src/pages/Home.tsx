import { useEffect, useMemo, useState } from "react";
import type { Country } from "../type/types";
import countriesAPI from "../services/api";
import CountryList from "../components/CountryList";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

function Home() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    // all counties list
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await countriesAPI.getAllCountries();
            setCountries(data);
        } catch (error) {
            console.error("Error fetching countries:", error);
            // TODO: Handle error appropriately in the UI
        }
        };

        fetchData();
    }, []);

    const filteredCountries = useMemo(() => {
        let result = countries;

        // filter by region w/ dropdown
        if (selectedRegion) {
            result = result.filter((country) => country.region === selectedRegion);
        }
        // filter by search input
        result = result.filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
        );

        return result;
    }, [countries, selectedRegion, search]);

    return (
        <>
        <Header />
        <main>
            <div className="home-filter">
                <SearchInput value={search} onChange={setSearch} />
                <Dropdown
                label="Filter by Region"
                option={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
                value={selectedRegion}
                onChange={setSelectedRegion}
                />
            </div>
            <CountryList countries={filteredCountries} />
        </main>
        </>
    );
}

export default Home;
