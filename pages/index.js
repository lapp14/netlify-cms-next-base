import Head from "next/head"
import Script from 'next/script'
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, list } = attributes;
    return (
      <>
        <Head>
          <title>Homepage</title>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <article>
          <h1>{title}</h1>

          {/* content portion of 'content/home.md' */}
          <HomeContent />
          <br />

          {/* editable list portion of 'content/home.md' */}
          <ul>
            {list.map((item, k) => (
              <li key={k}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}