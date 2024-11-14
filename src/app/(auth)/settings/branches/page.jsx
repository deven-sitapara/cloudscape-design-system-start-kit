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
import branchesJsonData from "../../../data/branches.json";
import { EditModal, TableDefinition } from "./data";
import { create } from "zustand";

export const useEditModalStore = create((set) => ({
  visible: false,
  item: null,
  showModal: (item) => set({ visible: true, item }),
  hideModal: () => set({ visible: false, item: null }),
}));

export default function BranchesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Settings", href: "#" },
    { text: "Branches", href: "#" },
  ];

  return (
    <DashboardLayout
      BodyContent={<BodyContent branchesJsonData={branchesJsonData} />}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}

//wrap with BodyContent Component
const BodyContent = memo(function BodyContent({ branchesJsonData }) {
  return (
    <div>
      <Table
        sortingColumn={[]}
        columnDefinitions={TableDefinition.columnDefinitions}
        items={branchesJsonData}
        //   selectedItems={selectedItems}
        //   onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
        header={
          <Header
            counter={`(${branchesJsonData?.length})`}
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button
                  onClick={() => useEditModalStore.getState().showModal(true)}
                >
                  Add new branch
                </Button>
                {/* <Button>Delete</Button> */}
              </SpaceBetween>
            }
          >
            Branches
          </Header>
        }
        variant="embedded"
        filter={<TextFilter filteringPlaceholder="Find branches" />}
        pagination={
          branchesJsonData.length > 10 && (
            <Pagination currentPageIndex={1} pagesCount={1} />
          )
        }
      />
      <EditModal></EditModal>
    </div>
  );
});
