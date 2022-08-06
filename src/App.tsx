import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Routes,
  Route,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { ItemDetails } from "./pages/ItemDetails/ItemDetails";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    const params = { search: value };

    navigate({
      pathname: "/items",
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <Container className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResults />} />
          <Route path="/items/:id" element={<ItemDetails />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
