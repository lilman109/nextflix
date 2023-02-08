import "@/styles/globals.css";
import { Roboto_Slab } from "@next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
