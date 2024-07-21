import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = (
      e.currentTarget.elements.namedItem("search") as HTMLInputElement
    ).value;
    if (!searchValue) return;
    setSearchText(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="star"
        />
        <button type="submit" className="search-btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
