import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id) =>
      request.delete(`/products/${id}`).then((res) => res.data),
  });
};
