import React, { useEffect, useState } from "react";
import { developmentUsageProductList } from "../storage";
import ProductsListCard from "./ProductsListCard";

const MarketPlace = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const { SHOES: shoes } = developmentUsageProductList;
    setProductList(shoes);
    console.log(productList);
  }, []);
  return (
    <div>
      <div className=" flex gap-5 flex-wrap justify-center ">
        {productList?.map((product) => {
          return <ProductsListCard key={product.goods_id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default MarketPlace;
