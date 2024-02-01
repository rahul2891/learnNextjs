import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Verma",
  description: "Learning Nextjs by this project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
        <div className="container">
        <Navbar />
        {children}
        <Footer />
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}


// Layout is the parent component of all pages