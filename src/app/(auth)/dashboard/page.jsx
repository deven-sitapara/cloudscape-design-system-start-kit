"use client";
import React, { useState } from "react";
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Input,
  Link,
  SideNavigation,
  SplitPanel,
  TopNavigation,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { DashboardSideNavigation } from "@/app/ui/dashboard-side-navigation";
import {
  DashboardOverview,
  Overview,
  ServiceOverviewWidget,
} from "./components/dashboard-overview";

const LOCALE = "en";

export default function DashboardPage() {
  const [items, setItems] = React.useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (
        <>
          This is an info flash message. It contains{" "}
          <Link color="inverted" href="#">
            a link to another page
          </Link>
          .
        </>
      ),
      id: "message_1",
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const navItems = [
    {
      type: "section",
      text: "Modules",
      items: [
        { type: "link", text: "Files", href: "#/page1" },
        { type: "link", text: "TSR", href: "#/page2" },
        { type: "link", text: "Documents", href: "#/page3" },
        { type: "link", text: "BT", href: "#/page4" },
        { type: "link", text: "Extra Work", href: "#/page4" },
      ],
    },
    {
      type: "section",
      text: "Settings",
      items: [
        { type: "link", text: "Company", href: "#/page4" },
        { type: "link", text: "Branch", href: "#/page4" },
        { type: "link", text: "Users", href: "#/page4" },
      ],
    },
  ];

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <TopNavigation
        identity={{
          href: "#",
          title: "CM Law Firm",
          logo: {
            src: "./assets/images/icon-logo.png",
            alt: "CM Law Firm",
          },
        }}
        search={
          <Input
            ariaLabel="Input field"
            clearAriaLabel="Clear"
            value={searchValue}
            type="search"
            placeholder="Search"
            onChange={({ detail }) => setSearchValue(detail.value)}
          />
        }
        utilities={[
          {
            type: "button",
            text: "Link",
            href: "https://example.com/",
            external: true,
            externalIconAriaLabel: " (opens in a new tab)",
          },
          {
            type: "button",
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings",
              },
              {
                id: "settings-project",
                text: "Project settings",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "Deven Sitapara",
            description: "devem@sitapara.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Preferences" },
              { id: "security", text: "Security" },
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                ],
              },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
      />

      <AppLayout
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: "Home", href: "#" },
              { text: "Dashboard", href: "#" },
            ]}
          />
        }
        toolsHide
        // navigationOpen={false}
        // navigation={<DashboardSideNavigation />}
        navigation={<SideNavigation activeHref="#/pages" items={navItems} />}
        notifications={<Flashbar items={items} />}
        toolsOpen={true}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout
            header={
              <Header variant="h1" description="Analysis of your LF data">
                Analysis
              </Header>
            }
          >
            <Container
              header={
                <Header variant="h2" description="Analysis by cities">
                  City Wise Analysis
                </Header>
              }
            >
              <ServiceOverviewWidget></ServiceOverviewWidget>
              <div className="contentPlaceholder" />
            </Container>
          </ContentLayout>
        }
        // splitPanel={<SplitPanel header="Split panel header"></SplitPanel>}
      />
    </I18nProvider>
  );
}
