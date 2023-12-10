export const getQueryParam = (key: string, value: string | string[]) => {
    switch (key) {
      case "selectedCategories":
      case "brandSelectedCategories":
      case "accessoriesSelectedCategories":
      case "sizesCategories":
      case "colorPickCat":
        if (Array.isArray(value)) {
          // If the value is an array, join its elements
          return `${key.slice(0, -12)}_like=${value.join(`&${key.slice(0, -12)}_like=`)}`;
        }
        break;
      case "selectedPriceRange":
        if (typeof value === "string") {
          // If the value is a string, split and format it
          const [minPrice, maxPrice] = value.split("-").map(String);
          return `price_gte=${minPrice}&price_lte=${maxPrice}`;
        }
        break;
      case "searchBarValue":
        if (typeof value === "string") {
          return `search=${value}`; 
        }
        break;
      default:
        return "";
    }
  };
  