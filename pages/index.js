import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        ¡Bienvenido al blog de{" "}
        <a
          href="https://sites.hectorairy.com/"
          target="_blank"
          rel="noreferrer"
        >
          Héctor Airy!
        </a>
      </h1>
      {/* <div className="max-w-6xl mx-auto my-0 w-11/12"></div> */}
    </Layout>
  );
}
