"use client";
import React from "react";
import Header from "@cloudscape-design/components/header";
import { Link, KeyValuePairs } from "@cloudscape-design/components";

export const DashboardOverview = {
  definition: { defaultRowSpan: 2, defaultColumnSpan: 3 },
  data: {
    icon: "list",
    title: "Service overview",
    description: "Overview of all your resources",
    header: ServiceOverviewHeader,
    content: ServiceOverviewWidget,
  },
};

function ServiceOverviewHeader() {
  return (
    <Header variant="h2" description="Viewing data from N. Virginia region">
      Service overview - <em>new</em>
    </Header>
  );
}

export function ServiceOverviewWidget() {
  return (
    <KeyValuePairs
      columns={3}
      items={[
        {
          label: "RAJKOT",
          value: (
            <Link variant="awsui-value-large" href="#" ariaLabel="files (126)">
              126
            </Link>
          ),
        },
        {
          label: "JAMNAGAR",
          value: (
            <Link
              variant="awsui-value-large"
              href="#"
              ariaLabel="JAMNAGAR (51)"
            >
              51
            </Link>
          ),
        },
        {
          label: "JUNAGADH",
          value: (
            <Link variant="awsui-value-large" href="#" ariaLabel="files (126)">
              126
            </Link>
          ),
        },
        {
          label: "MORBI",
          value: (
            <Link
              variant="awsui-value-large"
              href="#"
              ariaLabel="JAMNAGAR (51)"
            >
              51
            </Link>
          ),
        },
        {
          label: "AHMEDABAD",
          value: (
            <Link variant="awsui-value-large" href="#" ariaLabel="files (126)">
              126
            </Link>
          ),
        },
        {
          label: "BHAVNAGAR",
          value: (
            <Link
              variant="awsui-value-large"
              href="#"
              ariaLabel="JAMNAGAR (51)"
            >
              51
            </Link>
          ),
        },
      ]}
    />
  );
}
