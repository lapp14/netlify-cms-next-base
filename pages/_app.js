import Link from 'next/link'

import '../styles/reset.css'
import '../styles/global.scss'
import '../styles/header.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <div className="brand">
            <a href="/">Brand</a>
          </div>

          <ul>
            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}