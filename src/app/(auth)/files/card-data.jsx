"use client";
import { memo, useState } from "react";

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
} from "@cloudscape-design/components";

import { create } from "zustand";
import { capitalizeFirstLetter } from "@/lib/helper";
import { useSearchParams } from "next/navigation";

import CreateForm from "./create-form";

export const useEditModalStore = create((set) => ({
  visible: false,
  item: null,
  showModal: (item) => set({ visible: true, item }),
  hideModal: () => set({ visible: false, item: null }),
}));

export const CardDefinition = {
  header: (item) => <CardHeader item={item}></CardHeader>,
  sections: [
    {
      id: "branch",
      // header: "tsr",
      header: "",

      content: (item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>
            <strong>Branch</strong>
            <br />
            {item.branch}
          </p>
          <p>
            <strong>Company</strong>
            <br />
            {item.company}
          </p>
          <p>
            <strong>Date</strong>
            <br />
            {item.date}
          </p>
        </div>
      ),
    },
  ],
  visibleColumns: ["branch", "company", "date"],
  preferences: () => (
    <div>
      <CollectionPreferences
        title="Preferences"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        preferences={{
          pageSize: 12,
          visibleContent: CardDefinition.visibleColumns,
        }}
        pageSizePreference={{
          title: "Page size",
          options: [
            { value: 6, label: "6 resources" },
            { value: 12, label: "12 resources" },
          ],
        }}
        customPreference={() => {
          const [viewAs, setViewAs] = useState("cards");
          return (
            <FormField label="View as">
              <RadioGroup
                value={viewAs}
                onChange={({ detail }) => setViewAs(detail.value)}
                items={[
                  { value: "table", label: "Table" },
                  { value: "cards", label: "Cards" },
                ]}
              />
            </FormField>
          );
        }}
        visibleContentPreference={{
          title: "Select visible content",
          options: [
            {
              label: "Display column data",
              options: [
                { id: "branch", label: "branch" },
                { id: "company", label: "company" },
                { id: "date", label: "date" },
              ],
            },
          ],
        }}
      />
    </div>
  ),
  empty: () => (
    <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
      <SpaceBetween size="m">
        <b>No resources</b>
        <Button>Create resource</Button>
      </SpaceBetween>
    </Box>
  ),
};
export function CardHeader({ item }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link key={item.id} href="#" fontSize="heading-m">
        {item.type}-{item.id} {item.title}
      </Link>
      <CardAction item={item}></CardAction>
    </div>
  );
}

function CardAction({ item }) {
  const { showModal } = useEditModalStore();

  return (
    <div>
      <ButtonDropdown
        items={[
          {
            text: "Generate TSR",
            id: "generate-tsr" + item.id,
            disabled: false,
            href: "/tsr?id=" + item.id,
          },
          {
            text: "Generate VR",
            id: "generate-vr",
            disabled: false,
          },
          {
            text: "Add Queries",
            id: "add-queries",
            disabled: false,
          },
          {
            text: "Edit",
            id: "edit",
            disabled: false,
          },
          {
            text: "Email",
            id: "email",
            disabled: false,
          },
          {
            text: "Upload Search 1",
            id: "up-search-1",
            disabled: false,
          },
          {
            text: "Upload Search 2",
            id: "up-search-2",
            disabled: false,
          },
          {
            text: "Upload DS",
            id: "up-ds",
            disabled: false,
          },
          {
            text: "Upload Sersai Search",
            id: "up-sersai-search",
            disabled: false,
          },
          {
            text: "Upload Revenue Search",
            id: "up-revenue-search",
            disabled: false,
          },
          {
            text: "Upload VR DS",
            id: "up-vr-ds-search",
            disabled: false,
          },
          {
            text: "Hand Over",
            id: "handover",
            disabled: false,
          },
          {
            text: "Delete ",
            id: "delete",
            disabled: true,
          },
        ]}
        ariaLabel="Action"
        variant="inline-icon"
        onItemClick={(e) => {
          if (e?.detail.id === "edit") {
            //show edit modal
            showModal(item);
          }
        }}
      />
    </div>
  );
}

export const EditModal = () => {
  const { visible, hideModal, item } = useEditModalStore();

  const title = item?.id
    ? `Edit # ${item.id} - ${item.title}`
    : "Create new File";

  return (
    <Modal
      onDismiss={hideModal}
      visible={visible}
      size="large"
      header={title}
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={hideModal}>
              Cancel
            </Button>
            <Button variant="primary">Ok</Button>
          </SpaceBetween>
        </Box>
      }
    >
      <CreateForm item={item}></CreateForm>
    </Modal>
  );
};

export function BodyCardContent({ fileData }) {
  // empty test fileData = [];
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  console.log("client body ..");

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
              {/* add type from get param here */}
              Files {type && "(" + capitalizeFirstLetter(type) + ")"}
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
}

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
