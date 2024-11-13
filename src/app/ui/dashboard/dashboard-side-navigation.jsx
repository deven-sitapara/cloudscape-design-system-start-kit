import { SideNavigation } from "@cloudscape-design/components";
import { usePathname } from "next/navigation";

export function DashboardSideNavigation() {
  const navHeader = {
    text: "Dashboard",
    href: "/dashboard",
  };

  const navItems = [
    {
      type: "section",
      text: "Modules",
      defaultExpanded: true,

      items: [
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
      defaultExpanded: true,
      items: [
        { type: "link", text: "Company", href: "/settings/companies" },
        { type: "link", text: "Branch", href: "/settings/branches" },
        { type: "link", text: "Users", href: "/settings/users" },
      ],
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <SideNavigation

        
        header={navHeader}
        items={navItems}
        activeHref={pathname}
      />
    </>
  );
}
