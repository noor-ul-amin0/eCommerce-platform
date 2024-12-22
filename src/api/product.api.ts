import { axios } from "./axios";

export const fetchProducts = async (): Promise<Products> => {
  const response = await axios.get("/products");
  return response.data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};

export const fetchProductCategories = async (): Promise<Category[]> => {
  const response = await axios.get("/products/category-list");
  return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await axios.post("/products/add", product);
  return response.data;
};

export const updateProduct = async (product: Product): Promise<Product> => {
  const { id, ...rest } = product;
  const response = await axios.put(`/products/${id}`, rest);
  return response.data;
};
