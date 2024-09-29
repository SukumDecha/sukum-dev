"use client";

import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const SearchForm = () => {
  const [term, setTerm] = useState();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          placeholder="Search posts..."
          className="mb-4"
          onChange={(e) => setTerm(e.target.value as any)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </form>
    </div>
  );
};

export default SearchForm;
