import React from "react";
import { CategoryForm } from "../../components/category-form";
import { useCreateCategory } from "./service/mutation/useCreateCategory";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const CategoryCreate = () => {
  const { mutate } = useCreateCategory();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Successfully created");
        navigate("/app/category");
      },
    });
  };

  return (
    <>
      <div className="p-9 bg-white">
        <Link className="text-lg font-semibold mb-4" to="/app/category">
          Категории /
        </Link>
        <Link className="text-lg font-semibold mb-4" to="/app/category/create">
          Новая категория
        </Link>
      </div>
      <div className="bg-gray-300 p-9">
        <div className="bg-white p-9 rounded-lg">
          <CategoryForm submit={submit} />
        </div>
      </div>
    </>
  );
};
