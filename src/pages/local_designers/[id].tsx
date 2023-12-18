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
  const queryBrand = query.id as string;
  const res = await axios.get(
    `http://localhost:3001/brands/${queryBrand}?brandName_like=${queryBrand}`
  );
  const otherProductsRes = await axios.get("http://localhost:3001/products");
  const otherProducts = otherProductsRes.data;
  const brandDetail = res.data;
  return {
    props: {
      otherProducts,
      brandDetail,
    },
  };
};
