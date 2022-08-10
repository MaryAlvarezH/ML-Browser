import { useNavigate } from "react-router-dom";
import { parseToCurrency } from "../../utils/functions";
import { ItemPreview as ItemPreviewType } from "../../utils/types";
import "./styles.scss";

interface ItemPreviewProps {
  item: ItemPreviewType;
}

export const ItemPreview = ({ item, ...props }: ItemPreviewProps) => {
  const navigate = useNavigate();

  const redirectToItemDetails = () => {
    navigate({
      pathname: `/items/${item.id}`,
    });
  };
  return (
    <div
      className="item-preview-container"
      {...props}
      onClick={redirectToItemDetails}
      data-testid="item-preview-container"
    >
      <div className="d-flex">
        <img className="item-image" src={item.picture} alt={item.id} />
        <div className="item-details">
          <div className="item-main-info">
            <span className="item-price">
              {parseToCurrency(item.price.amount, item.price.currency)}
            </span>
            {item.free_shipping && <span className="item-free-shipping"></span>}
          </div>

          <span className="item-title">{item.title}</span>
        </div>
      </div>
    </div>
  );
};
