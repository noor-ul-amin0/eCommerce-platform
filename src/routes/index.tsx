import { createFileRoute } from "@tanstack/react-router";
import { Search } from "@/components/search";
import { Categories } from "@/components/categories/categories";
import { Products } from "@/components/products/products";
import { AddProductButton } from "@/components/products/add-product-button";
import { useProducts } from "@/queries/product.queries";
import { useFilters } from "@/hooks/use-filters";
import { ProductsSkeleton } from "@/components/skeletons/product-card-skeleton";
import { Pagination } from "antd";

export const Route = createFileRoute("/")({
  component: LandingPage,
  validateSearch: (search: Record<string, unknown>) =>
    ({
      q: (search.q as string),
      category: (search.category as string),
      page: Number(search.page) || 1,
      pageSize: Number(search.pageSize) || 9,
    }) as ProductUserFilters,
  pendingComponent: () => <ProductsSkeleton />,
});

function LandingPage() {
  const { filters, setFilters } = useFilters(Route.fullPath);
  const { page = 1, pageSize = 9 } = filters;

  const { data, isLoading } = useProducts({
    ...filters,
    skip: (page - 1) * pageSize,
    limit: pageSize,
  });

  const handleSearch = (search: string) => {
    setFilters({ q: search, page: 1 }); // Reset to first page on new search
  };

  const handleCategorySelect = (category: string) => {
    setFilters({ category, page: 1 }); // Reset to first page on category change
  };

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setFilters({ page: newPage, pageSize: newPageSize });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto mb-10">
        <Search search={filters.q} onSearch={handleSearch} />
        <Categories onSelect={handleCategorySelect} />
      </div>
      <div className="flex justify-end mb-4">
        <AddProductButton />
      </div>
      <Products products={data?.products || []} isLoading={isLoading} />
      <div className="flex justify-end mt-10">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={data?.total || 0}
          onChange={handlePageChange}
          showSizeChanger
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
}
