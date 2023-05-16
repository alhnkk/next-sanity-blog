import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import resim from '../public/about.png'

const ContactForm = () => {

  //Form Submit Message State
  const [formSubmit, setFormSubmit] = useState(false);

  // Create a ref to the form element
  const form = useRef();

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using the emailjs library
    emailjs.sendForm(
      "o86duzy",
      "blog",
      form.current,
      "rvi5m2k1DUeHpYL0y"
    )

    setFormSubmit(!formSubmit)
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <main
      className="justify-center items-center h-screen mb-36 md:mb-0 grid md:grid-cols-2">

      {/* Image Column */}
      <Image
        className='hidden md:flex'
        src={resim}
        width={500}
        height={500}
      />

      {/* Contact Form Column */}
      <section
        className="md:p-20">
        <h2
          className="text-main-900 bg:text-main-200 text-6xl font-extrabold mb-10">
          İletişim
        </h2>

        {/* Add the form ref and onSubmit event handler */}
        <form
          ref={form}
          onSubmit={sendEmail}>

          {/* Form input fields */}
          <div
            className="mb-4">
            <label
              className="text-main-900 dark:text-main-100 font-bold mb-2"
              htmlFor="user_name">
              İsim:
            </label>

            <input
              className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="user_name"
              id="user_name"
              required />
          </div>

          <div
            className="mb-4">
            <label
              className="text-main-900 dark:text-main-100 font-bold mb-2"
              htmlFor="user_email">
              Email:
            </label>

            <input
              className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="user_email"
              id="user_email"
              required />
          </div>

          <div
            className="mb-6">
            <label
              className="text-main-900 dark:text-main-100 font-bold mb-2"
              htmlFor="message">
              Mesaj:
            </label>

            <textarea
              className="shadow border rounded w-full pt-2 pb-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              id="message"
              required />
          </div>

          {/* Submit button */}
          <button
            className="bg-main-950 hover:bg-main-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Gönder
          </button>

          {/* Form Submitted Message */}
          {formSubmit &&
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-10 rounded relative"
              role="alert">
              <strong
                className="font-bold">
                Mesajını aldım!
              </strong>
              <span
                className="block sm:inline ml-4">
                Teşekkür ederim.
              </span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  onClick={() => setFormSubmit(!formSubmit)}
                  className="fill-current h-6 w-6 text-green-500"
                  role="button" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <title>Kapat</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          }
        </form>
      </section>
    </main>
  )
}


export default ContactForm;