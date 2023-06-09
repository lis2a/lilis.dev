import { Metadata } from "next";

// eslint-disable-next-line sort-imports
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - lilis.dev",
    default: "lilis.dev",
  },
  description: "lis's portfolio",
  generator: "Next.js",
  applicationName: "Next.js",
  authors: [{ name: "lis2a" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes={"any"} />
      </head>
      <body>{children}</body>
    </html>
  );
}
