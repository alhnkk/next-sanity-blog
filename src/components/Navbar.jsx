import { useState } from 'react';
import Link from 'next/link';

import { BiRss } from 'react-icons/bi'
import { BsVolumeUp, BsVolumeMute } from 'react-icons/bs'

import popSfx from '../public/popSound.mp3'
import useSound from 'use-sound';
import SearchBar from './SearchBar';


export default function Navbar({ handleDarkMode }) {

  // State for voice icon
  const [voice, setVoice] = useState(true);
  const [play] = useSound(popSfx)

  // Toggles the voice state and plays a sound effect.
  const changeVoice = () => {
    setVoice(!voice)
    play();
  }

  // Small Screen Menu Dropdown
  const [showMenu, setShowMenu] = useState(false);

  // Handles the click event for the menu button, toggling the showMenu state.
  const handleMenu = () => setShowMenu(!showMenu)

  return (
    // Logo
    <div
      className={`flex flex-row justify-between items-end py-2.5 md:py-0`}>
      <div>
        <Link
          href="/">
          <h1
            className="md:mt-16 md:mb-4 text-3xl md:text-6xl antialiased tracking-tight md:tracking-tighter 
            leading-tight link-underline link-underline-black font-extrabold 
           text-main-950 hover:text-main-900 dark:text-main-100 dark:hover:text-main-200">
            hepaynıboşluk.
          </h1>
        </Link>
      </div>

      {/* Menu Div*/}
      <div
        className='md:mr-0'>

        {/* Hamburger Menu Icon */}
        <button
          id="closeMenu"
          className={`dark:text-main-50 dark:hover:text-main-100 md:hidden text-2xl font-bold mr-3 ${showMenu ? 'hidden' : ''}`}
          onClick={handleMenu}>
          &#9776;
        </button>

        {/* Close Menu Icon */}
        <button
          id="openMenu"
          className={`dark:text-main-50  dark:hover:text-main-100  md:hidden text-2xl font-bold mr-3 ${showMenu ? '' : 'hidden'}`}
          onClick={handleMenu}>
          &#x2715;
        </button>

        {/* Menu List */}
        <ul
          className={`text-main-800 hover:text-main-950 dark:text-main-50 bg-main-100 dark:bg-main-800 md:bg-main-50 
        md:flex md:gap-6 font-semibold text-xl right-16 md:right-3  md:dark:bg-main-950 absolute md:relative p-4 my-3 
        rounded-lg items-center ${showMenu ? '' : 'hidden'}`}>

          {/* Dark Mode Toggle */}
          <li>
            <div>
              <input
                onClick={handleDarkMode}
                type="checkbox"
                className="checkbox"
                id="checkbox" />

              <label
                htmlFor="checkbox"
                className="checkbox-label">
                <i className="fas fa-moon" />
                <i className="fas fa-sun" />
                <span className="ball" />
              </label>
            </div>
          </li>

          {/* Contact Page Link */}
          <li>
            <Link
              href="/contact"
              className='transition delay-75 dark:hover:text-main-300'>

              <BiRss
                className='w-7 h-7 text-main-600 hover:text-main-900 dark:text-main-100 dark:hover:text-main-300' />

            </Link>
          </li>

          {/* Volume Mute Icon */}
          <li
            className=' cursor-not-allowed'
            onClick={() => changeVoice()}>
            {
              voice ?
                <BsVolumeUp
                  className='w-7 h-7 text-main-600 hover:text-main-900 dark:text-main-100 dark:hover:text-main-300' />
                :
                <BsVolumeMute
                  className='w-7 h-7 text-main-600 hover:text-main-900 dark:text-main-100 dark:hover:text-main-300' />
            }
          </li>

          {/* Search Bar Component */}
          {/* <li>
            <SearchBar />
          </li> */}
        </ul>
      </div>
    </div >
  );
}
