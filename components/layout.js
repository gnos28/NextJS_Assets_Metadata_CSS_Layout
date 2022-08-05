import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href="favicon.png" />
      </Head>
      <header>
        <nav>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/terms">
              <a>Terms of use</a>
            </Link>
          </p>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
