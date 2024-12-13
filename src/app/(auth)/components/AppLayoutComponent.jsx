"use client";

import I18nProvider from "@cloudscape-design/components/i18n";
import { I18NProvider } from "next/dist/server/lib/i18n-provider";
import { useEffect, useState } from "react";

const {
  DashboardSideNavigation,
} = require("@/app/ui/dashboard/dashboard-side-navigation");
const { BreadcrumbGroup, AppLayout } = require("@cloudscape-design/components");
import messages from "@cloudscape-design/components/i18n/messages/all.en";
const LOCALE = "en";

export default function AppLayoutComponent({ breadcrumbItems, BodyContent }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Clean initial render
  }

  return (
    isClient && (
      <I18nProvider key="top" locale={LOCALE} messages={[messages]}>
        <AppLayout
          contentType="cards"
          breadcrumbs={<BreadcrumbGroup items={breadcrumbItems} />}
          toolsHide
          navigation={<DashboardSideNavigation />}
          // notifications={<Flashbar items={items} />}
          // toolsOpen={true}
          // tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
          content={BodyContent}
          // splitPanel={<SplitPanel header="Split panel header"></SplitPanel>}
        />
      </I18nProvider>
    )
  );
}
