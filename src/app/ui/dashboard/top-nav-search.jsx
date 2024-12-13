"use client";
import { Input } from "@cloudscape-design/components";
import { useState } from "react";
export default function TopNavSearch() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Input
      ariaLabel="Input field"
      clearAriaLabel="Clear"
      value={searchValue}
      type="search"
      placeholder="Search"
      onChange={({ detail }) => setSearchValue(detail.value)}
    />
  );
}
