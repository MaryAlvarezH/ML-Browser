import { Container } from "react-bootstrap";
import { SearchBox } from "../SearchBox/SearchBox";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const Navbar = ({ ...props }) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar-container" {...props}>
      <Container>
        <div className="content">
          <button
            className="logo-button"
            onClick={redirectToHome}
            data-testid="home-link"
          >
            <span className="logo"></span>
          </button>
          <SearchBox />
        </div>
      </Container>
    </div>
  );
};
