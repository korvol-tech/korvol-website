import type { Metadata } from "next";
import "./globals.css";
import globalConfig from "@/config/global-config";
import { Redirector } from "@/components/redirector";
import { roboto } from "@/styles/fonts";

const { brandName, tagLine, aboutUs } = globalConfig;

export const metadata: Metadata = {
  title: `${brandName} | ${tagLine}`,
  description: aboutUs.content,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </head>

      <body className={`${roboto.className}`}>
        <Redirector sources={["*"]} destination="/">
          {children}
        </Redirector>
      </body>
    </html>
  );
}
