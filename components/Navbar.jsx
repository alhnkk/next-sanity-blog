import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ darkMode, handleDarkMode }) {
  
  // Small Screen Menu Dropdown
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`flex flex-row justify-between items-baseline py-2.5 md:py-0`}>
      <div>
        <Link href="/">
          <h1
            className="md:mt-16 text-3xl md:text-8xl antialiased tracking-tight md:tracking-tighter 
          leading-tight link-underline link-underline-black font-extrabold 
           text-main-950 hover:text-main-900 dark:text-main-100 dark:hover:text-main-200">Alihan.</h1>
        </Link>
      </div>
      <div className='md:mr-0'>
        <button
          id="closeMenu"
          className={`dark:text-main-50 dark:hover:text-main-100 md:hidden text-2xl font-bold mr-3 ${showMenu ? 'hidden' : ''}`}
          onClick={handleMenu}
        >
          &#9776;
        </button>

        <button
          id="openMenu"
          className={`dark:text-main-50  dark:hover:text-main-100  md:hidden text-2xl font-bold mr-3 ${showMenu ? '' : 'hidden'}`}
          onClick={handleMenu}
        >
          &#x2715;
        </button>


        <ul className={`text-main-800 hover:text-main-950 dark:text-main-50 md:flex md:gap-6 font-semibold text-xl right-10 md:right-0 bg-main-100 dark:bg-main-800 md:bg-main-50 md:dark:bg-main-950 absolute md:relative p-4 my-3 rounded-lg items-center ${showMenu ? '' : 'hidden'}`}>
          <li>
            <Link href="/about" className='transition delay-75 dark:hover:text-main-300  '>
              <span className='link-underline link-underline-black'>Hakkımda</span>
            </Link>
          </li>

          <li>
            <Link href="/" className='transition delay-75 dark:hover:text-main-300  '>
              <span className='link-underline link-underline-black'>İletişim</span>
            </Link>
          </li>

          <li>
            <input type="checkbox" id="toggle" className="toggle--checkbox cursor-pointer" onClick={handleDarkMode} />
            <label htmlFor="toggle" className="toggle--label">
              <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div>
          </li>

        </ul>
      </div>
    </div >
  );
}
