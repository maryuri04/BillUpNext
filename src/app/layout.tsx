import type { Metadata } from "next";
import "./globals.css";
import { UsuarioContextProvider } from "@/context/UsuarioContext";
import AuthProvider from "@/context/AuthProvider";


export const metadata: Metadata = {
  title: "Billup",
  description: "Aplicación de facturación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body>
        <AuthProvider>
          <UsuarioContextProvider>
            {children}
          </UsuarioContextProvider>
        </AuthProvider>
      </body>
    </html>

  );
}
