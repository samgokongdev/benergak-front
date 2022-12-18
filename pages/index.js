import Head from "next/head";
import Image from "next/image";
import { Francois_One, Ubuntu } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const francois = Francois_One({ subsets: ["latin"], weight: ["400"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <Head>
        <title>Landing Page Peternakan Ayam</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className="text-white text-center justify-center items-center">
        <div className={francois.className}>
          <div className="text-[128px]">Benergak</div>
        </div>
        <div className={ubuntu.className}>
          <div className="text-[40px]">
            <span className="font-bold">Benar</span> atau{" "}
            <span className="font-bold">Salah</span>
          </div>
        </div>
        <div className={ubuntu.className}>
          <div className="text-[40px] w-full">
            <Link href="/test">
              <div className="mt-10 border-4 rounded-full hover:text-green-100">
                Mulai
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
