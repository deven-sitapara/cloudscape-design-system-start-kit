"use server";
import DashboardLayout from "@/app/ui/dashboard/dashboard-layout";

import fileData from "../../data/file.json";
import { BodyContent } from "./card-data";
import { Suspense } from "react";

export default async function FilesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Files", href: "#" },
  ];
  return (
    <DashboardLayout
      BodyContent={
        <Suspense>
          <BodyContent fileData={fileData} />
        </Suspense>
      }
      BreadcrumbItems={breadcrumbItems}
    ></DashboardLayout>
  );
}
