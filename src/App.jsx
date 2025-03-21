import { useEffect, useState } from "react";
import { useFetchApi } from "./hooks/useFetchApi";
import ResidentsList from "./components/ResidentsList"; 
import LocationInfo from "./components/LocationInfo";
import Search from "./components/Search";
import Hero from "./components/Hero";


function App() {
  const [searchQuery, setSearchQuery] = useState('1') //Agregado
  const { data: location, request, loading, error } = useFetchApi();


  useEffect(() => {
    if (searchQuery) {
      request(searchQuery)
    }
  }, [searchQuery])


return (
  <>
    {/* Hero*/}
    <div className="hero">
      <Hero />
    </div>

    {/* Search*/}
    <div className="search">
      <Search setSearchQuery={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p> {error} </p>}
    </div>

    {/* LocationInfo*/}
    <div className="location">
      {loading ? <p>Cargando...</p> : (
        location && <LocationInfo location= {location} />
      )}
      {location && <ResidentsList residents={location.residents || []} />}
      {!loading && !location && <p className="error-message">No results found. Try another search!</p>}
    </div>

    
    </> 
    
  )
}

export default App;
