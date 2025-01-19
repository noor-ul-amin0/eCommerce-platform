declare global {
  interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    rating: number;
    discountPercentage: number;
    thumbnail: string;
    sku: string;
    stock: number;
    warrantyInformation: string;
    shippingInformation: string;
    category: string;
  }

  interface Products {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }

  type ProductUserFilters = {
    q: string;
    category: string;
    page: number;
    pageSize: number;
  };

  type Category = string;
}

export {};
