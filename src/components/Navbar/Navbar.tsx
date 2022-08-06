import { Col, Container, Row } from "react-bootstrap";
import { SearchBox } from "../SearchBox/SearchBox";
import "./styles.scss";

interface NavbarProps {
  onSearch: (value: string) => void;
}

export const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <div className="search-box-container d-flex align-items-center">
      <Container>
        <Row>
          <Col xs lg="2">
            <img
              className="logo"
              alt="Mercado libre"
              src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png"
            />
          </Col>
          <Col xs lg="10">
            <SearchBox onSearch={onSearch} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
