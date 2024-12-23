import { api } from "@/api";
import { queryOptions } from "@tanstack/react-query";

export const productsQueryOptions = (queryParams?: Record<string, unknown>) =>
  queryOptions({
    queryKey: ["products", queryParams],
    queryFn: () => api.product.fetchProducts(queryParams),
  });

export const productCategoriesQueryOptions = queryOptions({
  queryKey: ["product-categories"],
  queryFn: api.product.fetchProductCategories,
});
