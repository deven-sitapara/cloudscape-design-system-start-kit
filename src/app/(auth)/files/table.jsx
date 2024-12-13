"use client";

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
import { EditModal, useEditModalStore } from "./card-data";
import { useState } from "react";

const TableDefinition = {
  columnDefinitions: [
    {
      id: "id",
      header: "File ID",
      cell: (item) => item.id,
      sortingField: "id",
      width: 100,
    },
    {
      id: "date",
      header: "File Date",
      cell: (item) => item.date,
      sortingField: "date",
      width: 150,
    },

    {
      id: "status",
      header: "Status",
      cell: (item) => (
        <Popover
          size="large"
          dismissButton={true}
          position="bottom"
          triggerType="custom"
          content={
            <StatusIndicator type="info" wrapText={true} s>
              {item.status_message}
            </StatusIndicator>
          }
        >
          <Button variant="link">{item.status}</Button>
        </Popover>
      ),
      sortingField: "status",
      width: 150,
    },
    {
      id: "company",
      header: "company",
      cell: (item) => item.company,
      sortingField: "company",
    },
    {
      id: "company_file_reference_number",
      header: "Reference Number",
      cell: (item) => item.company_file_reference_number,
      sortingField: "company_file_reference_number",
    },
    {
      id: "property_owner",
      header: "Owner",
      cell: (item) => item.property_owner,
      sortingField: "property_owner",
    },
    {
      id: "property_description",
      header: "Property",
      cell: (item) => item.property_description,
      sortingField: "property_description",
    },
    {
      id: "action",
      header: "Action",
      cell: (item) => <TableAction item={item} />,
      sortingField: "property_description",
    },
  ],
  visibleColumns: [
    "id",
    "company",
    "company_file_reference_number",
    "property_owner",
    "property_description",
    "action",
  ],
  preferences: () => (
    <div>
      <CollectionPreferences
        title="Preferences"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        preferences={{
          pageSize: 6,
          visibleContent: CardDefinition.visibleColumns,
        }}
        pageSizePreference={{
          title: "Page size",
          options: [
            { value: 6, label: "6 resources" },
            { value: 12, label: "12 resources" },
          ],
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

export default function TableComponent({ file }) {
  const [sortingColumn, setSortingColumn] = useState(
    TableDefinition.columnDefinitions[0]
  );
  const [loading, setLoading] = useState(false);
  const handleSortingChange = (event) => {
    setSortingDescending(event.detail.isDescending);
    setSortingColumn(event.detail.sortingColumn);
  };
  const [sortingDescending, setSortingDescending] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const items = file;
  return (
    <div>
      <Table
        enableKeyboardNavigation={true}
        loading={loading}
        // selectedItems={selectedItems}
        items={items}
        onSortingChange={handleSortingChange}
        // onSelectionChange={(event) =>
        //   setSelectedItems(event.detail.selectedItems)
        // }
        sortingColumn={sortingColumn}
        sortingDescending={sortingDescending}
        // columnDefinitions={TableDefinition.columnDefinitions}
        // columnDisplay={preferences.contentDisplay}
        // ariaLabels={distributionTableAriaLabels}
        // renderAriaLive={renderAriaLive}
        // selectionType="multi"
        variant="full-page"
        stickyHeader={true}
        resizableColumns={true}
        // onColumnWidthsChange={saveWidths}
        wrapLines={true}
        stripedRows={false}
        contentDensity={"compact"}
        stickyColumns={true}
        //
        // sortingColumn={[]}
        columnDefinitions={TableDefinition.columnDefinitions}
        // items={file}
        //   selectedItems={selectedItems}
        //   onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
        header={
          <Header
            counter={`(${file?.length})`}
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
        // variant="embedded"
        filter={<SearchInput />}
        pagination={
          file.length > 10 && <Pagination currentPageIndex={1} pagesCount={1} />
        }
      />
      <EditModal></EditModal>
    </div>
  );
}

function TableAction({ item }) {
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
        variant="normal"
        onItemClick={(e) => {
          if (e?.detail.id === "edit") {
            //show edit modal
            showModal(item);
          }
        }}
      >
        Action
      </ButtonDropdown>
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

        { propertyKey: "duration", value: "Today" },
        { propertyKey: "duration", value: "Yesterday" },
        { propertyKey: "duration", value: "This Week" },
        { propertyKey: "duration", value: "This Month" },
        { propertyKey: "duration", value: "Last 6 Month" },
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
        {
          key: "duration",
          propertyLabel: "Duration",
          groupValuesLabel: "Duration values",
        },

        // can add more filtering properties like created at
        // https://cloudscape.design/examples/react/table-date-filter.html
      ]}
    />
  );
}
