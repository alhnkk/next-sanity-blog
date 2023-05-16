import "../styles/globals.css"
import { useRouter } from 'next/router';
import { useState } from "react";
import Head from "next/head";
import useSound from 'use-sound';

import Layout from "./layout"
import Navbar from "../components/Navbar";
import popSfx from '../public/popSound.mp3'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const [play] = useSound(popSfx);

  //Toggles the darkMode state
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    play();
  };


  return (
    <>
      {/* Conditional rendering of dark or light mode class based on `darkMode` state. */}
      <div 
      className={` ${darkMode ? 'dark' : 'light'} `}>

        <div 
        className="bg-main-50 dark:bg-main-950">
          <Layout>

            <Head>
              <title>Alihan Küçükkaya</title>
            </Head>

            {/* {router.pathname !== '/about' && router.pathname !== '/post/[slug]' && ( */}
            <Navbar 
            darkMode={darkMode} 
            handleDarkMode={handleDarkMode} />
            {/* )} */}
            <Component {...pageProps} />
          </Layout>
          <Newsletter />
          <Footer /> 
        </div>
      </div>

    </>
  )
}