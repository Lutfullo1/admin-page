import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import goods from "../../assets/img/goods.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

export const Home = () => {
  const navigate = useNavigate();
  const exit = () => {
    Cookies.remove("user_token");
    navigate("/", { replace: true });
  };
  return (
    <div className="p-9">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold mb-4 py-2 px-3">Главная</p>
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
      <div className="flex flex-col items-center justify-center gap-5">
        <img src={goods} alt="goods" />
        <div className="p-9 bg-white text-center">
          <Link
            to="/app/product/create"
            className="text-white bg-blue-400 px-4 py-2 rounded-md inline-block"
          >
            Создать продукт
          </Link>
        </div>
      </div>
    </div>
  );
};
