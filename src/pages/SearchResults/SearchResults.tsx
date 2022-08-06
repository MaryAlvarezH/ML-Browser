import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState();

  useEffect(() => {
    const search: any = searchParams.get("search");
    setSearch(search);
  }, [searchParams.get("search")]);

  return <h1>Search results: {search} </h1>;
};
