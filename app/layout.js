import { Montserrat } from "next/font/google";
import "../theme/globals.css";
import { OnlineStatusProvider } from "@/contexts/providers/ionlineProvider";
import { ThemeProvider } from "@/contexts/providers/themeProvider";

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
        <OnlineStatusProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </OnlineStatusProvider>
      </body>
    </html>
  );
}