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
  AppLayout,
} from "@cloudscape-design/components";
import { memo, useState } from "react";
import usersJsonData from "../../../data/users.json";
import { EditModal, TableDefinition, useEditModalStore } from "./data";
import { capitalizeFirstLetter } from "@/lib/helper";
import AppLayoutComponent from "../../components/AppLayoutComponent";

const moduleName = "company";

export default function UsersPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Settings", href: "#" },
    { text: "Users", href: "#" },
  ];

  // add naming constants singular plural without state

  return (
    <AppLayoutComponent
      BodyContent={<BodyContent usersJsonData={usersJsonData} />}
      breadcrumbItems={breadcrumbItems}
    ></AppLayoutComponent>
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
