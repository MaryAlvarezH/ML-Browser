import { SubmitHandler, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import "./styles.scss";

type SearchInput = {
  search: string;
};

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const { register, handleSubmit } = useForm<SearchInput>();

  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    onSearch(data.search);
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
