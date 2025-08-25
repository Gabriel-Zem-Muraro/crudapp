import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "../common/ProtectedRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRUD Application",
  description: "Sistema CRUD com autenticação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <AuthProvider>
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
        </AuthProvider>
  );
}

//Apenas o layout raiz deve conter as tags <html> e <body>. 
//Os layouts filhos devem retornar somente o conteúdo que vai dentro do <body>.
