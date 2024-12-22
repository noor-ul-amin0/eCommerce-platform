import { createLazyFileRoute } from "@tanstack/react-router";
import { Search } from "@/components/search";
import { Categories } from "@/components/categories";
import { Products } from "@/components/products";
import { AddProductButton } from "@/components/add-product-button";

export const Route = createLazyFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto mb-10">
        <Search />
        <Categories />
      </div>
      <div className="flex justify-end mb-4">
        <AddProductButton />
      </div>
      <Products />
    </>
  );
}
