import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import "../styles/reset.css";
import "../styles/global.scss";
import "../styles/header.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <div className="brand">
            <Link href="/">Brand</Link>
          </div>

          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="container">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  pageProps: PropTypes.object,
};

export default App;
