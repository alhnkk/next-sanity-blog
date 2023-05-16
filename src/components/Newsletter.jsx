import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Newsletter = () => {

  // Ref to store a reference to the email input field.
  const inputRef = useRef(null);

  // State variable to track if the subscription notice should be shown or not.
  const [notice, setNotice] = useState(false);

  // State variable to store the email value entered in the subscription form.
  const [email, setEmail] = useState(null);



  const subscribeUser = async (e) => {
    e.preventDefault();

    // Sends a POST request to the '/api/subscribeUser' endpoint with the email data.
    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      // Sets the request header to specify the content type as JSON.
      headers: {
        'Content-Type': 'application/json',
      },

      // Sets the HTTP method of the request to POST.
      method: 'POST',
    });


    setNotice(true)
    setTimeout(() => {
      setNotice(false)
    }, 1500);

    setEmail('')
  }

  return (
    <div
      className='pl-24 md:pl-0 p-10 md:pt-20 bg-main-200 dark:bg-main-800 items-center'>
      <div
        className=' max-w-6xl container mx-auto md:flex md:justify-between '>

        {/* Subscription title */}
        <h2
          className='my-3 md:my-0 text-xl md:text-4xl font-extrabold text-main-950 dark:text-main-100'>
          Yazılarım anlık mailine gelsin.
        </h2>

        <form
          onSubmit={subscribeUser}>

          {/* Email input */}
          <input
            placeholder='e-mail adresinizi girin'
            ref={inputRef}
            type="email"
            className='p-2.5 border border-slate-300'
            value={email}
            required
          />

          {/* Subscribe button */}
          <button
            type='submit'
            className="p-2.5 bg-main-900 text-main-100 hover:bg-main-950 hover:text-white">
            Abone Ol
          </button>

          {/* Subscription notice */}
          {
            notice
            &&
            <p className='p-1 rounded-md bg-green-200 mt-4 text-green-600'>
              Abonelik işlemi Tamamlandı. Teşekkürler.
            </p>
          }
        </form>
      </div>

      {/* Social Icons */}
      {/* <div 
      class="mx-auto mt-3">

        <div 
        class="flex justify-center space-x-6 mr-16 md:mr-0 mt-9 ">

          <Link 
          href="https://instagram.com/alhnkk" 
          className="text-main-400 hover:text-main-500"
          target='_blank'>
            <BsInstagram 
            className='w-6 h-6'/>
          </Link>

          <Link 
          href="https://instagram.com/alhnkk" 
          className="text-main-400 hover:text-main-500"
          target='_blank'>
            <BsTwitter 
            className='w-6 h-6'/>
          </Link>

          <Link 
          href="https://github.com/alhnkk" 
          className="text-main-400 hover:text-main-500"
          target='_blank'>
            <BsGithub 
            className='w-6 h-6'/>
          </Link>

        
        </div>
      </div> */}
    </div>
  );
};

export default Newsletter;
