const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        className="p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
