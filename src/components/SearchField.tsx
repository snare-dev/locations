import { Search } from "lucide-react";
import { Input } from ".//ui/input";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchUser } from "@/services/apiCalls";
import ErrorMessage from "./ErrorMessage";
import LoadingSipnner from "./LoadingSipnner";
import { userType } from "@/types";

const SearchField = () => {
  const [searchValue, setSearch] = useState<string | undefined>();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["search", searchValue],
    queryFn: () => searchUser(searchValue),
    enabled: searchValue !== undefined,
  });

  let content;

  if (isLoading) {
    content = <LoadingSipnner />;
    }
    
  if (isError) {
    content = <ErrorMessage message={error.message} />;
  }

  if (data) {
    content = data?.map((user: userType) => <li key={user.id}>{user.userName}</li>);
  }

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        className="dropdown relative w-64 md:w-96 mx-auto md:grow-0"
      >
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="rounded-md bg-background pl-8"
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchValue && (
          <ul className="dropdown-content z-[1] divide-y drop-shadow-lg mt-2.5 menu p-2 shadow bg-base-100 rounded-b-md w-full">
            {content}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchField;
