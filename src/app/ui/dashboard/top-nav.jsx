"use client";
import React from "react";
import { TopNavigation } from "@cloudscape-design/components";
import TopNavSearch from "./top-nav-search";

function TopNav() {
  return (
    // height of top nav is 50px

    <TopNavigation
      identity={{
        href: "/dashboard",
        title: "CM Law Firm",
        logo: {
          src: "/assets/images/icon-logo.png",
          alt: "CM Law Firm",
        },
      }}
      search={<TopNavSearch />}
      utilities={[
        {
          type: "menu-dropdown",
          text: "File",
          ariaLabel: "File",

          items: [
            {
              id: "tsr",
              text: "TSR",
              href: "/files?type=tsr",
              ariaLabel: "TSR File",
            },
            {
              id: "document",
              text: "Document",
              ariaLabel: "Document File",
              href: "/files?type=document",
            },
            {
              id: "bt",
              text: "BT",
              ariaLabel: "BT File",
              href: "/files?type=bt",
            },
            {
              id: "extra-work",
              text: "Extra Work",
              ariaLabel: "Extra Work File",
              href: "/files?type=extra-work",
            },
          ],
        },
        {
          type: "menu-dropdown",
          text: "Settings",
          ariaLabel: "File",

          items: [
            {
              id: "companies",
              text: "Companies",
              href: "/settings/companies",
            },
            {
              id: "branches",
              text: "Branches",
              href: "/settings/branches",
            },
            {
              id: "users",
              text: "Users",
              href: "/settings/users",
            },
          ],
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
              id: "smtp",
              text: "SMTP",
            },
            {
              id: "other",
              text: "Other",
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
                  href: "https://google.com",
                  external: true,
                  externalIconAriaLabel: " (opens in new tab)",
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "https://google.com",
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
  );
}
export default React.memo(TopNav);
