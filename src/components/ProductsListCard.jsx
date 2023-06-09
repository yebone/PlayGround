import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_wishlists,
  remove_from_wishlists,
} from "../features/wishlists/wishListsSlice";

const ProductsListCard = ({ goods_img, goods_id, goods_name, salePrice }) => {
  const wishlistsProducts = useSelector(
    (state) => state.wishlists.wishlistsProducts
  );
  const dispatch = useDispatch();

  // toggle state for whishList heart btn
  const [toggle, setToggle] = useState(
    wishlistsProducts.find((product) => product.goods_id === goods_id)
      ? true
      : false
  );

  return (
    <div className="  w-[150px] md:w-[250px] group ">
      {/* both image and name will direct to detail page and 
     passing goods_id as a param to process get/product/detail request */}
      <div className="relative">
        {/* <Link to={`/productDetail/${goods_id}`}> */}
        <img
          className=" object-fill cursor-pointer"
          src={goods_img}
          alt={goods_name}
        />
        {/* </Link> */}
        {/* Add to bag btn */}
        {/* <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_BAG",
              payload: { goods_img, goods_id, goods_name, salePrice },
            })
          }
          className=" text-sm font-bold bg-white px-12 py-2 absolute left-9 top-60 opacity-0 group-hover:opacity-100 hidden md:block "
        >
          ADD TO BAG
        </button> */}
      </div>
      <div>
        {/* <Link to={`/productDetail/${goods_id}`}> */}
        <h2 className=" cursor-pointer truncate ...">{goods_name}</h2>
        {/* </Link> */}
        <div className=" flex justify-between items-center text-rose-600">
          <h3>{salePrice.usdAmountWithSymbol}</h3>
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            {toggle ? (
              <AiFillHeart
                className="text-2xl"
                onClick={() => dispatch(remove_from_wishlists(goods_id))}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl"
                onClick={() =>
                  dispatch(
                    add_to_wishlists({
                      goods_img,
                      goods_id,
                      goods_name,
                      salePrice,
                    })
                  )
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListCard;
