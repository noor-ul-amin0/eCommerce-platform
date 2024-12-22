import { useProducts } from "@/queries/product.queries";
import React from "react";
import { Row, Col } from "antd";
import { ProductCard } from "./product-card";

export const Products: React.FC = () => {
  const { data } = useProducts();
  if (!data) return null;

  return (
    <Row gutter={[16, 16]}>
      {data.products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
