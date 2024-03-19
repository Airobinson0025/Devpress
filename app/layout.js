import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MdPress",
  description: "Create a blog using markdown.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange 
        >
          <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
