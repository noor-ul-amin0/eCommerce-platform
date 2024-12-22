import React, { useEffect } from "react";
import { Form, Input, Button, Select, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useProductCategories } from "@/queries/product.queries";

const { Option } = Select;

interface ProductFormProps {
  onFinish: (values: Product) => void;
  initialValues?: Product;
  isLoading?: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onFinish,
  initialValues,
  isLoading = false,
}) => {
  const [form] = Form.useForm();
  const { data: categories } = useProductCategories();

  useEffect(() => {
    if (initialValues) {
      const { thumbnail, ...rest } = initialValues;
      form.setFieldsValue({
        ...rest,
      });
    }
  }, [initialValues, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="mt-4"
      initialValues={initialValues}
      variant="filled"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Form.Item
          name="title"
          rules={[
            { required: true, message: "Please enter the product title" },
          ]}
        >
          <Input placeholder="Title*" size="large" />
        </Form.Item>

        <Form.Item
          name="price"
          rules={[
            { required: true, message: "Please enter the product price" },
          ]}
        >
          <Input type="number" placeholder="Price*" size="large" />
        </Form.Item>

        <Form.Item
          name="sku"
          rules={[{ required: true, message: "Please enter the SKU" }]}
        >
          <Input placeholder="SKU*" size="large" />
        </Form.Item>

        <Form.Item
          name="stock"
          rules={[
            { required: true, message: "Please enter the product stock" },
            { type: "number", min: 1, message: "Stock must be at least 1" },
          ]}
        >
          <InputNumber
            className="w-full"
            placeholder="Stock*"
            size="large"
            min={1}
          />
        </Form.Item>

        <Form.Item
          name="shippingInformation"
          rules={[
            {
              required: true,
              message: "Please enter shipping information",
            },
          ]}
        >
          <Input placeholder="Shipping Information*" size="large" />
        </Form.Item>

        <Form.Item
          name="warrantyInformation"
          rules={[
            {
              required: true,
              message: "Please enter warranty information",
            },
          ]}
        >
          <Input placeholder="Warranty Information*" size="large" />
        </Form.Item>

        <Form.Item
          name="category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Category*" size="large">
            {categories?.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="discountPercentage"
          rules={[
            {
              required: true,
              message: "Please enter the discount percentage",
            },
            {
              type: "number",
              max: 100,
              message: "Discount percentage must be 100 or less",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            placeholder="Discount Percentage*"
            size="large"
            className="w-full"
          />
        </Form.Item>
      </div>

      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Please enter the product description",
          },
        ]}
      >
        <Input.TextArea rows={4} placeholder="Description*" />
      </Form.Item>

      {!initialValues && (
        <Form.Item
          label="Product Image"
          name="thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e: any) => e && e.fileList}
          rules={[
            {
              required: !initialValues,
              message: "Please upload a product image",
            },
          ]}
        >
          <Upload
            name="thumbnail"
            listType="picture"
            maxCount={1}
            multiple={false}
            beforeUpload={() => false} // Prevent automatic upload
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      )}

      {initialValues?.thumbnail && (
        <div className="w-full mb-4">
          <img
            src={initialValues.thumbnail}
            alt="Current Thumbnail"
            className="object-cover w-32 h-32 ml-auto"
          />
        </div>
      )}

      <Form.Item>
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => window.history.back()}
            className="border border-[#00696a] text-[#00696a]"
            shape="round"
            variant="outlined"
          >
            Go Back
          </Button>
          <Button
            htmlType="submit"
            className="bg-[#00696a] text-white"
            shape="round"
            loading={isLoading}
          >
            {initialValues ? "Edit" : "Add"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
