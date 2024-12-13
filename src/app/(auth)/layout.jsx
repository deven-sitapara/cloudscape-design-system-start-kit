import { AuthProvider, LayoutProvider, LoadingProvider } from "./providers";
import "../globals.css";
import TopNav from "../ui/dashboard/top-nav";

export const metadata = {
  title: "CM Law Firm Management System ",
  description: "SaaS  for law firms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="login-body-class">
        <AuthProvider>
          <LayoutProvider>
            <LoadingProvider>
              <TopNav />
              {children}
            </LoadingProvider>
          </LayoutProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
