import { JSX } from 'react';
import Hero from '@/components/hero';

const Home = (): JSX.Element => {
  return (
    <main className="h-screen w-screen relative">
      <Hero />
      <div
        className="
          bg-[#00000057] relative flex flex-col
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
          <button
            className="
              cursor-pointer hover:opacity-80
              transition-opacity rounded-[50px]
              border-[5px] border-solid border-white
              pointer-events-none
            "
            aria-label="Contact Zero"
          >
            Contact
          </button>
        </section>
      </div>
    </main>
  );
};

export default Home;
