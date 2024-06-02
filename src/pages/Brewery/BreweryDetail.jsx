import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBrewery } from "../../api/brewery";

export default function BreweryDetail() {
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["brewery"],
    queryFn: () => getBrewery(id),
  });

  if (isPending) return <div>Brewery Loading</div>;
  if (isError) return <div>Erorr {error.message}</div>;
  if (!data) return <div>Brewery not found</div>;

  return (
    <main>
      <h1>{data.name}</h1>
      <p>
        {data.city}, {data.state_province} {data.postal_code}
      </p>
      <p>{data.country}</p>
      <p>{data.phone}</p>
      {data.website_url && (
        <p>
          <a href={data.website_url} target="_blank" rel="noreferrer">
            View Website
          </a>
        </p>
      )}
      <Link to="/breweries">Back to Breweries</Link>
    </main>
  );
}
