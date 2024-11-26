/* eslint-disable prettier/prettier */
import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sierra.ai",
  description: "Provide AI solutions to your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
