
import Header from "./Components/Navbar"
import SearchBar from "./Components/Searchbar"
import CharacterList from "./Components/CharacterList"
import Spinner from "./Components/Spinner";
import { useState ,useEffect} from "react";
import axios from "./Components/api";

function App() {
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState(true);
  const [query,setQuery]=useState("");
  useEffect(()=>{
    const fetchItems=async()=>{
      const results =await axios.get(`/characters?name=${query}`);
      setItems(results.data);
      setLoading(false);
     
    };
    fetchItems();
  },[query]);
  return (
    <div className="App">
      <Header />
      <SearchBar setQuery={(query) => setQuery(query)} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
}

export default App;
