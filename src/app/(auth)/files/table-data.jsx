"use client";
import { memo, useEffect, useState } from "react";

import {
  Box,
  Button,
  ButtonDropdown,
  CollectionPreferences,
  FormField,
  Link,
  RadioGroup,
  SpaceBetween,
  Header,
  Pagination,
  Cards,
  PropertyFilter,
  Input,
  Modal,
  Table,
  TextFilter,
  Popover,
  StatusIndicator,
  Grid,
} from "@cloudscape-design/components";

import { create } from "zustand";
import { capitalizeFirstLetter } from "@/lib/helper";
import { useSearchParams } from "next/navigation";

import CreateForm from "./create-form";
import TableComponent from "./table";

export const useEditModalStore = create((set) => ({
  visible: false,
  item: null,
  showModal: (item) => set({ visible: true, item }),
  hideModal: () => set({ visible: false, item: null }),
}));

export function HeaderComponent({ item }) {
  return (
    <div>
      <Header
        counter={`(${item?.length})`}
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button
              onClick={() => useEditModalStore.getState().showModal(true)}
            >
              Add new file
            </Button>
          </SpaceBetween>
        }
      >
        Files
      </Header>
    </div>
  );
}

//wrap with BodyContent Component
export function BodyContent({ file }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Clean initial render
  }

  return isClient && <TableComponent file={file} />;
}

// <Table
// columnDefinitions={TableDefinition.columnDefinitions}
// items={file}
// //   selectedItems={selectedItems}
// //   onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
// header={<HeaderComponent item={file}></HeaderComponent>}
// variant="embedded"
// // filter={<TextFilter filteringPlaceholder="Find branches" />}
// pagination={
//   file.length > 10 && <Pagination currentPageIndex={1} pagesCount={1} />
// }
// />
