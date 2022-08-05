// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches&display=optional"
          />

          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
