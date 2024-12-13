import fileData from "../../data/file.json";
import { BodyContent } from "./table-data";
import { Suspense } from "react";
import Link from "next/link";
import AppLayoutComponent from "../components/AppLayoutComponent";

export default async function FilesPage() {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Files", href: "#" },
  ];

  const items = [
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
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
  ];

  return (
    <AppLayoutComponent
      breadcrumbs={breadcrumbItems}
      BodyContent={<ReturnContent />}
    />
  );
}
function ReturnContent() {
  return (
    <Suspense>
      <BodyContent file={fileData} />
    </Suspense>
  );
}
