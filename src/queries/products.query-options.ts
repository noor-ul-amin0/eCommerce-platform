import { api } from "@/api";
import { queryOptions } from "@tanstack/react-query";

export const productsQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: api.product.fetchProducts,
});

export const productCategoriesQueryOptions = queryOptions({
  queryKey: ["product-categories"],
  queryFn: api.product.fetchProductCategories,
});
