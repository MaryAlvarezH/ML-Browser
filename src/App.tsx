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
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Mercado Libre - Envíos Gratis en el día</title>
        <meta
          name="description"
          content="Compre productos con Envío Gratis en el día en Mercado Libre. Encuentre miles de marcas y productos a precios increíbles."
          data-head-react="true"
        />
        <meta
          property="og:image"
          content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
          data-head-react="true"
        />
        <meta property="og:url" content="pets.abc" />
        <meta property="og:site_name" content="Mercado Libre" />
        <meta property="og:locale" content="es-AR" />
        <meta property="og:locale:alternate" content="es_ES" />
      </Helmet>

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
