import { IProductProps } from "@/components/Products/Product";

interface Count {
  name: string; 
  count: number;
}

export const getUniquePropertyCounts = (
  data: IProductProps[],
  property: keyof IProductProps
): Count[] => {
  const uniqueProperties = Array.from(
    new Set(data.map((product) => product[property]))
  );

  return uniqueProperties.map((uniqueProperty) => ({
    name: String(uniqueProperty), 
    count: data.filter(
      (product) => String(product[property]) === String(uniqueProperty)
    ).length,
  }));
};
