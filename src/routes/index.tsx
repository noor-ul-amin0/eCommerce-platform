import { createFileRoute } from "@tanstack/react-router";
import { Search } from "@/components/search";
import { Categories } from "@/components/categories";
import { Products } from "@/components/products";
import { AddProductButton } from "@/components/add-product-button";
import { useProducts } from "@/queries/product.queries";
import { productsQueryOptions } from "@/queries/products.query-options";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(productsQueryOptions),
  component: LandingPage,
  pendingComponent: () => <h1>Loading...</h1>,
});

function LandingPage() {
  const { data } = useProducts();
  return (
    <>
      <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto mb-10">
        <Search />
        <Categories />
      </div>
      <div className="flex justify-end mb-4">
        <AddProductButton />
      </div>
      <Products products={data.products} />
    </>
  );
}
