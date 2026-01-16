import CountryCard from './components/CountryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faAngleUp, faAngleDown, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
function App() {
  // input filtro 

  return (
    <>
      <main className="container">
        <section className='header'>
          <h3>Where in the world?</h3>
          <button className='header__button light-mode'>
            <FontAwesomeIcon icon={faMoon} style={{rotate: "-30deg"}} />
            Dark Mode
          </button>
          <button  className='header__button dark-mode'>
            <FontAwesomeIcon icon={faSun} style={{color:"black"}} />
            Light Mode
          </button>
        </section>
        <div className='search-bar'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className='search-input' type="text" id='search' placeholder='Search for a country...'/>
        </div>
        <div className='filter-dropdown'>
          <span>Filter by Region</span>
          <button className='filter-dropdown__icon--up'>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          {/* <button className='filter-dropdown__icon--down'>
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
          <button className='filter-dropdown__icon--close'>
            <FontAwesomeIcon icon={faXmark} />
          </button> */}
        </div>
        <section className='filter-menu'>
          <span>Africa</span>
          <span>Americas</span>
          <span>Asia</span>
          <span>Europe</span>
          <span>Oceania</span>
        </section>
        <CountryCard />
        
      </main>
    </>
  )
}

export default App
