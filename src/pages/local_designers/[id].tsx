import React, { useState } from "react";
import style from "../../components/Local-Designer-Info/LocalDesigner/style.module.css";
import LocalDesignerComponent from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import NextBreadcrumb from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/NextBreadcrumb";
import { IBrandDetail } from "@/types/ProjectTypes";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import Product from "@/components/Products/Product";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";
import { BRANDS_API, PRODUCTS_API } from "@/utils/API_URLS";

const LocalDesignerDetail: NextPage<IBrandDetail> = ({
  brandDetail,
  otherProducts,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginatedProducts = getPaginatedProducts(
    otherProducts,
    currentPage,
    itemsPerPage
  );
  return (
    <div className={style.detailPage}>
      <NextBreadcrumb
        separator={<span> {">"} </span>}
        brandName={brandDetail.brandName}
      />
      <LocalDesignerComponent {...brandDetail} />
      <div className={style.paginatedContainer}>
        {paginatedProducts.map((product) => (
          <div className={style.paginatedProduct} key={product.id}>
            <Link href={`/${product.id}`}>
              <Product {...product} />
            </Link>
          </div>
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={otherProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default LocalDesignerDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (
    typeof BRANDS_API === "undefined" ||
    typeof PRODUCTS_API === "undefined"
  ) {
    return { props: { error: "API endpoint is undefined" } };
  }

  const queryBrand = query.id as string;
  const res = await axios.get(
    `${BRANDS_API}/${queryBrand}?brandName_like=${queryBrand}`
  );
  const otherProductsRes = await axios.get(PRODUCTS_API);
  const otherProducts = otherProductsRes.data;
  const brandDetail = res.data;
  return {
    props: {
      otherProducts,
      brandDetail,
    },
  };
};
