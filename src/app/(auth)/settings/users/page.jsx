"use client";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";
import {
  Table,
  Box,
  Button,
  Header,
  SpaceBetween,
  TextFilter,
  Pagination,
} from "@cloudscape-design/components";
import { memo, useState } from "react";
import usersJsonData from "../../../data/users.json";
import { EditModal, TableDefinition } from "./data";
import { create } from "zustand";
import { capitalizeFirstLetter } from "@/lib/helper";

export const useEditModalStore = create((set) => ({
  visible: false,
  item: null,
  showModal: (item) => set({ visible: true, item }),
  hideModal: () => set({ visible: false, item: null }),
}));

const moduleName = "company";

export default function UsersPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Settings", href: "#" },
    { text: "Users", href: "#" },
  ];

  // add naming constants singular plural without state

  return (
    <DashboardLayout
      BodyContent={<BodyContent usersJsonData={usersJsonData} />}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}

//wrap with BodyContent Component
const BodyContent = memo(function BodyContent({ usersJsonData }) {
  return (
    <div>
      <Table
        sortingColumn={[]}
        columnDefinitions={TableDefinition.columnDefinitions}
        items={usersJsonData}
        //   selectedItems={selectedItems}
        //   onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
        header={
          <Header
            counter={`(${usersJsonData?.length})`}
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button
                  onClick={() => useEditModalStore.getState().showModal(true)}
                >
                  Add new {TableDefinition.moduleName}
                </Button>
                {/* <Button>Delete</Button> */}
              </SpaceBetween>
            }
          >
            {capitalizeFirstLetter(TableDefinition.modulePluralName)}
          </Header>
        }
        variant="embedded"
        filter={<TextFilter filteringPlaceholder="Find branches" />}
        pagination={
          usersJsonData.length > 10 && (
            <Pagination currentPageIndex={1} pagesCount={1} />
          )
        }
      />
      <EditModal></EditModal>
    </div>
  );
});
