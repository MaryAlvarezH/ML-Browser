import { Item } from "../../utils/types";
import "./styles.scss";

interface ItemPreviewProps {
  item: Item;
}

export const ItemPreview = ({ item, ...props }: ItemPreviewProps) => {
  return (
    <div className="item-preview-container" {...props}>
      <div className="d-flex">
        <img className="item-image" src={item.picture} alt={item.id} />
        <div className="item-details">
          <span className="item-price">${item.price.amount}</span>
          <span className="item-title">{item.title}</span>
        </div>
      </div>
    </div>
  );
};
