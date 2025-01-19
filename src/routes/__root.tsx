import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ConfigProvider, Drawer } from "antd";
import { useState } from "react";
import { Header } from "@/components/header";
import type { QueryClient } from "@tanstack/react-query";
import { CartDrawer } from "@/components/cart/cart-drawer";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
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
    <ConfigProvider
      theme={{
        cssVar: true,
        components: {
          Button: {
            colorPrimaryHover: "#00696a",
          },
        },
      }}
    >
      <div className="bg-white ">
        <Header openCart={openCart} />
        <CartDrawer open={isCartVisible} onClose={closeCart} />
        <div className="container p-5 mx-auto">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </div>
    </ConfigProvider>
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
