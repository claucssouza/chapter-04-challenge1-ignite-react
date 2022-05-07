import type { NextPage } from "next";
import { Header } from '@/components/Header';
import { MainHeader } from "@/components/MainHeader";
import { Nav } from '@/components/Nav';
import { Slide } from '@/components/Slide';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainHeader />
      <Nav />
      <Slide />
    </>
  );
};

export default Home;
