import starter from "../starter.config";
import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={notoSansKR.className}>
      {starter.googleAnalytics && (
        <GoogleAnalytics gaId={starter.googleAnalytics.gaId} />
      )}
      <Component {...pageProps} />
    </main>
  );
}
