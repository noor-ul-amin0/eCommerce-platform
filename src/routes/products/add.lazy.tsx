import { createLazyFileRoute } from "@tanstack/react-router";
import { notification } from "antd";
import { useAddProduct } from "@/queries/product.queries";
import { ProductForm } from "@/components/products/product-form";

export const Route = createLazyFileRoute("/products/add")({
  component: AddProductPage,
});

function AddProductPage() {
  const [api, context] = notification.useNotification();
  const navigate = Route.useNavigate();
  const { mutate, isPending } = useAddProduct();

  const onFinish = (values: Product) => {
    const product = {
      ...values,
      thumbnail: URL.createObjectURL(
        (values.thumbnail as any)[0].originFileObj
      ),
    };
    mutate(product, {
      onSuccess: () => {
        api.success({
          message: "Product Added",
          description: "The product has been added successfully.",
        });
        setTimeout(() => {
          navigate({
            to: "/",
            search: { page: 1, pageSize: 9, category: "", q: "" },
          });
        }, 2000);
      },
      onError: () => {
        api.error({
          message: "Add Failed",
          description:
            "There was an error adding the product. Please try again.",
        });
      },
    });
  };

  return (
    <>
      {context}
      <h1 className="mb-4 text-2xl font-semibold">Add Product</h1>
      <div className="max-w-2xl mx-auto">
        <ProductForm onFinish={onFinish} isLoading={isPending} />
      </div>
    </>
  );
}
