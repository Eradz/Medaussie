import type { Metadata } from "next";
import {Montserrat} from "next/font/google"
import "./globals.css";
import { Toaster } from 'sonner'
import {EventCreatorContextProvider} from "@/components/context/UserContext"
import { Suspense } from "react";
import Loading from "./loading";

const montserrat = Montserrat({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "Medaussie",
  description: "Your Pathway to Practice in Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Toaster position="top-right" richColors/>
        <EventCreatorContextProvider>
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </EventCreatorContextProvider>
      </body>
    </html>
  );
}
