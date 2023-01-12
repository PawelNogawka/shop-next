import Layout from "../components/Layout";

import "../styles/globals.scss";
import { Poppins } from "@next/font/google";

import { StateContext } from "../context/StateContext";

const poppins = Poppins({
  substes: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout className={poppins.className}>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
