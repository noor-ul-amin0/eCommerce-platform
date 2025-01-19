import { useProduct, useUpdateProduct } from "@/queries/product.queries";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ProductForm } from "@/components/products/product-form";
import { notification } from "antd";

export const Route = createLazyFileRoute("/products/$productId/edit")({
  component: EditProductPage,
});

function EditProductPage() {
  const { productId } = Route.useParams();
  const { data, isLoading } = useProduct(productId);
  const navigate = Route.useNavigate();
  const { mutate: updateMutate, isPending: isUpdating } = useUpdateProduct();
  const [api, context] = notification.useNotification();

  const onFinish = (values: Product) => {
    if (!data) return;
    const updatedProduct = {
      ...values,
      thumbnail: values.thumbnail
        ? URL.createObjectURL((values.thumbnail as any)[0].originFileObj)
        : data.thumbnail,
    };
    updateMutate(
      { ...updatedProduct, id: productId },
      {
        onSuccess: () => {
          api.success({
            message: "Product Edited",
            description: "The product has been edited successfully.",
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
            message: "Edit Failed",
            description:
              "There was an error editing the product. Please try again.",
          });
        },
      }
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {context}
      <h1 className="mb-4 text-2xl font-semibold">Edit Product</h1>
      <div className="max-w-2xl mx-auto">
        <ProductForm
          onFinish={onFinish}
          initialValues={data}
          isLoading={isUpdating}
        />
      </div>
    </>
  );
}
