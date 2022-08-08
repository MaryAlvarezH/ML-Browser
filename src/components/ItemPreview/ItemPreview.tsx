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
    >
      <div className="d-flex">
        <img className="item-image" src={item.picture} alt={item.id} />
        <div className="item-details">
          <span className="item-price">
            {parseToCurrency(item.price.amount, item.price.currency)}
          </span>
          <span className="item-title">{item.title}</span>
        </div>
      </div>
    </div>
  );
};
