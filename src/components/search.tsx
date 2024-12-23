import React, { useState } from "react";
import { Input } from "antd";

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="w-full max-w-md">
      <Input.Search
        placeholder="Search products..."
        onSearch={handleSearch}
        loading={false}
        allowClear
      />
    </div>
  );
};
