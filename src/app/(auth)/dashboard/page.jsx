"use client";
import {
  Container,
  ContentLayout,
  Header,
  KeyValuePairs,
  Link,
} from "@cloudscape-design/components";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";

export default function DashboardPage() {
  const breadcrumbItems = [
    { text: "Home", href: "#" },
    { text: "Dashboard", href: "#" },
  ];

  return (
    <DashboardLayout
      BodyContent={<BodyContent />}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}

function BodyContent() {
  return (
    <>
      <ContentLayout
        header={
          <Header variant="h2" description="Analysis of your LF data">
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
    </>
  );
}

function ServiceOverviewWidget() {
  return (
    <KeyValuePairs
      columns={3}
      items={[
        {
          label: "RAJKOT",
          value: (
            <Link
              variant="awsui-value-large"
              href="/files"
              ariaLabel="files (126)"
            >
              126
            </Link>
          ),
        },
        {
          label: "JAMNAGAR",
          value: (
            <Link
              variant="awsui-value-large"
              href="/files"
              ariaLabel="JAMNAGAR (51)"
            >
              51
            </Link>
          ),
        },
        {
          label: "JUNAGADH",
          value: (
            <Link
              variant="awsui-value-large"
              href="/files"
              ariaLabel="files (126)"
            >
              126
            </Link>
          ),
        },
        {
          label: "MORBI",
          value: (
            <Link
              variant="awsui-value-large"
              href="/files"
              ariaLabel="JAMNAGAR (51)"
            >
              51
            </Link>
          ),
        },
        {
          label: "AHMEDABAD",
          value: (
            <Link
              variant="awsui-value-large"
              href="/files"
              ariaLabel="files (126)"
            >
              126
            </Link>
          ),
        },
        {
          label: "BHAVNAGAR",
          value: (
            <Link
              variant="awsui-value-large"
              href="/files"
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
