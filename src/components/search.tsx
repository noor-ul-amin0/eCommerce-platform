import React, { useState } from "react";
import { Input } from "antd";

interface SearchProps {
  search: string;
  onSearch: (value: string) => void;
}
export const Search: React.FC<SearchProps> = ({ search, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(search);

  const handleSearch = (value: string) => {
    onSearch(value);
  };
  return (
    <div className="w-full max-w-md">
      <Input.Search
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        loading={false}
        allowClear
      />
    </div>
  );
};
