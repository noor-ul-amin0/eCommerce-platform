import React from "react";
import { Button } from "antd";
import { useNavigate } from "@tanstack/react-router";

export const AddProductButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: "/products/add" });
  };
  return (
    <Button
      className="bg-brand text-white hover:bg-brand-light"
      shape="round"
      onClick={handleClick}
    >
      Add Product
    </Button>
  );
};
