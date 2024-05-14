import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useEditProduct = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.patch(`/products/${id}`, data).then((res) => res.data),
  });
};
