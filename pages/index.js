import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Banner from "@/components/banner/banner";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar userName={"LilJapaboi"}/>
      <Banner
        title="Clifford the Red Dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
    </div>
  );
}
