import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: ["single-product", id],
    queryFn: () => request.get(`/products/${id}`).then((res) => res.data),
  });
};
