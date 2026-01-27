import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<"light" | "dark">(
    savedTheme === "dark" ? "dark" : "light",
  );

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    // save theme value in local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="header">
      <h3 className="header__title" onClick={() => navigate("/")}>
        Where in the world?
      </h3>
      <button className="header__button" onClick={handleTheme}>
        {theme == "dark" ? (
          <>
            <FontAwesomeIcon icon={faSun} />
            Light Mode
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} style={{ rotate: "-30deg" }} />
            Dark Mode
          </>
        )}
      </button>
    </section>
  );
}

export default Header;
