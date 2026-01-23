import { useEffect, useState } from "react";
import type { Country } from "../type/types";
import countriesAPI from "../services/api";
import { useNavigate } from "react-router-dom";

type CountryProps = {
  country: Country;
};

function BorderCountries({ country }: CountryProps) {
  const [border, setBorder] = useState<Country[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!country.borders) return;

    async function fetchBorders() {
      try {
        const data = await countriesAPI.getCountriesByCodes(
          country.borders ?? [],
        );
        setBorder(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBorders();
  }, [country]);

  return (
    <section className="borders">
      <h3>Border Countries:</h3>
      {border.length ? (
        <div className="border-countries__list">
          {border.map((bor) => (
            <button
              className="button-primary"
              key={bor.cca3}
              onClick={() => navigate(`/country/${bor.cca3}`)}
            >
              {bor.name.common}
            </button>
          ))}
        </div>
      ) : (
        <p>N/A</p>
      )}
    </section>
  );
}

export default BorderCountries;
