import { IProductProps } from "@/components/Products/Product";

export interface Count {
  name: string;
  count: number;
}

export const getUniquePropertyCounts = (
  data: IProductProps[],
  property: keyof IProductProps
) => {
  const propertyValues = data.map((product) => {
    // Extract the value of the property
    const value = product[property];

    // Handle the case where the value is an array or function
    if (Array.isArray(value)) {
      // If it's an array, join the values into a string
      return value.join("_");
    } else if (typeof value === "function") {
      // If it's a function, you can't use it as a React key, so return a placeholder or call the function if that makes sense
      return "functionPlaceholder";
    } else {
      // If it's neither, just return the value as is
      return value;
    }
  });
  const filteredValues = propertyValues.filter((value) => value !== undefined);
  const uniqueProperties = Array.from(new Set(filteredValues));

  return uniqueProperties.map((uniqueProperty) => ({
    name: uniqueProperty,
    count: data.filter((product) => product[property] === uniqueProperty)
      .length,
  }));
};
