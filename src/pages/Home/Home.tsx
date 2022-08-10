import "./styles.scss";
import { BiPlus } from "react-icons/bi";
import IconPaymentCard from "../../assets/images/ML-info-payment-card.svg";
import IconShipping from "../../assets/images/ML-info-shipping.svg";
import IconProtected from "../../assets/images/ML-info-protected.svg";
import { Col, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="home-container">
      {/* banner */}
      <div className="home-banner" />

      {/* payment */}
      <div className="payment-banner">
        <div className="payment-section-container mercado-pago">
          <div className="payment-data-section d-flex flex-column">
            <span className="payment-data-title">Paga cómodo y seguro</span>
            <span className="payment-data-subtitle">Con Mercado pago</span>
          </div>
        </div>

        <div className="payment-section-container bank">
          <div className="payment-data-section d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span className="payment-data-title">
                Hasta 3 meses sin intereses con:
              </span>
              <a className="payment-data-subtitle" href="/#">
                Ver condiciones
              </a>
            </div>
            <span className="bank-logo"></span>
          </div>
        </div>

        <div className="payment-section-container more-payments">
          <div className="payment-data-section d-flex">
            <div className="icon-ellipse">
              <div className="icon-container">
                <BiPlus className="icon" />
              </div>
            </div>

            <div className="d-flex flex-column">
              <span className="payment-data-title">Más medios de pago</span>
              <a className="payment-data-subtitle" href="/#">
                Ver todos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* shopping info*/}
      <div className="shopping-info">
        <Row>
          <Col xs={12} md={4}>
            <div className="info-slide">
              <img src={IconPaymentCard} alt="payment" />
              <h2 className="title">Elige cómo pagar</h2>
              <p className="details">
                Con Mercado Pago, paga con tarjeta, débito o efectivo. También
                puedes pagar en hasta 12 mensualidades sin tarjeta con Mercado
                Crédito.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="info-slide">
              <img src={IconShipping} alt="shipping" />
              <h2 className="title">Envío gratis desde $ 299</h2>
              <p className="details">
                Con solo estar registrado en Mercado Libre, tienes envíos gratis
                en millones de productos seleccionados.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="info-slide">
              <img src={IconProtected} alt="protection" />
              <h2 className="title">Seguridad, de principio a fin</h2>
              <p className="details">
                ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
                puedas hacer, porque estás siempre protegido.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
