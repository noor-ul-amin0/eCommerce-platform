import React from "react";
import { Card, Skeleton } from "antd";

export const ProductCardSkeleton: React.FC = () => (
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
