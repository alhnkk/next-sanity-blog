import "../styles/globals.css"
import { useRouter } from 'next/router';
import { useState } from "react";
import Head from "next/head";
import useSound from 'use-sound';

import Layout from "./layout"
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import popSfx from '../public/popSound.mp3'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const [play] = useSound(popSfx);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    play();
  };


  return (
    <>
      <div className={` ${darkMode ? 'dark' : 'light'} `}>
        <div className="bg-main-50 dark:bg-main-950">
          <Layout>
            <Head>
              <title>Alihan Küçükkaya</title>
            </Head>
            {/* {router.pathname !== '/about' && router.pathname !== '/post/[slug]' && ( */}
              <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
            {/* )} */}
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </div>
      </div>

    </>
  )
}