import React from "react";
import { Row, Col } from "antd";
import { ProductCard } from "./product-card";
import { ProductsSkeleton } from "../skeletons/product-card-skeleton";
import { NoProducts } from "./no-products";

interface ProductsProps {
  products: Product[];
  isLoading: boolean;
}

export const Products: React.FC<ProductsProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (!products.length) {
    return <NoProducts />;
  }

  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
