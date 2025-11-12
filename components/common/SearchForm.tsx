import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchForm = () => {
  return (
    <div className="relative bg-gray-100 rounded-md ">
      <Input type="text" placeholder="Search" className="bg-transparent pl-8" />
      <Search className="absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50" />
    </div>
  );
};

export default SearchForm;
