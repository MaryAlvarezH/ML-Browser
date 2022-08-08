import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { ItemDetails } from "./pages/ItemDetails/ItemDetails";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar/Navbar";
import { useState } from "react";
import { SearchResults as SearchResultsType } from "./utils/types";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  const onSearchResults = (value: SearchResultsType) => {
    setCategories(value.categories);
  };

  return (
    <>
      <Navbar />

      <CategoriesList categories={categories} />

      <Container className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/items"
            element={<SearchResults onSearchResults={onSearchResults} />}
          />
          <Route path="/items/:id" element={<ItemDetails />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
