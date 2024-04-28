import { Montserrat } from "next/font/google";
import {SpeedInsights} from "@vercel/speed-insights/next"
import "../css/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Jose Rios",
  description: "",
  robots: {
    follow: true,
    index: true
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}