import "./styles.scss";
import "../styles.scss";
import { Col, Container, Row } from "react-bootstrap";
export const ItemDetailsSkeleton = ({ ...props }) => {
  return (
    <div className="item-details-skeleton-container" {...props}>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 1 }}>
            <div className="skeleton item-image" />
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <div className="item-info d-flex flex-column">
              <div className="skeleton conditions" />
              <div className="skeleton name dark" />
              <div className="skeleton dark price" />
              <div className="skeleton button" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="item-description-container">
              <span className="skeleton dark title"></span>
              <p className="description">
                <div className="skeleton dark title"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
