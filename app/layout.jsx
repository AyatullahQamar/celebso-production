import { Geist } from "next/font/google";
import "./globals.css";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Celebso Production",
  description: "Launching Talent. Creating Celebrities. Taking India Global.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1f1f1f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
