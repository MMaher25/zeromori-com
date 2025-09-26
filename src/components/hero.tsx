import Image from 'next/image';

const Hero = () => {
  const BGPicture = '/hero.png';

  return (
    <Image
      className="absolute top-0 left-0 w-screen object-cover"
      alt=""
      src={BGPicture}
      width={1000}
      height={1000}
      priority
    />
  );
};

export default Hero;
