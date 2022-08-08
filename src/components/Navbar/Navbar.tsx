import { Container } from "react-bootstrap";
import { SearchBox } from "../SearchBox/SearchBox";
import "./styles.scss";

export const Navbar = ({ ...props }) => {
  return (
    <div className="navbar-container" {...props}>
      <Container>
        <div className="content">
          <a className="logo" />
          <SearchBox />
        </div>
      </Container>
    </div>
  );
};
