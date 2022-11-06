import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import navigation from "../src/navigation";

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

          <div className="collapsable-menu">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="menu" className="menu-toggle">
              &#9776;
            </label>
            <input type="checkbox" id="menu" />
            <ul className="menu-content">
              {navigation.map((link, k) => (
                <li key={k}>
                  <Link href={link.href}>{link.title}</Link>
                  {/* TODO: Support submenu */}
                </li>
              ))}
            </ul>
          </div>
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
