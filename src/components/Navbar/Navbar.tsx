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
          <a className="logo" onClick={redirectToHome} />
          <SearchBox />
        </div>
      </Container>
    </div>
  );
};
