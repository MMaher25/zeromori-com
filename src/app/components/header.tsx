import Image from 'next/image'
import { JSX } from 'react';

const Header = ():JSX.Element => {
  const socialMediaLinks = [
    {
      label: 'Instagram',
      href: "https://www.instagram.com/zer0mori/",
      ariaLabel: "Instagram @zer0mori",
      src: '/icons/instagram.svg',
    },
  ];

  return (
    <header className="
      absolute
      h-[5vh]
      flex
      w-screen
      justify-around
    ">
        <div className="
          font-sans
          whitespace-nowrap
          flex
          items-center
          justify-center
          text-center
        ">
          Zero Mori
        </div>

        <nav
          className="flex items-center"
          aria-label="Social media links"
        >
          {socialMediaLinks.map((social, index) => {
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.ariaLabel}
                className="
                  hover:opacity-80
                "
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  className="filter-white"
                  width={26}
                  height={26}
                />
              </a>
            );
          })}
        </nav>
      </header>
  )
}

export default Header