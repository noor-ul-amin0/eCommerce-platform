import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Drawer } from "antd";
import { useState } from "react";
import { Header } from "@/components/header";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const openCart = () => {
    setIsCartVisible(true);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="bg-white ">
      <Header openCart={openCart} />
      <Drawer
        title="Cart"
        placement="right"
        onClose={closeCart}
        open={isCartVisible}
      >
        {/* Cart items will be displayed here */}
      </Drawer>
      <div className="container p-5 mx-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-8 text-2xl text-gray-600">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Go Back Home
      </a>
    </div>
  );
}
