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
import companyJsonData from "../../../data/companies.json";
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

export default function CompaniesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Settings", href: "#" },
    { text: "Companies", href: "#" },
  ];

  // add naming constants singular plural without state

  return (
    <DashboardLayout
      BodyContent={() => <BodyContent companyJsonData={companyJsonData} />}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}

//wrap with BodyContent Component
const BodyContent = memo(function BodyContent({ companyJsonData }) {
  return (
    <div>
      <Table
        sortingColumn={[]}
        columnDefinitions={TableDefinition.columnDefinitions}
        items={companyJsonData}
        //   selectedItems={selectedItems}
        //   onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
        header={
          <Header
            counter={`(${companyJsonData?.length})`}
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
          companyJsonData.length > 10 && (
            <Pagination currentPageIndex={1} pagesCount={1} />
          )
        }
      />
      <EditModal></EditModal>
    </div>
  );
});
