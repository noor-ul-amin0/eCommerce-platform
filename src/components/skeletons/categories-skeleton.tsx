import React from "react";
import { Skeleton } from "antd";

export const CategoriesSkeleton: React.FC = () => (
  <div className="flex flex-wrap gap-2">
    {Array.from({ length: 20 }).map((_, index) => (
      <Skeleton.Button
        key={index}
        active
        size="small"
        shape="round"
        style={{ width: 80 }}
      />
    ))}
  </div>
);
