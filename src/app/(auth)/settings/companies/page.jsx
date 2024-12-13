"use server";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";
import companyJsonData from "@data/companies.json";

import { BodyContent } from "./data";
import AppLayoutComponent from "../../components/AppLayoutComponent";

export default async function CompaniesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Settings", href: "#" },
    { text: "Companies", href: "#" },
  ];

  // add naming constants singular plural without state

  return (
    <AppLayoutComponent
      BodyContent={<BodyContent companyJsonData={companyJsonData} />}
      breadcrumbItems={breadcrumbItems}
    ></AppLayoutComponent>
  );
}
