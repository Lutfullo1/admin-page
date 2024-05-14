import { nanoid } from "@reduxjs/toolkit";
import { Home } from "../pages/home/home";
import { Category } from "../pages/category/category";
import { CategoryCreate } from "../pages/category/category-create";
import { CategoryEdit } from "../pages/category/category-edit";
import { CategoryProduct } from "../pages/category/category-product";
import { ProductsList } from "../pages/products/product-list";
import { ProductCreate } from "../pages/products/product-create";
import { Payment } from "../pages/payment/payment";
import { ProductEdit } from "../pages/products/product-edit";

export default [
  {
    component: <Home />,
    id: nanoid(),
  },
  {
    component: <Category />,
    path: "category",
    id: nanoid(),
  },
  {
    component: <CategoryCreate />,
    path: "category/create",
    id: nanoid(),
  },
  {
    component: <CategoryEdit />,
    path: "category/edit/:id",
    id: nanoid(),
  },
  {
    component: <ProductEdit />,
    path: "product/edit/:id",
    id: nanoid(),
  },
  {
    component: <CategoryProduct />,
    path: "category-product/:id/:title",
    id: nanoid(),
  },
  {
    component: <Payment />,
    path: "payment",
    id: nanoid(),
  },
  {
    component: <ProductsList />,
    path: "product-list",
    id: nanoid(),
  },
  {
    component: <ProductCreate />,
    path: "product/create",
    id: nanoid(),
  },
];
