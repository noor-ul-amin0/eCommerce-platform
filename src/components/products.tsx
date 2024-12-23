import React from "react";
import { Row, Col } from "antd";
import { ProductCard } from "./product-card";

interface ProductsProps {
  products: Product[];
}
export const Products: React.FC<ProductsProps> = ({ products }) => {
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
