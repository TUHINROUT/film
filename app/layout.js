import { Cinzel, Montserrat } from "next/font/google";
import Shell from "@/components/Shell";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "700"], variable: "--f-display" });
const mont = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body" });

export const metadata = {
  title: "Arena | Film Production House",
  description: "Crafting powerful stories, memorable characters and world-class visual experiences for a global audience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${mont.variable}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
