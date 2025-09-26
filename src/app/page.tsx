import Image from 'next/image';
import React, { JSX } from 'react';

const Home = (): JSX.Element => {
  const BGPicture = '/hero.png';

  return (
    <main
      className="
      h-screen
      w-screen
      relative
    "
    >
      <Image
        className="
          absolute top-0
          left-0 w-screen
          object-cover
          z-0
        "
        alt=""
        src={BGPicture}
        width={1000}
        height={1000}
        priority
      />

      <div
        className="
        bg-[#00000057]
        relative
        flex
        flex-col
        justify-around
        items-center
        w-screen
        h-screen
      "
      >
        <section className="">
          <h1
            className="
            font-sans
            whitespace-nowrap flex items-center justify-center text-center"
          >
            Zero Mori
          </h1>

          <div className="font-mono">@zer0mori</div>
        </section>

        <div className="">
          <button
            className="cursor-pointer hover:opacity-80 transition-opacity rounded-[50px] border-[5px] border-solid border-white pointer-events-none"
            aria-label="Contact Zero"
          >
            Contact
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
