import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetCategoryProducts = (params) => {
  return useQuery({
    queryKey: ["single-category-product", params],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            categoryId_like: params.id,
            categoryName_like: params.name,
          },
        })
        .then((res) => res.data),
  });
};
