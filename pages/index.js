import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/landing/Hero";
import ServicesSection from "../components/landing/Services";
import ArticlesSection from "../components/landing/Articles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Bank</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <HeroSection />
      <ServicesSection />
      <ArticlesSection />
    </>
  );
}
