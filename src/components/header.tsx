import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import emumbaLogo from "../assets/emumba.svg";
import { useCartStore } from "@/store/cart.store";
import { Badge } from "antd";
import { Link } from "@tanstack/react-router";

export const Header: React.FC<{ openCart: () => void }> = ({ openCart }) => {
  const itemsCount = useCartStore((state) => state.items.length);

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white shadow-md header">
      <Link to="/" search={{ q: "", category: "", page: 1, pageSize: 10 }}>
        <img src={emumbaLogo} alt="Company Logo" className="w-auto h-8" />
      </Link>
      <Badge count={itemsCount} size="small">
        <ShoppingCartOutlined
          className="text-2xl cursor-pointer"
          onClick={openCart}
        />
      </Badge>
    </div>
  );
};
