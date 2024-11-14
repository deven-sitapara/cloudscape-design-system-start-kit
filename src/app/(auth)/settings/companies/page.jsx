"use server";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";
import companyJsonData from "../../../data/companies.json";
import { BodyContent } from "./data";

export default async function CompaniesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Settings", href: "#" },
    { text: "Companies", href: "#" },
  ];

  // add naming constants singular plural without state

  return (
    <DashboardLayout
      BodyContent={<BodyContent companyJsonData={companyJsonData} />}
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}
