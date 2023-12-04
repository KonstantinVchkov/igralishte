import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NextBreadcrumb from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/NextBreadcrumb";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  const hideOnRoutes = ["/login", "/register", "profile_setup"];
  const breadCrumbPages = [
    "/AboutUs",
    "/FAQ",
    "/ContactUs",
    "/local_designers",
    "/products",
  ];
  const showHeaderAndFooter = !hideOnRoutes.includes(pathname);
  const showBreadCrumb = breadCrumbPages.includes(pathname);

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {showBreadCrumb && <NextBreadcrumb separator={<span>{">"}</span>} />}
      <Component {...pageProps}  />
      {showHeaderAndFooter && <Footer />}
    </>
  );
}


