import { Montserrat, Merriweather } from 'next/font/google'

const montserrat = Montserrat({
  weight: ["400", "700"]
  , subsets: ['latin'],
  variable: "--font-Montserrat"
})

const merriweather = Merriweather({
  weight: ["400", "700"]
  , subsets: ['latin'],
  variable: "--font-playfair"
})


export default function Layout({ children }) {

  return (
    <div className={`${montserrat.className}`}>
      <style jsx global>{`
        h1, h2 {
          font-family: ${merriweather.style.fontFamily};
        }
      `}
      </style>

      <div
        className=' container mx-auto px-8 md:px-5 max-w-7xl'>
        <main>{children}</main>
      </div>
    </div>
  )
}
