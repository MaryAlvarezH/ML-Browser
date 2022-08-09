import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import isEmpty from "lodash/isEmpty";
import {
  ItemPreview as ItemPreviewType,
  SearchResults as SearchResultsType,
} from "../../utils/types";
import { ItemPreview } from "../../components/ItemPreview/ItemPreview";
import "./styles.scss";
import { ItemPreviewSkeleton } from "../../components/Skeletons/ItemPreviewSkeleton/ItemPreviewSkeleton";
import {
  RequestStatus,
  SearchResqueTypes,
  SearchTypes,
} from "../../utils/enums";
import { SearchResqueMessage } from "../../components/SearchResqueMessage/SearchResqueMessage";
import { Container } from "react-bootstrap";

interface SearchResultsProps {
  onSearchResults: (value: SearchResultsType) => void;
}

export const SearchResults = ({ onSearchResults }: SearchResultsProps) => {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState<ItemPreviewType[]>();
  const [reqStatus, setReqStatus] = useState<RequestStatus>(RequestStatus.init);

  useEffect(() => {
    const search: any = searchParams.get("search");
    setReqStatus(RequestStatus.loading);

    axios
      .get(`${BASE_URL}/items?q=${search}`)
      .then((response) => {
        const { data } = response;
        setItems(data.items);
        onSearchResults(data);
        setReqStatus(RequestStatus.success);
      })
      .catch((error) => {
        console.log("[SearchResults.tsx]", error);
        setReqStatus(RequestStatus.error);
      });
  }, [searchParams.get("search")]);

  const itemsPreviewSkeletons = () => {
    const previewSkeletons = [0, 1, 2, 4];
    return (
      <div className="items-container d-flex flex-column">
        {previewSkeletons.map((i) => {
          return <ItemPreviewSkeleton key={i} />;
        })}
      </div>
    );
  };

  const itemsPreviews = () => {
    return (
      <>
        {!isEmpty(items) ? (
          <div className="items-container d-flex flex-column">
            {items?.map((i: ItemPreviewType) => {
              return <ItemPreview key={i.id} item={i} />;
            })}
          </div>
        ) : (
          <SearchResqueMessage
            searchResqueType={SearchResqueTypes.emptyData}
            searchType={SearchTypes.items}
          />
        )}
      </>
    );
  };

  return (
    <Container className="main-container">
      {(() => {
        switch (reqStatus) {
          case RequestStatus.init:
          case RequestStatus.loading:
            return itemsPreviewSkeletons();

          case RequestStatus.success:
            return itemsPreviews();

          case RequestStatus.error:
            return (
              <SearchResqueMessage
                searchResqueType={SearchResqueTypes.error}
                searchType={SearchTypes.items}
              />
            );

          default:
            return null;
        }
      })()}
    </Container>
  );
};
