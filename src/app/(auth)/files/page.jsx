"use client";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

import { ButtonDropdown, Header, Link } from "@cloudscape-design/components";
import { useState } from "react";
import fileJsonData from "../../data/file.json";

export default function FilesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Files", href: "#" },
  ];
  const [fileData, setFileData] = useState(fileJsonData);

  return (
    fileData.length > 0 && (
      <DashboardLayout
        BodyContent={() => BodyContent({ data: fileData })}
        BreadcrumbItems={breadcrumbItems}
      ></DashboardLayout>
    )
  );
}

const BodyContent = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <Cards
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail?.selectedItems ?? [])
      }
      selectedItems={selectedItems}
      ariaLabels={{
        itemSelectionLabel: (e, t) => `select ${t.name}`,
        selectionGroupLabel: "Item selection",
      }}
      cardDefinition={{
        header: (item) => (
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
            <ButtonDropdown
              items={[
                {
                  text: "Generate TSR",
                  id: "gn-tsr",
                  disabled: false,
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
          </div>
        ),

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
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
      items={data}
      loadingText="Loading resources"
      // selectionType="single"
      variant="full-page"
      trackBy="id"
      visibleSections={["branch", "company", "date"]}
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      filter={<TextFilter filteringPlaceholder="Find resources" />}
      header={<Header variant="h1">Files</Header>}
      pagination={<Pagination currentPageIndex={1} pagesCount={2} />}
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 6,
            visibleContent: ["branch", "company", "date"],
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
                label: "Main distribution properties",
                options: [
                  { id: "branch", label: "branch" },
                  { id: "company", label: "company" },
                  { id: "date", label: "date" },
                ],
              },
            ],
          }}
        />
      }
    />
  );
};
