import { Container } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import "./styles.scss";

interface CategoriesListProps {
  categories: string[];
}

export const CategoriesList = ({
  categories,
  ...props
}: CategoriesListProps) => {
  return (
    <Container>
      <div
        className="categories-container d-flex"
        {...props}
        data-testid="categories-list-container"
      >
        {categories.map((i: string, index: number) => (
          <div
            key={index}
            className="category-container d-flex align-items-center"
          >
            <span className="category-name">{i}</span>
            <>{index + 1 !== categories.length && <IoIosArrowForward />}</>
          </div>
        ))}
      </div>
    </Container>
  );
};
