import Head from "next/head";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LAMA PIZZA | Your one stop Pizza Shop</title>
        <meta name="description" content="Your one stop Pizza Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
    </div>
  );
}
