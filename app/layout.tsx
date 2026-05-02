import type { Metadata } from "next";
import "./globals.css";
import "./navbar.css";
import Navbar from "./Navbar";



export const metadata: Metadata = {
  title: "WONDER 360 TOURS",
  description: "Transforming Spaces into Stories",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>



        <Navbar/>

        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}