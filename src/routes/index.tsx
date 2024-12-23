import { createFileRoute } from "@tanstack/react-router";
import { Search } from "@/components/search";
import { Categories } from "@/components/categories/categories";
import { Products } from "@/components/products/products";
import { AddProductButton } from "@/components/products/add-product-button";
import { useProducts } from "@/queries/product.queries";
import { useFilters } from "@/hooks/use-filters";

type ProductUserFilters = {
  q: string;
};
export const Route = createFileRoute("/")({
  component: LandingPage,
  validateSearch: () => ({}) as ProductUserFilters,
  pendingComponent: () => <h1>Loading...</h1>,
});

function LandingPage() {
  const { filters, resetFilters, setFilters } = useFilters(Route.fullPath);
  const { data, isLoading } = useProducts(filters);
  const handleSearch = (search: string) => {
    setFilters({ q: search });
  };
  return (
    <>
      <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto mb-10">
        <Search search={filters.q} onSearch={handleSearch} />
        <Categories />
      </div>
      <div className="flex justify-end mb-4">
        <AddProductButton />
      </div>
      <Products products={data?.products || []} isLoading={isLoading} />
    </>
  );
}
