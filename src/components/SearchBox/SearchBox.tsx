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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Buscar productos, marcas y más..."
        {...register("search")}
      />
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  );
};
