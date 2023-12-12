import { IProductProps } from "@/types/ProjectTypes";

export interface Count {
  name: string;
  count: number;
}

export const getUniquePropertyCounts = (
  data: IProductProps[],
  property: keyof IProductProps
) => {
  const propertyValues = data.map((product) => {
    const value = product[property];

    if (Array.isArray(value)) {
      return value.join("_");
    } else if (typeof value === "function") {
      return "functionPlaceholder";
    } else {
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
