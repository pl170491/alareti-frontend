import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Dungeons and Dragons",
  description: "RiP Snarly",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
