import React from "react";
import { Link } from "react-router-dom";
import { useGetProducts } from "./service/query/useGetProducts";
import { useDeleteProduct } from "./service/mutation/useDeleteProduct";
import { queryClient } from "../../config/query-client";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  faEdit,
  faTrash,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import goods from "../../assets/img/goods.png";

export const ProductsList = () => {
  const { data, isLoading } = useGetProducts();
  const { mutate: deleteProduct, isPending } = useDeleteProduct();
  const navigate = useNavigate();

  const exit = () => {
    Cookies.remove("user_token");
    navigate("/", { replace: true });
  };

  const deleteItem = (id) => {
    deleteProduct(id, {
      onSuccess: () => {
        toast.success("Successfully deleted");
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    });
  };

  const editItem = () => {};
  return (
    <>
      <div className="p-9 bg-white flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4">Продукты</h2>
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
          {data?.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 border-y text-center">ID</th>
                  <th className="p-2 border-y text-center">Изображение</th>
                  <th className="p-2 border-y text-center">Название</th>
                  <th className="p-2 border-y text-center">Цена</th>
                  <th className="p-2 border-y text-center">Бренд</th>
                  <th className="p-2 border-y text-center">Действия</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2 border-y text-center">{item.id}</td>
                    <td className="p-2 border-y text-center">
                      <div className="flex justify-center">
                        <img
                          src={item.img}
                          alt="img"
                          className="w-20 h-20 object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-2 border-y text-center">{item.title}</td>
                    <td className="p-2 border-y text-center">{item.price}</td>
                    <td className="p-2 border-y text-center">{item.brand}</td>
                    <td className="p-2 border-y text-center">
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-2 bg-red-400 text-white rounded-md"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <Link
                        to={`/app/product/edit/${item.id}`}
                        onClick={editItem}
                        className="p-2 bg-blue-400 text-white rounded-md ml-2"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-center mt-5">
                Вы еще не создали ни одного продукта
              </p>
              <img src={goods} alt="goods" />
            </div>
          )}
        </div>
      </div>
      <div className="p-9 bg-white text-center">
        <Link
          to="/app/product/create"
          className="text-white bg-blue-400 px-4 py-2 rounded-md inline-block"
        >
          Создать продукт
        </Link>
      </div>
    </>
  );
};
