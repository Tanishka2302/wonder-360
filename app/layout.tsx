import type { Metadata } from "next";
import "./globals.css";
import "./navbar.css";
import Navbar from "./Navbar";




 export const metadata = {
  title: "WONDER 360 TOURS",
  description: "Immersive 360° Virtual Tour Solutions",
  icons: {
  icon: "/icon.png",
  shortcut: "/icon.png",
  apple: "/icon.png",
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