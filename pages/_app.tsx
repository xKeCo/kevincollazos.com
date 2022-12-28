import { Footer, Layout, Navbar } from "../components";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/mediumZoomStyles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout title={"KC"}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
