import { faSun} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleTheme() {
      console.log("theme");
      // TODO: theme 
  }

  return(
      <section className="header">
        <h3 className="header__title" onClick={() => navigate('/')}>Where in the world?</h3>
        <button className="header__button light-mode">
          <FontAwesomeIcon icon={faMoon} style={{ rotate: "-30deg" }}  onClick={
            (e) => 
            {e.stopPropagation();
            handleTheme();
          }
          }/>
          Dark Mode
        </button>
        <button className="header__button dark-mode">
          <FontAwesomeIcon icon={faSun} style={{ color: "black" }} />
          Light Mode
        </button>
      </section>
  )
}

export default Header;