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
      className="bg-[#00696a] text-white"
      shape="round"
      onClick={handleClick}
    >
      Add Product
    </Button>
  );
};
