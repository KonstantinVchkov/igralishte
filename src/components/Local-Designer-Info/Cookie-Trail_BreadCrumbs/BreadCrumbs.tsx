import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./style.module.css"; // Adjust the import based on how you've set up CSS modules

export interface IBCrumbProps {
  route: string;
  separator: string;
}

const BreadCrumbs = ({ route, separator = ">" }: IBCrumbProps) => {
  const routeItems = route.split(">"); // Split the route into items

  return (
    <div>
      <Breadcrumb className="customBreadcrumb" data-separator={separator}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {routeItems.map((item, index) => (
          <Breadcrumb.Item key={index} href={`/${item}`}>
            {item}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
