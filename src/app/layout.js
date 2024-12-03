/* eslint-disable prettier/prettier */
import { gtAmerica } from './fonts';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";

export const metadata = {
  title: "NeuralHQ.ai",
  description: "Provide AI solutions to your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gtAmerica.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`
          flex min-h-screen flex-col bg-white text-black antialiased
          theme-tech:bg-black theme-tech:text-white theme-product:bg-gray-100 theme-platform:bg-gray-200
        `}
      >
        <SmoothScrollProvider>
          {children}
          <SpeedInsights />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
