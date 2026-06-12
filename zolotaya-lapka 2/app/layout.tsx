import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Золотая Лапка — питомник британских золотых шиншилл",
  description:
    "Питомник британских короткошёрстных кошек окраса золотая шиншилла. Котята с изумрудными глазами, документами WCF и безграничной любовью.",
  openGraph: {
    title: "Золотая Лапка — британские золотые шиншиллы",
    description:
      "Плюшевые котята окраса золотая шиншилла с изумрудными глазами. Документы, прививки, поддержка заводчика.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
