import React from "react";
import "./style.module.css";
import style from "./style.module.css";
import Link from "next/link";

export interface IBCrumbProps {
  route: string;
  //   separator: string;
}

const BreadCrumbs = ({ route }: IBCrumbProps) => {
  const routeItems = route.split("/").filter((item) => item);

  return (
    <div>
      <div>
        {routeItems.map((item, index) => (
          <div key={index}>
            <Link href={"/"}>Home</Link>
            <Link className={style.customBreadcrumb} href={`/${item}`}>
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumbs;
