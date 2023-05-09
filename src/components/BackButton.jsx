import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react"

const BackButton = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    router.back();
  }
  return (
    <div className=" py-12 right-10 ">
      <div className='flex cursor-pointer my-2.5 flex-row justify-between items-end text-main-900 hover:text-main-black dark:text-main-200 dark:hover:text-main-400'>
        <div onClick={handleClick} className={`${scrolled ? 'bg-main-900 text-main-200 hover:text-main-400 rounded-3xl p-2 fixed mar0' : ''} font-extrabold text-6xl antialiased`}>
          &#8617;
        </div>
      </div>
    </div>
  )
}

export default BackButton