import { SideNavigation } from "@cloudscape-design/components";
import { usePathname } from "next/navigation";

export function DashboardSideNavigation() {
  const navItems = [
    {
      type: "section",
      text: "Modules",
      defaultExpanded: true,

      items: [
        {
          type: "link",
          text: "Dashboard",
          href: "/dashboard",
        },
        { type: "link", text: "Files", href: "/files" },
        { type: "link", text: "TSR", href: "/tsr" },
        { type: "link", text: "Documents", href: "/documents" },
        { type: "link", text: "BT", href: "/bt" },
        { type: "link", text: "Extra Work", href: "/extrawork" },
      ],
    },
    {
      type: "section",
      text: "Settings",
      defaultExpanded: false,
      items: [
        { type: "link", text: "Company", href: "/settings/company" },
        { type: "link", text: "Branch", href: "/settings/branch" },
        { type: "link", text: "Users", href: "/settings/users" },
      ],
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <SideNavigation items={navItems} activeHref={pathname} />
    </>
  );
}
