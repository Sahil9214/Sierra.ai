/* eslint-disable prettier/prettier */
import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local'
import "./globals.css";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";


export const font1 = localFont({
  src: [
    {
      path: '../../public/fonts/font1.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-regular'
})

// Font 2 - Regular Italic (400 italic)
export const font2 = localFont({
  src: [
    {
      path: '../../public/fonts/font2.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  display: 'swap',
  variable: '--font-regular-italic'
})

// Font 3 - Medium Italic (500 italic)
export const font3 = localFont({
  src: [
    {
      path: '../../public/fonts/font3.woff2',
      weight: '500',
      style: 'italic',
    }
  ],
  display: 'swap',
  variable: '--font-medium-italic'
})

// Font 4 - Medium (500)
export const font4 = localFont({
  src: [
    {
      path: '../../public/fonts/font4.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-medium'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

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
      <body
        className={`flex min-h-screen flex-col bg-white text-black antialiased ${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} theme-tech:bg-black theme-tech:text-white theme-product:bg-gray-100 theme-platform:bg-gray-200`}
      >
        <SmoothScrollProvider>
          {children}
          <SpeedInsights />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
