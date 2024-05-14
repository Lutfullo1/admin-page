import React from "react";
import { ProductForm } from "../../components/product-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProduct } from "./service/query/useGetSingleProduct";
import { useEditProduct } from "./service/mutation/useEditProduct";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCategory } from "../category/service/query/useGetCategory";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const ProductEdit = () => {
  const { data: category, isLoading: isCategoryLoading } = useGetCategory();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProduct(id);
  const { mutate } = useEditProduct(id);
  const navigate = useNavigate();
  const client = useQueryClient();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Successfully edited");
        client.invalidateQueries({ queryKey: ["single-product", id] });
        navigate("/app/product-list");
      },
    });
  };
  return isLoading ? (
    <h2>loading...</h2>
  ) : (
    <>
      <div className="p-9 bg-white">
        <Link className="text-lg font-semibold mb-4" to="/app/product-list">
          Продукты /
        </Link>
        <Link className="text-lg font-semibold mb-4">Изменить продукт</Link>
      </div>
      <div className="bg-gray-300 p-9">
        <div className="bg-white p-9 rounded-lg">
          <ProductForm
            category={category}
            initialValue={data}
            submit={submit}
          />
        </div>
      </div>
    </>
  );
};
