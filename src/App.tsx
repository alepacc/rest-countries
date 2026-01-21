import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

/**
 * Main application component that sets up routing for the REST Countries application.
 * 
 * Provides two routes:
 * - Home page at the root path "/"
 * - Country detail page at "/country/:cca3" where :cca3 is the country code parameter
 * 
 * @returns {JSX.Element} The application component wrapped with BrowserRouter and main container
 */
function App() {
  return (
    <BrowserRouter basename="/rest-countries">
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
