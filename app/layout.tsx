import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plus One — Dating is better as a four",
  description:
    "Join with your best friend and meet other pairs for real double dates, nights out and social experiences. Apply for early access.",
  openGraph: {
    title: "Plus One — Dating is better as a four",
    description:
      "Premium social double-dating. Join with your Plus One and meet other pairs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
