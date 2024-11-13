"use client";
import {
  Box,
  Button,
  CollectionPreferences,
  Modal,
  SpaceBetween,
} from "@cloudscape-design/components";
import CreateForm from "./form";
import { useEditModalStore } from "./page";

export const TableDefinition = {
  header: (item) => <Header item={item}></Header>,
  columnDefinitions: [
    {
      id: "branch",
      header: "Branch Name",
      cell: (item) => item.branch,
      sortingField: "branch",
    },
    {
      id: "contact_person",
      header: "Contact Person",
      cell: (item) => item.contact_person,
      sortingField: "contact_person",
    },
    {
      id: "phone",
      header: "Phone",
      cell: (item) => item.phone,
      sortingField: "phone",
    },
    {
      id: "email",
      header: "Email",
      cell: (item) => item.email,
      sortingField: "email",
    },
    {
      id: "date",
      header: "Created Date",
      cell: (item) => item.date,
      sortingField: "date",
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

export const EditModal = () => {
  const { visible, hideModal, item } = useEditModalStore();

  const title = "Create new Branch";

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

export function Header({ item }) {
  return (
    <Header
      counter={`(${item?.length})`}
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button onClick={() => useEditModalStore.getState().showModal(true)}>
            Add new branch
          </Button>
          {/* <Button>Delete</Button> */}
        </SpaceBetween>
      }
    >
      Branches
    </Header>
  );
}
