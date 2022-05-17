import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Coins</title>
        <meta name="keywords" content="coins" />
        <link rel="icon" href="/unicoin.png" />
      </Head>
      <main>
        <h1 className={styles.title}>crypto coins</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni
          dolorum illum dolores voluptas nam veritatis modi iure nihil deleniti
          debitis eius animi a accusantium explicabo odio, harum molestiae
          dolorem
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse
          suscipit tempore. Voluptatum dolore doloremque dolorum beatae! Tempore
          unde vero vel, itaque rem facere quos eos maxime, exercitationem
          quaerat nam?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          voluptatibus laboriosam quos animi ab debitis ducimus nesciunt qui
          vero odio obcaecati sapiente optio officiis minus, assumenda
          cupiditate maxime. Quasi, laboriosam.
        </p>
      </main>
      <div className="text-center mt-10">
        <Link href="/Coins">
          <a className="text-white font-bold  py-2 px-4 rounded bg-yellow-500 hover:bg-yellow-600 ">
            Coins
          </a>
        </Link>
      </div>
    </div>
  );
}
