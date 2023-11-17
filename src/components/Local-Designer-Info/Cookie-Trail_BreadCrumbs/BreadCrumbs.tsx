import React from "react";
import "./style.module.css";
import style from "./style.module.css";
import Link from "next/link";
const routeNameMapping: { [key: string]: string } = {
  AboutUs: "За нас",
  ContactUs: "Контакт",
  FAQ: "Често поставувани прашања",
  local_designers:"Локални Брендови"
};
export interface IBCrumbProps {
  route: string;
}

const BreadCrumbs = ({ route }: IBCrumbProps) => {
  const routeItems = route.split("/").filter((item) => item);

  return (
    <div>
      <div>
        {routeItems.map((item, index) => (
          <div key={index}>
            <Link href={"/"}>Почетна</Link>
            <Link className={style.customBreadcrumb} href={`/${item}`}>
              {routeNameMapping[item] || item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumbs;
