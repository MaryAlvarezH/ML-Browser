import "./styles.scss";
import "../styles.scss";
export const ItemPreviewSkeleton = ({ ...props }) => {
  return (
    <div className="item-preview-skeleton-container" {...props}>
      <div className="d-flex">
        <div className="skeleton item-image" />
        <div className="item-details">
          <span className="skeleton dark item-price"></span>
          <span className="skeleton item-title"></span>
        </div>
      </div>
    </div>
  );
};
