import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import isEmpty from "lodash/isEmpty";
import { Item } from "../../utils/types";
import { ItemPreview } from "../../components/ItemPreview/ItemPreview";
import "./styles.scss";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    const search: any = searchParams.get("search");

    axios
      .get(`${BASE_URL}/items?q=${search}`)
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((error) => {
        console.log("[SearchResults.tsx]", error);
      });
  }, [searchParams.get("search")]);

  return (
    <div className="items-container d-flex flex-column">
      {!isEmpty(items) &&
        items?.map((i: Item) => {
          return <ItemPreview key={i.id} item={i} />;
        })}
    </div>
  );
};
