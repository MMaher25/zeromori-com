import { JSX } from 'react';
import Hero from '@/components/hero';

const Home = (): JSX.Element => {
  return (
    <main className="h-screen w-screen relative">
      <Hero />
      <div
        className="
          bg-[#00000057] relative flex flex-col z-3
          justify-around items-center w-screen h-screen
        "
      >
        <section className="">
          <h1
            className="
              font-sans whitespace-nowrap flex
              items-center justify-center text-center
            "
          >
            Zero Mori
          </h1>
          <div className="font-mono">@zer0mori</div>
        </section>
        <section className="">
          <a
            href="mailto:zero@zeromori.com"
            className="
              cursor-pointer hover:opacity-80 transition-opacity
              rounded-[50px] border-[5px] border-solid
              border-white px-6 py-2
            "
            aria-label="Contact Zero"
          >
            Contact
          </a>
        </section>
      </div>
    </main>
  );
};

export default Home;
