import React from "react";
import { Row, Col } from "antd";
import { ProductCard } from "./product-card";
import { ProductCardSkeleton } from "../skeletons/product-card-skeleton";

interface ProductsProps {
  products: Product[];
  isLoading: boolean;
}

export const Products: React.FC<ProductsProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <Row gutter={[16, 16]}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <ProductCardSkeleton />
          </Col>
        ))}
      </Row>
    );
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
