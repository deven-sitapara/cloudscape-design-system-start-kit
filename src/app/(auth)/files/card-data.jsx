import {
  Box,
  Button,
  ButtonDropdown,
  CollectionPreferences,
  Link,
  SpaceBetween,
} from "@cloudscape-design/components";

export const CardDefinition = {
  header: (item) => <CardHeader item={item}></CardHeader>,
  sections: [
    {
      id: "branch",
      header: "File Data:",
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
        #{item.id} - {item.title}
      </Link>
      <CardAction item={item}></CardAction>
    </div>
  );
}

function CardAction({ item }) {
  return (
    <ButtonDropdown
      items={[
        {
          text: "Generate TSR",
          id: "gn-tsr" + item.id,
          disabled: false,
          href: "/tsr?id=" + item.id,
        },
        {
          text: "Generate VR",
          id: "gn-vr",
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
    />
  );
}
