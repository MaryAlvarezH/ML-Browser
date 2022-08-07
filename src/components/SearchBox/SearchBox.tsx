import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
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
  }, [searchParams.get("search")]);

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
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <input
        defaultValue={search}
        placeholder="Buscar productos, marcas y más..."
        {...register("search")}
      />
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  );
};
