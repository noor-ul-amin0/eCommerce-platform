import React from "react";
import { Empty } from "antd";

export const NoProducts: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-8">
            <Empty
                description="No products found"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
        </div>
    );
}; 