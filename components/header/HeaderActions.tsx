import SearchForm from "../common/SearchForm";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Folder, Link, Plus } from "lucide-react";

const HeaderActions = () => {
  return (
    <div className="flex">
      <div className="lg:flex items-center gap-x-2 hidden">
        <SearchForm />
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-4"
        />
      </div>

      <div className="flex items-center">
        <Button
          variant="ghost"
          className="hidden lg:flex items-center gap-x-1 text-gray-700 hover:bg-transparent"
        >
          <Folder className="w-4 h-4" />
          <span>Manage</span>
        </Button>

        <Button
          variant="ghost"
          className="hidden lg:flex items-center gap-x-1 text-gray-700 hover:bg-transparent"
        >
          <Link className="w-4 h-4" />
          <span>Share</span>
        </Button>

        <Button variant="default">Create Task</Button>
      </div>
    </div>
  );
};

export default HeaderActions;
