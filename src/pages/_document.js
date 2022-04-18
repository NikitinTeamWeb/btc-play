import React from 'react';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // eslint-disable-next-line react/display-name
    const page = renderPage((App) => (props) => <App {...props} />);

    return { ...page };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
          <link rel="stylesheet" href="/fonts/roboto/stylesheet.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
