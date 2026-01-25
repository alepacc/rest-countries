import Header from "../components/Header";
import type { Country } from "../type/types";
import countriesAPI from "../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import BorderCountries from "../components/BorderCountries";

function CountryDetail() {
  const [country, setCountry] = useState<Country | null>(null);
  const { cca3 } = useParams<{ cca3: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      if (!cca3) return;
      try {
        const data = await countriesAPI.getCountryByCca3(cca3);
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountry();
  }, [cca3]);

  return (
    <>
      <Header />
      <button className="button-primary" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back
      </button>
      {country && (
        <section className="country-card__detail">
          <picture>
            <img
              src={country.flags.png}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
            />
          </picture>
          <div className="country-detail__info">
            <h2>{country.name.common}</h2>
            <span>
              <p>
                  <b>Naive Name: </b>
                  {country.name.nativeName
                  ? Object.values(country.name.nativeName)[0].common
                  : country.name.common}
              </p>            
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion ?? "N/A"}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.[0] ?? "N/A"}
              </p>
            </span>
            <span>
              <p>
                <b>Top Level Domain:</b> {country.tld}
              </p>
              <p>
                <b>Currencies:</b>{" "}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((cur) => cur.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <b>Languages:</b>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </span>
            <BorderCountries country={country}/>
          </div>
        </section>
      )}
    </>
  );
}

export default CountryDetail;
