import React from "react";
import { Card, Col, Row, Skeleton } from "antd";

const ProductCardSkeleton: React.FC = () => (
  <Card className="relative bg-[#fafdfc]" hoverable>
    <div className="flex justify-center">
      <Skeleton.Image active className="object-cover w-auto h-32" />
    </div>
    <Skeleton active paragraph={{ rows: 2 }} className="mt-2" />
    <Skeleton.Button active size="small" className="w-[100] mt-2" />
    <div className="absolute bottom-2 right-2">
      <Skeleton.Button active size="large" shape="circle" />
    </div>
  </Card>
);

export const ProductsSkeleton: React.FC<{ length?: number }> = ({
  length = 6,
}) => {
  return (
    <Row gutter={[16, 16]}>
      {Array.from({ length }).map((_, index) => (
        <Col key={index} xs={24} sm={12} md={8}>
          <ProductCardSkeleton />
        </Col>
      ))}
    </Row>
  );
};
