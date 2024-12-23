import React from "react";
import { Flex, Tag } from "antd";
import { useProductCategories } from "@/queries/product.queries";
import { CategoriesSkeleton } from "../skeletons/categories-skeleton";

export const Categories: React.FC = () => {
  const { data, isLoading } = useProductCategories();

  if (isLoading) return <CategoriesSkeleton />;
  if (!data) return null;

  return (
    <Flex gap="3" wrap className="gap-y-2">
      {data.map((category: Category) => (
        <Tag key={category}>{category}</Tag>
      ))}
    </Flex>
  );
};
