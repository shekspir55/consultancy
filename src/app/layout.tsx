import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import posthog from 'posthog-js'

posthog.init('phc_FgF3J6Moe1mDVa3ed8z19wWaCsqCwrHEVeogJuedHW',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "powered by love: practical software engineering consulting agency",
  description: "Software engineering / project / qa / operations management services for small and medium software engineering teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
