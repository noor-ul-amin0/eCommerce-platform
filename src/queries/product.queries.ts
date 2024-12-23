import { api } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useProducts = (queryParams: Record<string, unknown>) => {
  return useQuery({
    queryKey: ["products", queryParams],
    queryFn: () => api.product.fetchProducts(queryParams),
  });
};
// export const useProducts = (queryParams: Record<string, unknown>) => {
//   return useSuspenseQuery(productsQueryOptions(queryParams));
// };

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => api.product.fetchProduct(id),
  });
};

export const useProductCategories = () => {
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: api.product.fetchProductCategories,
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-product"],
    mutationFn: (product: Product) => api.product.createProduct(product),
    onSuccess(data) {
      queryClient.setQueryData(["products"], (oldData?: Products) => {
        if (!oldData) return oldData;
        const newState = {
          ...oldData,
          products: [...oldData.products, data],
        };
        return newState;
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-product"],
    mutationFn: (product: Product) => api.product.updateProduct(product),
    onSuccess(updatedProduct) {
      queryClient.setQueryData(["products"], (oldData?: Products) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          products: oldData.products.map((prod) =>
            prod.id === updatedProduct.id ? updatedProduct : prod
          ),
        };
      });
      queryClient.invalidateQueries({
        queryKey: ["product", updatedProduct.id],
      });
    },
  });
};
