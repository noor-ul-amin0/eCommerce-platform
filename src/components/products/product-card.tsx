import React, { useState } from "react";
import { Card } from "antd";
import { EditFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { ProductDetailsModal } from "./product-details-modal";
import { useNavigate } from "@tanstack/react-router";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    navigate({ to: `/products/${product.id}/edit` });
  };

  return (
    <>
      <Card className="relative bg-[#fafdfc]" hoverable onClick={openModal}>
        <div className="flex justify-center">
          <img
            loading="lazy"
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-auto h-32"
          />
          <EditFilled
            className="absolute text-[#00a599] cursor-pointer top-2 right-2 hover:text-[#00a599]/80"
            onClick={handleClick}
          />
        </div>
        <h3 className="mt-4 text-start">{product.title}</h3>
        <p className="font-bold">
          ${product.price}{" "}
          <sup className="font-normal line-through">
            {product.discountPercentage}%
          </sup>
        </p>
        <ShoppingCartOutlined className="absolute text-white z-10 bottom-2 right-2 size-8 bg-[#00a599] hover:bg-[#00a599]/80 border-none rounded-lg flex justify-center" />
      </Card>
      <ProductDetailsModal
        visible={isModalVisible}
        onClose={closeModal}
        product={product}
      />
    </>
  );
};
