import "./globals.css";
import { Montserrat, Inter, Frank_Ruhl_Libre } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ['latin'] });

export const metadata = {
  title: "ITS MUN Club 2024",
  description: "An MUN Club initiated by ITS Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${montserrat.className} ${inter.className} ${frankRuhlLibre.className}`}>
        {children}
      </body>
    </html>
  );
}
