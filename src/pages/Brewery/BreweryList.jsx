import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBreweries } from "../../api/brewery";
import Search from "../../components/Search";

export default function BreweryList() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["breweries"],
    queryFn: () => getBreweries(page, perPage),
  });

  const handlePrevChange = (event) => {
    setPage((p) => p - 1);
  };

  const handleNextChange = (event) => {
    setPage((p) => p + 1);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  if (isPending) return <div>Loading breweries...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main>
      <h1>Brewery Catalog</h1>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ul>
        {data.map((brewery) => (
          <li key={brewery.id}>
            <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link> -
            {brewery.city}, {brewery.state_province}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handlePrevChange} disabled={page === 1}>
        Prev
      </button>{" "}
      <button type="button" onClick={handleNextChange}>
        Next
      </button>
    </main>
  );
}
