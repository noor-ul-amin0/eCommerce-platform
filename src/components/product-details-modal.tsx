import React from "react";
import { Modal, Button, Rate, InputNumber } from "antd";

interface ProductDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  visible,
  onClose,
  product,
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={[
        <div className="flex flex-col items-start space-y-1">
          <label className="text-sm font-medium text-gray-700">Quantity</label>
          <InputNumber size="middle" min={1} max={10} defaultValue={1} />
        </div>,
        <Button
          className="bg-[#00696a] text-white"
          shape="round"
          onClick={() => {
            // Handle add to cart action
          }}
        >
          Add to Cart
        </Button>,
      ]}
      centered
      classNames={{
        footer: "flex items-end justify-between w-full",
      }}
      className="product-details-modal"
    >
      <div className="flex flex-col items-start">
        <div className="flex justify-center w-full mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-auto h-48"
          />
        </div>
        <h2 className="mb-2 text-2xl font-semibold">{product.title}</h2>
        <div className="flex items-center justify-between w-full mb-4">
          <span className="mr-2 text-lg font-bold">${product.price}</span>
          <span className="flex items-center">
            <Rate disabled defaultValue={product.rating} />
            <span className="ml-1">({product.rating})</span>
          </span>
        </div>
        <p className="text-left ">{product.description}</p>
      </div>
    </Modal>
  );
};
