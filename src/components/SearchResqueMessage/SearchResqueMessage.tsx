import { SearchResqueTypes, SearchTypes } from "../../utils/enums";
import { FcSearch, FcHighPriority } from "react-icons/fc";
import "./styles.scss";

interface SearchResqueMessageProps {
  searchResqueType: SearchResqueTypes;
  searchType: SearchTypes;
}
export const SearchResqueMessage = ({
  searchResqueType,
  searchType,
  ...props
}: SearchResqueMessageProps) => {
  return (
    <div className="search-resque-container" {...props}>
      {(() => {
        switch (searchResqueType) {
          case SearchResqueTypes.emptyData:
            return (
              <div className="search-resque-details d-flex justify-content-center mt-4">
                <FcSearch className="icon" />
                {searchType === SearchTypes.items ? (
                  <p>
                    <h4>No hay publicaciones que coincidan con tu búsqueda.</h4>
                    <ul>
                      <li>Revisa la ortografía de la palabra.</li>
                      <li>Utiliza palabras más genéricas o menos palabras.</li>
                    </ul>
                  </p>
                ) : null}
              </div>
            );

          case SearchResqueTypes.error:
            return (
              <div className="search-resque-details d-flex justify-content-center mt-4">
                <FcHighPriority className="icon" />
                {searchType === SearchTypes.items ? (
                  <p>
                    Lo sentimos, ocurrió un error al consultar los productos.
                    Por favor, intenta nuevamente.
                  </p>
                ) : (
                  <p>
                    Lo sentimos, parece ser que el producto que estás buscando
                    no existe. <br /> Si copiaste la URL asegúrante que este
                    bien escrita.
                  </p>
                )}
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};
