import React from "react";
import { Drawer, Button, Divider } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useCartStore } from "@/store/cart.store";

interface CartDrawerProps {
    open: boolean;
    onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
    const { items, updateQuantity, removeItem, clearCart, getTotalAmount } =
        useCartStore();

    const handleQuantityChange = (
        productId: string,
        currentQuantity: number,
        increment: boolean
    ) => {
        const newQuantity = increment ? currentQuantity + 1 : currentQuantity - 1;
        if (newQuantity === 0) {
            removeItem(productId);
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    return (
        <Drawer
            title={
                <div className="flex justify-between items-center">
                    <span>Cart</span>
                    <Button type="link" onClick={clearCart} className="text-destructive">
                        Clear Cart
                    </Button>
                </div>
            }
            placement="right"
            onClose={onClose}
            open={open}
            footer={
                <div className="space-y-4">
                    <div className="text-center text-lg font-semibold">
                        Total: ${getTotalAmount().toFixed(2)}
                    </div>
                    <Button
                        className="w-full bg-brand text-white hover:bg-brand-light"
                        size="large"
                        onClick={() => {
                            // Handle checkout
                        }}
                    >
                        Checkout Now
                    </Button>
                </div>
            }
        >
            <div className="space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-4">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-gray-500">
                                    ${item.price} x {item.quantity}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <Button
                                shape="circle"
                                icon={<MinusOutlined />}
                                onClick={() =>
                                    handleQuantityChange(item.id, item.quantity, false)
                                }
                            />
                            <Button
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={() => handleQuantityChange(item.id, item.quantity, true)}
                            />
                        </div>
                        <Divider />
                    </div>
                ))}
                {items.length === 0 && (
                    <div className="text-center text-gray-500">Your cart is empty</div>
                )}
            </div>
        </Drawer>
    );
}; 