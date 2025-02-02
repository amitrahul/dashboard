const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search users by name..."
        className="p-2 border rounded w-full border-amber-600 text-yellow-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
