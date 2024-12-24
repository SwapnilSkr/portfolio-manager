import { GeistSans } from "geist/font/sans";
import { monsterrat } from "@/utils/fonts";
import "./globals.css";
import RecoilContextProvider from "./recoilContextProvider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Portfolio Manager",
  description: "Enhance your portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${monsterrat} bg-background text-foreground`}
      >
        <main className="min-h-screen flex flex-col relative">
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </main>
      </body>
    </html>
  );
}
