import { AuthProvider, LayoutProvider, LoadingProvider } from "../providers";
import "../globals.css";
import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "CM Law Firm Management System ",
  description: "SaaS  for law firms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="login-body-class a" suppressHydrationWarning>
        <AuthProvider>
          <LayoutProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </LayoutProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
