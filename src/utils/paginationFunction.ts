import { IProductProps } from "@/components/Products/Product";

export const getPaginatedProducts = (
    products: IProductProps[],
    currentPage: number,
    itemsPerPage: number
  ): IProductProps[] => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };
  