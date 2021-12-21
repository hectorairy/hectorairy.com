import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Héctor Airy | @hectorairy </title>
        <meta
          name="description"
          content="Un apasionado por diseñar y desarrollar tecnología impactante. Un entusiasta del long-term thinking. Creyente fiel de que no existe nada que no puedas aprender si te lo propones."
        />
        <meta name="robots" content="index, follow" data-react-helmet="true" />
        <meta name="author" content="Hector Airy" data-react-helmet="true" />
        <meta name="copyright" content="Hector Airy" data-react-helmet="true" />
        <meta
          name="image"
          content="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-1/p320x320/259438470_104459778731870_5383511588016407720_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=n9Q8ItcTy3cAX84GgYD&_nc_ht=scontent.fmex12-1.fna&edm=AOf6bZoEAAAA&oh=00_AT8hQF-a1DU2F0x7s4AYBeXPNg_Dxv85FkqPvohUdp1I2Q&oe=61BE160B"
          data-react-helmet="true"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
