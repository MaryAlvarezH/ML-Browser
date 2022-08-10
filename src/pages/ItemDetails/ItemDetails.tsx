import axios from "axios";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SearchResqueMessage } from "../../components/SearchResqueMessage/SearchResqueMessage";
import { ItemDetailsSkeleton } from "../../components/Skeletons/ItemDetailsSkeleton/ItemDetailsSkeleton";
import { BASE_URL } from "../../utils/constants";
import {
  RequestStatus,
  SearchResqueTypes,
  SearchTypes,
} from "../../utils/enums";
import { parseItemConditions, parseToCurrency } from "../../utils/functions";
import { ItemDetails as ItemDetailsType } from "../../utils/types";
import "./styles.scss";

export const ItemDetails = () => {
  const params = useParams();
  const [item, setItem] = useState<ItemDetailsType>();
  const [reqStatus, setReqStatus] = useState<RequestStatus>(RequestStatus.init);

  useEffect(() => {
    if (params.id) {
      const itemID: string = params.id;
      getItemDetails(itemID);
    }
  }, [params.id]);

  const getItemDetails = (itemID: string) => {
    setReqStatus(RequestStatus.loading);

    axios
      .get(`${BASE_URL}/items/${itemID}`)
      .then((response) => {
        const { data } = response;
        setItem(data.item);
        setReqStatus(RequestStatus.success);
      })
      .catch((error) => {
        console.error("[ItemDetails.tsx]", error);
        setReqStatus(RequestStatus.error);
      });
  };

  const itemDetails = () => {
    return (
      <>
        {!isEmpty(item) ? (
          <Container data-testid="item-details-content">
            <Row>
              <Col lg={{ span: 6, offset: 1 }}>
                <img
                  className="item-image"
                  data-testid="item-image"
                  src={item?.picture}
                  alt={item?.title}
                />
              </Col>
              <Col lg={{ span: 4, offset: 1 }}>
                <div className="item-info d-flex flex-column">
                  <p className="conditions" data-testid="item-conditions">
                    <span>{parseItemConditions(item?.condition)} - </span>
                    <span data-testid="item-quantity">
                      {item?.sold_quantity}
                    </span>
                  </p>
                  <span className="name" data-testid="item-title">
                    {item?.title}
                  </span>
                  <div className="item-main-info">
                    <span className="price">
                      {parseToCurrency(
                        item?.price.amount,
                        item?.price.currency
                      )}
                    </span>
                    {item?.free_shipping && (
                      <span className="free-shipping"></span>
                    )}
                  </div>

                  <button className="primary">Comprar</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="item-description-container">
                  <span className="title">Descripción del producto</span>
                  <p className="description" style={{ whiteSpace: "pre-line" }}>
                    {item?.description}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <SearchResqueMessage
            data-testid="item-error-content"
            searchResqueType={SearchResqueTypes.error}
            searchType={SearchTypes.itemDetails}
          />
        )}
      </>
    );
  };

  return (
    <Container className="main-container item-details-container">
      <div className="item-container">
        {(() => {
          switch (reqStatus) {
            case RequestStatus.init:
            case RequestStatus.loading:
              return <ItemDetailsSkeleton data-testid="item-details-loader" />;

            case RequestStatus.success:
              return itemDetails();

            case RequestStatus.error:
              return (
                <SearchResqueMessage
                  searchResqueType={SearchResqueTypes.error}
                  searchType={SearchTypes.itemDetails}
                />
              );

            default:
              return null;
          }
        })()}
      </div>
    </Container>
  );
};
