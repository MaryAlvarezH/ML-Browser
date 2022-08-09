import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { ItemDetails } from "./pages/ItemDetails/ItemDetails";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { SearchResults as SearchResultsType } from "./utils/types";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";

function App() {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const location = useLocation();

  const onSearchResults = (value: SearchResultsType) => {
    setCategories(value.categories);
  };

  useEffect(() => {
    if (location.pathname.includes("items")) {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {showCategories && <CategoriesList categories={categories} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/items"
          element={<SearchResults onSearchResults={onSearchResults} />}
        />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </>
  );
}

export default App;
