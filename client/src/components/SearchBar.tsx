interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search problems..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;