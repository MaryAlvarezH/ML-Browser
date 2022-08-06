import { Col, Container, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import "./styles.scss";

type SearchInput = {
  search: string;
};

export const SearchBox = () => {
  const { register, handleSubmit } = useForm<SearchInput>();
  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    console.log(data);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Buscar productos, marcas y más..."
                {...register("search")}
              />
              <button type="submit">
                <IoSearchOutline />
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
