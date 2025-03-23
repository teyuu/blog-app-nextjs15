import Navbar from "@/components/general/Navbar";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
