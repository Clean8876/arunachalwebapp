import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display"
});

export const metadata: Metadata = {
  title: "Arunachal Literature",
  description: "Promoting and preserving the rich literary heritage of Arunachal Pradesh",
  icons: {
    icon: "/logofavicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSerifDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
