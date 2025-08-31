import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})


export const metadata = {
  title: "Personal Portfolio - Mohamed Abobakr",
  description: "Personal portfolio of Mohamed Abobakr, a full-stack developer specializing in building modern web applications with React and Next.js. I am passionate about creating seamless digital experiences from front to back, and am actively seeking exciting freelance and full-time opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-hidden ${poppins.className} bg-blue-100`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
