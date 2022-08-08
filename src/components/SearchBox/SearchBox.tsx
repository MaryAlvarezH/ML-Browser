import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./styles.scss";

type SearchInput = {
  search: string;
};

export const SearchBox = ({ ...props }) => {
  const { register, handleSubmit } = useForm<SearchInput>();
  const [search, setSearch] = useState<string>();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search: any = searchParams.get("search");
    setSearch(search);
  }, [searchParams]);

  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    const { search } = data;
    const params = { search };

    setSearch(search);

    navigate({
      pathname: "/items",
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <form
      className="search-form d-flex justify-content-between align-items-center"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <input
        autoComplete="off"
        className="search-input"
        defaultValue={search}
        placeholder="Nunca dejes de buscar"
        {...register("search")}
      />
      <button className="search-button" type="submit">
        <span className="search-icon"></span>
      </button>
    </form>
  );
};
