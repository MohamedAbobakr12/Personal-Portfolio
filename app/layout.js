import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "800"]
})


export const metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio for Mohamed Abobakr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-hidden font-poppins bg-blue-100`}
      >
        {children}
      </body>
    </html>
  );
}
