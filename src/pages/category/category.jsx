import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useGetCategory } from "./service/query/useGetCategory";
import { useDeleteCategory } from "./service/mutation/useDeleteCategory";
import { queryClient } from "../../config/query-client";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import {
  faEye,
  faEdit,
  faTrash,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import goods from "../../assets/img/goods.png";

export const Category = () => {
  const { mutate: deleteCategory, isPending } = useDeleteCategory();
  const { data, isLoading } = useGetCategory();
  const navigate = useNavigate();

  const exit = () => {
    Cookies.remove("user_token");
    navigate("/", { replace: true });
  };

  const deleteItem = (id) => {
    deleteCategory(id, {
      onSuccess: () => {
        toast.success("Successfully deleted");
        queryClient.invalidateQueries({ queryKey: ["category"] });
      },
    });
  };

  const editItem = () => {};
  return (
    <>
      <div className="p-9 bg-white flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4">Категории</h2>
        <div>
          <button
            onClick={exit}
            className="text-lg font-semibold mb-4 py-2 px-3 bg-gray-300 rounded-md flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            Выйти
          </button>
        </div>
      </div>
      <div className="bg-gray-300 p-9">
        <div className="bg-white p-9 rounded-lg">
          {data?.length ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 border-y">ID</th>
                  <th className="p-2 border-y">Изображение</th>
                  <th className="p-2 border-y">Название</th>
                  <th className="p-2 border-y">Действия</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2 border-y text-center">{item.id}</td>
                    <td className="p-2 border-y text-center">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 overflow-hidden rounded-md">
                          <img
                            src={item.img}
                            alt="Category"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2 border-y text-center">{item.title}</td>
                    <td className="p-2 border-y text-center">
                      <div className="flex items-center gap-4 justify-center">
                        <Link
                          to={`/app/category-product/${item.id}/${item.title}`}
                          className="text-blue-600 hover:underline mr-2"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="px-3 py-1 bg-red-400 text-white rounded-md hover:bg-red-500"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <Link
                          to={`/app/category/edit/${item.id}`}
                          className="px-3 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-500"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-center mt-5">
                Вы еще не создали ни одного категории
              </p>
              <img src={goods} alt="goods" />
            </div>
          )}
        </div>
      </div>
      <div className="p-9 bg-white text-center">
        <Link
          to="/app/category/create"
          className="text-white bg-blue-400 px-4 py-2 rounded-md inline-block mb-4"
        >
          Создать категорию
        </Link>
      </div>
    </>
  );
};
