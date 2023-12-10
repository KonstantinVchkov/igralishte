const BASE_URL = process.env.API_BASE_URL;
export interface IQueryParams {
  category?: string;
  condition_like?: string;
  category_like?: string | string[];
  brand_like?: string | string[];
  accessory_like?: string | string[];
  size_like?: string | string[];
  color_like?: string | string[];
  price_gte?: string;
  price_lte?: string;
  // Add any other query parameters that you might use
}
const buildUrl = (queryParams: IQueryParams) => {
  if (Object.keys(queryParams).length === 0) {
    return `${BASE_URL}`;
  }

  const queryStrings = Object.entries(queryParams)
    .filter(([_, value]) => value)
    .map(([key, value]) => 
      Array.isArray(value) ? value.map(val => `${key}=${val}`).join('&') : `${key}=${value}`
    )
    .join('&');

  return `${BASE_URL}?${queryStrings}`;
};


export default buildUrl;
