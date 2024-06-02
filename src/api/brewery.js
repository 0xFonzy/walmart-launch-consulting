export const getBrewery = async (id) => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
  const data = await response.json();
  return data;
};

export const getBreweries = async (page, perPage) => {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${perPage}`
  );
  const data = await response.json();
  return data;
};
