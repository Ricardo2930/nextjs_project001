import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Repartidev - LLegamos a ti",
  description: "Soluciones Repartidev, llegamos donde necesites tus pedidos",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
