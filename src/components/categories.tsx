import React from "react";
import { Flex, Tag } from "antd";
import { useProductCategories } from "@/queries/product.queries";

export const Categories: React.FC = () => {
  const { data } = useProductCategories();
  if (!data) return null;
  return (
    <Flex gap="3" wrap className="gap-y-2">
      {data.map((category: Category) => (
        <Tag key={category}>{category}</Tag>
      ))}
    </Flex>
  );
};
