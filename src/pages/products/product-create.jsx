import React from "react";
import { ProductForm } from "../../components/product-form";
import { useGetCategory } from "../category/service/query/useGetCategory";
import { useCreateProduct } from "./service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const ProductCreate = () => {
  const { data, isLoading } = useGetCategory();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();
  const submit = (data) => {
    const categoryId = data.category.split(",")[0];
    const categoryName = data.category.split(",")[1];
    const { category, ...all } = data;
    mutate(
      { ...all, categoryId, categoryName },
      {
        onSuccess: () => {
          toast.success("Successfully created");
          navigate("/app/product-list");
        },
      }
    );
  };
  return isLoading ? (
    <h2>loading...</h2>
  ) : (
    <>
      <div className="p-9 bg-white">
        <Link className="text-lg font-semibold mb-4" to="/app/product-list">
          Продукты /
        </Link>
        <Link className="text-lg font-semibold mb-4" to="/app/product/create">
          Новая Продукты
        </Link>
      </div>
      <div className="bg-gray-300 p-9">
        <div className="mx-[auto] bg-white p-9 rounded-lg">
          <ProductForm category={data} submit={submit} />
        </div>
      </div>
    </>
  );
};
