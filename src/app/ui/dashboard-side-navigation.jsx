// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react";
import Box from "@cloudscape-design/components/box";
import Popover from "@cloudscape-design/components/popover";
import Link from "@cloudscape-design/components/link";
// import { Navigation as CommonNavigation } from "../../commons";
// import { DensityPreferencesDialog } from "./density-preferences";
import SideNavigation, {
  SideNavigationProps,
} from "@cloudscape-design/components/side-navigation";

const navItems1 = [
  { type: "link", text: "Dashboard", href: "#/" },
  {
    type: "link",
    text: "Events",
    href: "#/events",
    info: (
      <Box color="text-status-info" variant="span">
        <Popover
          header="Introducing events"
          size="medium"
          triggerType="text"
          content={
            <>
              AWS can schedule events for your instances, such as reboot,
              stop/start, or retirement.{" "}
              <Link
                external={true}
                ariaLabel="Learn more about events management, opens in new tab"
                href="#"
                variant="primary"
              >
                Learn more
              </Link>
            </>
          }
          renderWithPortal={true}
          dismissAriaLabel="Close"
        >
          <Box
            variant="span"
            color="text-status-info"
            fontSize="body-s"
            fontWeight="bold"
            data-testid="new-feature-announcement-trigger"
          >
            New
          </Box>
        </Popover>
      </Box>
    ),
  },
  { type: "link", text: "Tags", href: "#/tags" },
  { type: "link", text: "Reports", href: "#/reports" },
  { type: "link", text: "Limits", href: "#/limits" },
  {
    text: "Instances",
    type: "section",
    defaultExpanded: true,
    items: [
      { type: "link", text: "Instances", href: "#/instances" },
      {
        type: "link",
        text: "Launch templates",
        href: "#/launch_templates",
        info: (
          <Box color="text-status-info" variant="span">
            <Popover
              header="Introducing launch templates"
              size="medium"
              triggerType="text"
              content={
                <>
                  Launch templates is a new capability that enables a new way to
                  templatize your launch requests. Launch templates streamline
                  and simplify the launch process for auto scaling, spot fleet,
                  spot, and on-demand instances.{" "}
                  <Link
                    external
                    href="#"
                    ariaLabel="Learn more about launch templates, opens in new tab"
                    variant="primary"
                  >
                    Learn more
                  </Link>
                </>
              }
              renderWithPortal={true}
              dismissAriaLabel="Close"
            >
              <Box
                color="text-status-info"
                fontSize="body-s"
                fontWeight="bold"
                variant="span"
              >
                New
              </Box>
            </Popover>
          </Box>
        ),
      },
      { type: "link", text: "Spot requests", href: "#/spot_requests" },
      {
        type: "link",
        text: "Reserved instances",
        href: "#/reserved_instances",
      },
      { type: "link", text: "Dedicated hosts", href: "#/dedicated_hosts" },
      {
        type: "link",
        text: "Scheduled instances",
        href: "#/scheduled_instances",
        info: (
          <Box color="text-status-info" variant="span">
            <Popover
              data-testid="beta"
              header="Beta feature"
              size="medium"
              triggerType="text"
              content={
                <>
                  We are improving the way to create scheduled instances.{" "}
                  <Link
                    external
                    href="#"
                    ariaLabel="Learn more about instance scheduling, opens in new tab"
                    variant="primary"
                  >
                    Learn more
                  </Link>
                </>
              }
              renderWithPortal={true}
              dismissAriaLabel="Close"
            >
              <Box
                color="text-status-info"
                fontSize="body-s"
                fontWeight="bold"
                variant="span"
              >
                Beta
              </Box>
            </Popover>
          </Box>
        ),
      },
      {
        type: "link",
        text: "Capacity reservations",
        href: "#/capacity_reservations",
      },
    ],
  },
  {
    text: "Images",
    type: "section",
    defaultExpanded: false,
    items: [
      { type: "link", text: "AMIs", href: "#/amis" },
      { type: "link", text: "Bundle tasks", href: "#/bundle_tasks" },
    ],
  },
  {
    text: "Elastic block store",
    type: "section",
    defaultExpanded: false,
    items: [
      { type: "link", text: "Volumes", href: "#/volumes" },
      { type: "link", text: "Snapshots", href: "#/snapshots" },
      { type: "link", text: "Lifecycle manager", href: "#/lifecycle_manager" },
    ],
  },
  {
    text: " Network & security",
    type: "section",
    defaultExpanded: false,
    items: [
      { type: "link", text: "Security groups", href: "#/security_groups" },
      { type: "link", text: "Elastic IPs", href: "#/elastic_ips" },
      { type: "link", text: "Placement groups", href: "#/placement_groups" },
      { type: "link", text: "Key pairs", href: "#/key_pairs" },
      {
        type: "link",
        text: "Network interfaces",
        href: "#/network_interfaces",
      },
    ],
  },
  {
    text: "Load balancing",
    type: "section",
    defaultExpanded: false,
    items: [
      { type: "link", text: "Load balancers", href: "#/load_balancers" },
      { type: "link", text: "Target groups", href: "#/target_groups" },
    ],
  },
  {
    text: "Auto scaling",
    type: "section",
    defaultExpanded: false,
    items: [
      {
        type: "link",
        text: "Launch configurations",
        href: "#/launch_configurations",
      },
      {
        type: "link",
        text: "Auto scaling groups",
        href: "#/auto_scaling_groups",
      },
    ],
  },
  { type: "divider" },
  {
    type: "link",
    href: "#/density_settings",
    text: "Density settings",
  },
];

export function DashboardSideNavigation() {
  const onFollowHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <CommonNavigation
        items={navItems1}
        activeHref="#/"
        onFollowHandler={onFollowHandler}
      />
    </>
  );
}

// <SideNavigation
// header={{
//   href: "#",
//   text: "Service name",
// }}
// items={[
//   { type: "link", text: "Files", href: "#/page1" },
//   { type: "link", text: "TSR", href: "#/page2" },
//   { type: "link", text: "Documents", href: "#/page3" },
//   { type: "link", text: "BT", href: "#/page4" },
//   { type: "link", text: "Extra Work", href: "#/page4" },
//   { type: "divider" },
//   {
//     type: "section-group",
//     title: "Settings",
//     items: [
//       { type: "link", text: "Company", href: "#/page4" },
//       { type: "link", text: "Branch", href: "#/page4" },
//       { type: "link", text: "Users", href: "#/page4" },
//     ],
//   },
//   { type: "divider" },

//   {
//     type: "section-group",
//     title: "Resources",
//     items: [
//       {
//         type: "link",
//         text: "Google.com",
//         href: "https://google.com",
//         external: true,
//       },
//       {
//         type: "link",
//         text: "E-Court",
//         href: "https://ecourts.gov.in/ecourts_home/",
//         external: true,
//       },
//     ],
//   },
// ]}
// />

const navHeader = { text: "Service", href: "#/" };
const navItems = [
  {
    type: "section",
    text: "Reports and analytics",
    items: [
      { type: "link", text: "Distributions", href: "#/distributions" },
      { type: "link", text: "Cache statistics", href: "#/cache" },
      { type: "link", text: "Monitoring and alarms", href: "#/monitoring" },
      { type: "link", text: "Popular objects", href: "#/popular" },
      { type: "link", text: "Top referrers", href: "#/referrers" },
      { type: "link", text: "Usage", href: "#/usage" },
      { type: "link", text: "Viewers", href: "#/viewers" },
    ],
  },
  {
    type: "section",
    text: "Private content",
    items: [
      { type: "link", text: "How-to guide", href: "#/howto" },
      { type: "link", text: "Origin access identity", href: "#/origin" },
    ],
  },
];

const defaultOnFollowHandler = (event) => {
  // keep the locked href for our demo pages
  event.preventDefault();
};

function CommonNavigation({
  activeHref,
  header = navHeader,
  items = navItems,
  onFollowHandler = defaultOnFollowHandler,
}) {
  return (
    <SideNavigation
      items={items}
      header={header}
      activeHref={activeHref}
      onFollow={onFollowHandler}
     />
  );
}
