import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('E-posta gönderildi:', email);
    setNotice(true)
    setTimeout(() => {
      setNotice(false)
    }, 1500);

    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='pl-24 md:pl-0 p-10 md:p-20 bg-main-200 dark:bg-main-800 items-center'>
      <div className=' max-w-6xl container mx-auto md:flex md:justify-between '>
        <h2 className='my-3 md:my-0 text-xl md:text-4xl font-extrabold text-main-950 dark:text-main-100'>Yazılarım anlık mailine gelsin.</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='e-mail adresinizi girin'
            type="email"
            className='p-2.5 border border-slate-300'
            value={email}
            onChange={handleChange}
            required
          />
          <button type='submit' className="p-2.5 bg-main-900 text-main-100 hover:bg-main-950 hover:text-white">Abone Ol</button>
          {notice && (
            <p className='p-1 rounded-md bg-green-200 mt-4 text-green-600'>Abonelik işlemi Tamamlandı. Teşekkürler.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Footer;
