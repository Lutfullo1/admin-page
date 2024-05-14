import React from "react";
import { CategoryForm } from "../../components/category-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleCategory } from "./service/query/useGetSingleCategory";
import { useEditCategory } from "./service/mutation/useEditCategory";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const CategoryEdit = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCategory(id);
  const { mutate } = useEditCategory(id);
  const navigate = useNavigate();

  const client = useQueryClient();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Successfully edited");
        client.invalidateQueries({ queryKey: ["single-category", id] });
        navigate("/app/category");
      },
    });
  };
  return isLoading ? (
    <h2>loading...</h2>
  ) : (
    <>
      <div className="p-9 bg-white">
        <Link className="text-lg font-semibold mb-4" to="/app/category">
          Категории /
        </Link>
        <Link className="text-lg font-semibold mb-4">Изменить категорию</Link>
      </div>
      <div className="bg-gray-300 p-9">
        <div className="bg-white p-9 rounded-lg">
          <CategoryForm initialValue={data} submit={submit} />
        </div>
      </div>
    </>
  );
};
