import React, { useState } from "react";
import {
  AppLayout,
  Box,
  BreadcrumbGroup,
  Container,
  ExpandableSection,
  Flashbar,
  Header,
  Input,
  Link,
  SideNavigation,
  TopNavigation,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { DashboardSideNavigation } from "./dashboard-side-navigation";

const LOCALE = "en";

function DashboardLayout({ BodyContent, BreadcrumbItems }) {
  const [items, setItems] = useState([
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

  return (
    <>
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
                {
                  id: "signout",
                  text: "Sign out",
                  href: "/logout",
                },
              ],
            },
          ]}
        />

        <AppLayout
          contentType="cards"
          breadcrumbs={<BreadcrumbGroup items={BreadcrumbItems} />}
          toolsHide
          navigation={<DashboardSideNavigation />}
          notifications={<Flashbar items={items} />}
          // toolsOpen={true}
          // tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
          content={<BodyContent />}
          // splitPanel={<SplitPanel header="Split panel header"></SplitPanel>}
        />
      </I18nProvider>
    </>
  );
}

export default DashboardLayout;
