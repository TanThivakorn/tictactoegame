import { SessionProvider } from "next-auth/react";

import "./globals.css";

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
