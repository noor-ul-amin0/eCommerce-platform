import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import emumbaLogo from "../assets/emumba.svg";
import { Link } from "@tanstack/react-router";

export const Header: React.FC<{ openCart: () => void }> = ({ openCart }) => (
  <div className="flex items-center justify-between px-6 py-2 bg-white shadow-md header">
    <Link to="/">
      <img src={emumbaLogo} alt="Company Logo" className="w-auto h-8" />
    </Link>
    <ShoppingCartOutlined
      className="text-2xl cursor-pointer"
      onClick={openCart}
    />
  </div>
);
