export default function Search({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search breweries..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event)}
    />
  );
}
