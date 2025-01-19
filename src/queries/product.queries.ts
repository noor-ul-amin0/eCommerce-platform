import { api } from "@/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const useProducts = (
  queryParams?: ProductUserFilters & { skip?: number; limit?: number }
) => {
  return useQuery({
    queryKey: ["products", queryParams],
    placeholderData: keepPreviousData,
    queryFn: () => {
      if (queryParams?.category) {
        return api.product.fetchProductsByCategory(
          queryParams.category,
          queryParams?.limit,
          queryParams?.skip
        );
      }
      return api.product.fetchProducts(
        queryParams?.q,
        queryParams?.limit,
        queryParams?.skip
      );
    },
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

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["products-by-category", category],
    queryFn: () => api.product.fetchProductsByCategory(category),
    enabled: !!category, // Only run the query if a category is selected
  });
};
