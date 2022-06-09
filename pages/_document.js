import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&family=Ubuntu:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:image"
          content="/images/Abhishek-Shakya-AbhiXShakya.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="/images/Abhishek-Shakya-AbhiXShakya.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="profile:first_name" content="Abhishek" />
        <meta property="profile:last_name" content="Shakya" />
        <meta property="profile:gender" content="male" />
        <meta property="profile:username" content="AbhiXShakya" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="itsAbhiXShakya" />
        <meta
          name="twitter:image:src"
          content="/images/Abhishek-Shakya-AbhiXShakya.jpg"
        />
        <meta name="twitter:creator" content="@itsAbhiXShakya" />
      </Head>
      <body className="text-xblack selection:bg-xorange">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
