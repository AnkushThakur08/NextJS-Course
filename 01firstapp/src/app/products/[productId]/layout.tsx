import React from "react";
import { IChildrenProps } from "./type";

const ProductLayout = ({ children }: IChildrenProps) => {
  return (
    <div>
      <h1>We are in the Product Layout</h1>
      {children}
    </div>
  );
};

export default ProductLayout;
