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

interface SearchResultsProps {
  onSearchResults: (value: SearchResultsType) => void;
}

export const SearchResults = ({ onSearchResults }: SearchResultsProps) => {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState<ItemPreviewType[]>();

  useEffect(() => {
    const search: any = searchParams.get("search");

    axios
      .get(`${BASE_URL}/items?q=${search}`)
      .then((response) => {
        const { data } = response;
        setItems(data.items);
        onSearchResults(data);
      })
      .catch((error) => {
        console.log("[SearchResults.tsx]", error);
      });
  }, [searchParams.get("search")]);

  return (
    <div className="items-container d-flex flex-column">
      {!isEmpty(items) &&
        items?.map((i: ItemPreviewType) => {
          return <ItemPreview key={i.id} item={i} />;
        })}
    </div>
  );
};
