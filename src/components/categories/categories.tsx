import React, { useState } from "react";
import { Tag } from "antd";
import { useProductCategories } from "@/queries/product.queries";
import { CategoriesSkeleton } from "../skeletons/categories-skeleton";

export const Categories: React.FC<{ onSelect: (category: string) => void }> = ({
  onSelect,
}) => {
  const { data, isLoading } = useProductCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) return <CategoriesSkeleton />;
  if (!data) return null;

  const handleClick = (category: string) => {
    const newSelected = selectedCategory === category ? null : category;
    setSelectedCategory(newSelected);
    onSelect(newSelected || "");
  };

  return (
    <div className="flex flex-wrap gap-2">
      {data.map((category: Category) => (
        <Tag
          key={category}
          color={selectedCategory === category ? "blue" : "default"}
          onClick={() => handleClick(category)}
          style={{ cursor: "pointer" }}
        >
          {category}
        </Tag>
      ))}
    </div>
  );
};
