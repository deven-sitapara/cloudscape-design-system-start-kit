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
import { CardContent, CardDefinition } from "./card-data";

export default function FilesPage({ breadcrumbItems }) {
  const [fileData] = useState(fileJsonData);

  breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Files", href: "#" },
  ];

  return (
    <DashboardLayout
      BodyContent={() => BodyContent({ fileData })}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}

const BodyContent = ({ fileData }) => {
  // empty test fileData = [];

  return (
    <Cards
      cardDefinition={CardDefinition}
      cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
      items={fileData}
      loadingText="Loading resources"
      variant="full-page"
      trackBy="id"
      visibleSections={CardDefinition.visibleColumns}
      empty={CardDefinition.empty()}
      filter={<TextFilter filteringPlaceholder="Find resources" />}
      header={<Header variant="h1">Files</Header>}
      pagination={<Pagination currentPageIndex={1} pagesCount={2} />}
      preferences={CardDefinition.preferences()}
    />
  );
};
