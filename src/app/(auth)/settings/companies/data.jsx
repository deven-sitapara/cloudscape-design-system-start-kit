"use client";
import {
  Badge,
  Box,
  Button,
  CollectionPreferences, Grid,
  Modal,
  SpaceBetween,
  Table,
  Header,
  TextFilter,
  Pagination
} from "@cloudscape-design/components";
import { capitalizeFirstLetter } from "@/lib/helper";

import CreateForm from "./form";
import { create } from "zustand";
import { useEffect, useState } from "react";

export const useEditModalStore = create((set) => ({
  visible: false,
  item: null,
  showModal: (item) => set({ visible: true, item }),
  hideModal: () => set({ visible: false, item: null }),
}));

export const TableDefinition = {
  moduleName: "company",
  modulePluralName: "companies",
  // header: (item) => <Header item={item}></Header>,
  columnDefinitions: [
    {
      id: "name",
      header: "Name",
      cell: (item) => item.name,
      sortingField: "name",
    },
    {
      id: "fee",
      header: "Fees",
      cell: (item) => {
        // return JSON.stringify(item.fee);
        return (
          <Box variant="awsui-gen-ai-label">
            <Grid
              gridDefinition={[{ colspan: 4 }, { colspan: 4 }, { colspan: 4 }]}
            >
              <div>
                TSR: <Badge>{item.fee.tsr}</Badge>
              </div>
              <div>
                VR: <Badge>{item.fee.vr}</Badge>
              </div>
              <div>
                Search: <Badge>{item.fee.search}</Badge>
              </div>
            </Grid>
          </Box>
        );
      },
      sortingField: "fee",
    },

    {
      id: "date",
      header: "Created Date",
      cell: (item) => item.date,
      sortingField: "date",
    },
  ],
  visibleColumns: ["name", "fee", "date"],
  preferences: () => (
    <div>
      <CollectionPreferences
        title="Preferences"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        preferences={{
          pageSize: 6,
          visibleContent: TableDefinition.visibleColumns,
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
                { id: "name", label: "name" },
                { id: "fee", label: "fee" },
                { id: "date", label: "date" },
              ],
            },
          ],
        }}
      />
    </div>
  ),
  empty: () => (
    <div>
      <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
        <SpaceBetween size="m">
          <b>No resources</b>
          <Button>Create resource</Button>
        </SpaceBetween>
      </Box>
    </div>
  ),
};

export const EditModal = () => {
  const { visible, hideModal, item } = useEditModalStore();

  const title = "Create new Company";

  return (
    <div>
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
    </div>
  );
};

// export function Header({ item }) {
//   return (
//     <Header
//       counter={`(${item?.length})`}
//       actions={
//         <SpaceBetween direction="horizontal" size="xs">
//           <Button onClick={() => useEditModalStore.getState().showModal(true)}>
//             Add new company
//           </Button>
//           {/* <Button>Delete</Button> */}
//         </SpaceBetween>
//       }
//     >
//       Branches
//     </Header>
//   );
// }

//wrap with BodyContent Component
export function BodyContent({ companyJsonData }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Clean initial render
  }

  return (
    isClient &&
    companyJsonData?.length > 0 && (
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
    )
  );
}
