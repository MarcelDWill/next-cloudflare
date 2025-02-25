import type { Metadata } from "next";
import "./globals.css";
import GlassmorphNavbar from "@/app/components/GlassmorphNavbar"; // ✅ Corrected import

// ✅ Metadata
export const metadata: Metadata = {
  title: "MarcelDante",
  description: "Software Engineer | Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <GlassmorphNavbar /> {/* ✅ Theme logic is now inside here */}
        {children}
      </body>
    </html>
  );
}


