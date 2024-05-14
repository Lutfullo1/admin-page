import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HomeIcon } from "../assets/icons/home-icon";
import { CategoryIcon } from "../assets/icons/category-icon";
import { ProductIcon } from "../assets/icons/product-icon";
import { CreditCardIcon } from "../assets/icons/credit-card-icon";

export const AppLayout = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <ul className="flex flex-col items-center pt-10 w-[150px] bg-blue-600 p-5">
          <li className="w-[50px] p-3">
            <Link className="" to="/app">
              <HomeIcon />
            </Link>
          </li>
          <li className="w-[50px] p-3">
            <Link to="/app/category">
              <CategoryIcon />
            </Link>
          </li>
          <li className="w-[50px] p-3">
            <Link to="/app/product-list">
              <ProductIcon />
            </Link>
          </li>
          <li className="w-[50px] p-3">
            <Link to="/app/payment">
              <CreditCardIcon />
            </Link>
          </li>
        </ul>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};
