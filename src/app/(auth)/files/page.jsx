"use client";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";

import {
  Header,
  TextFilter,
  Pagination,
  Cards,
  PropertyFilter,
  Select,
  Input,
  Button,
  SpaceBetween,
  ButtonDropdown,
  ColumnLayout,
} from "@cloudscape-design/components";
import { memo, useState } from "react";
import fileJsonData from "../../data/file.json";
import { CardContent, CardDefinition, EditModal } from "./card-data";
import { create } from "zustand";
import { capitalizeFirstLetter } from "@/lib/helper";

export const useEditModalStore = create((set) => ({
  visible: false,
  item: null,
  showModal: (item) => set({ visible: true, item }),
  hideModal: () => set({ visible: false, item: null }),
}));

export default function FilesPage({ breadcrumbItems }) {
  const [fileData] = useState(fileJsonData);

  breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Files", href: "#" },
  ];

  return (
    <DashboardLayout
      BodyContent={() => <BodyContent fileData={fileData} />}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}

const BodyContent = memo(function BodyContent({ fileData }) {
  // empty test fileData = [];

  return (
    <div>
      <Cards
        cardDefinition={CardDefinition}
        cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
        items={fileData}
        loadingText="Loading resources"
        variant="full-page"
        trackBy="id"
        visibleSections={CardDefinition.visibleColumns}
        empty={CardDefinition.empty()}
        // filter={<TextFilter filteringPlaceholder="Find resources" />}
        filter={<SearchInput />}
        header={
          <div>
            <Header
              actions={
                <SpaceBetween direction="horizontal" size="xs">
                  {/* <Button
                    variant="primary"
                    onClick={() => useEditModalStore.getState().showModal(null)}
                  >
                    Create a new File
                  </Button> */}

                  <ButtonDropdown
                    variant="primary"
                    items={[
                      { text: "TSR", id: "tsr", disabled: false },
                      { text: "Document", id: "doc", disabled: false },
                      { text: "BT", id: "bt", disabled: false },
                      { text: "Extra Work", id: "extra", disabled: false },
                    ]}
                    onItemClick={(e) => {
                      //show edit modal
                      useEditModalStore.getState().showModal({
                        ...{
                          type: capitalizeFirstLetter(e?.detail.id),
                        },
                      });
                    }}
                  >
                    Create a new File
                  </ButtonDropdown>

                  <Button
                    variant="normal"
                    iconName="download"
                    onClick={() => useEditModalStore.getState().showModal(null)}
                  >
                    Export
                  </Button>
                </SpaceBetween>
              }
              variant="h1"
            >
              Files
            </Header>
          </div>
        }
        pagination={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link">TAT Records</Button>
            <Pagination currentPageIndex={1} pagesCount={2} />
          </SpaceBetween>
        }
        stickyHeader={true}
        preferences={CardDefinition.preferences()}
      />
      <EditModal></EditModal>
    </div>
  );
});

function SearchInput() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({
    tokens: [],
    operation: "and",
  });
  return (
    <PropertyFilter
      query={query}
      onChange={({ detail }) => setQuery(detail)}
      customControl={
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.detail.value);
          }}
        />
      }
      freeTextFiltering={true}
      countText="5 matches"
      enableTokenGroups
      expandToViewport
      hideOperations // hide and / or operations
      filteringAriaLabel="Filter Data"
      filteringOptions={[
        {
          propertyKey: "branch",
          value: "Rajkot",
        },
        {
          propertyKey: "branch",
          value: "Junagadh",
        },
        {
          propertyKey: "branch",
          value: "Bhavnagar",
        },
        {
          propertyKey: "branch",
          value: "Ahmedabad",
        },
        { propertyKey: "company", value: "AAA MORBI JAMANGAR" },
        { propertyKey: "company", value: "AADHAR HOUSING FINANCE JUNAGADH" },
        {
          propertyKey: "company",
          value: "AADHAR HOUSING FINANCE LAP DEPARTMENT RAJKOT",
        },
        { propertyKey: "company", value: "AADHAR HOUSING FINANCE RAJKOT" },
        { propertyKey: "company", value: "AADHAR HOUSING JAMNAGAR" },

        { propertyKey: "year", value: "2024-2025" },
        { propertyKey: "year", value: "2023-2024" },
      ]}
      filteringPlaceholder="Filter Data"
      filteringProperties={[
        {
          key: "branch",
          propertyLabel: "Branch",
          groupValuesLabel: "Branch values",
        },
        {
          key: "company",
          propertyLabel: "Company",
          groupValuesLabel: "Company values",
        },
        {
          key: "year",
          propertyLabel: "Financial Year",
          groupValuesLabel: "Year values",
        },

        // can add more filtering properties like created at
        // https://cloudscape.design/examples/react/table-date-filter.html
      ]}
    />
  );
}
