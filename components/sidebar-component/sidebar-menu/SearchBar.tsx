import { Search } from "lucide-react";
import React from "react";
import { Input } from "../../ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-sm my-3">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={18}
      />
      <Input
        type="text"
        placeholder="Search"
        className="pl-10 py-2 rounded-lg ring-0"
      />
    </div>
  );
};

export default SearchBar;
