import { useNavigate } from "react-router-dom";
import type { Country } from "../type/types";

type CountryCardProps = {
  country: Country;
};

function CountryCard({ country }: CountryCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.cca3}`);
  };

  return (
    <section key={country.cca3} className="country-card" onClick={handleClick}>
      <picture>
        <img
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
        />
      </picture>
      <section className="country-card__detail">
        <h2>{country.name.common}</h2>
        <span>
          <b>Population:</b> {country.population}
        </span>
        <span>
          <b>Region:</b> {country.region}
        </span>
        <span>
          <b>Capital:</b> {country.capital}
        </span>
      </section>
    </section>
  );
}

export default CountryCard;
