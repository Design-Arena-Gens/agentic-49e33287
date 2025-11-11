import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "भानगढ़ की प्रतिध्वनि",
  description:
    "राजकुमारी रत्नावली और तांत्रिक सिंधु की कथा को immersive वेब अनुभव में प्रस्तुत करने वाली कथा वेबसाइट।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
