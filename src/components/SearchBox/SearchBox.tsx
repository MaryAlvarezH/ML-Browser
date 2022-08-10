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
  const { register, handleSubmit, reset } = useForm<SearchInput>();
  const [search, setSearch] = useState<string>();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search: any = searchParams.get("search");
    setSearch(search);

    if (!search) {
      reset();
    }
  }, [searchParams, reset]);

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
        {...register("search", { required: true })}
        data-testid="search-input"
      />
      <button
        className="search-button"
        type="submit"
        data-testid="search-button"
      >
        <span className="search-icon"></span>
      </button>
    </form>
  );
};
