import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "TIC-TAC-TOE",
  description: "tic tac toe game!!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
