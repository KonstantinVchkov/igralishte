import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  const hideOnRoutes = ["/login", "/register"];

  const showHeaderAndFooter = !hideOnRoutes.includes(pathname);
  
  return (
    <>
      {showHeaderAndFooter && <Header />}
      <Component {...pageProps} />
      {showHeaderAndFooter && <Footer />}
    </>
  );
}
