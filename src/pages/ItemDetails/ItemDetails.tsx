import axios from "axios";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { parseItemConditions, parseToCurrency } from "../../utils/functions";
import { ItemDetails as ItemDetailsType } from "../../utils/types";
import "./styles.scss";

export const ItemDetails = () => {
  const params = useParams();
  const [item, setItem] = useState<ItemDetailsType>();

  useEffect(() => {
    if (params.id) {
      const itemID: string = params.id;
      getItemDetails(itemID);
    }
  }, [params.id]);

  const getItemDetails = (itemID: string) => {
    axios
      .get(`${BASE_URL}/items/${itemID}`)
      .then((response) => {
        setItem(response.data.item);
      })
      .catch((error) => {
        console.error("[ItemDetails.tsx]", error);
      });
  };

  return (
    <div className="item-container">
      {!isEmpty(item) && (
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 1 }}>
              <img
                className="item-image"
                src={item?.picture}
                alt={item?.title}
              />
            </Col>
            <Col lg={{ span: 3, offset: 1 }}>
              <div className="item-info d-flex flex-column">
                <span className="conditions">
                  {parseItemConditions(item?.condition)} - {item?.sold_quantity}
                </span>
                <span className="name">{item?.title}</span>
                <span className="price">
                  {parseToCurrency(item?.price.amount, item?.price.currency)}
                </span>
                <button className="primary">Comprar</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="item-description-container">
                <span className="title">Descripción del producto</span>
                <p className="description">{item?.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
