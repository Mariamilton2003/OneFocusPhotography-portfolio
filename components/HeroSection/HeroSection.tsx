'use client';
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";


const HeroSection = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1552645265-1d8c244be6f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9zaG9wJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D";
  interface ImageContainerProps {
    image: string;
    className?: string;
    isFlexible?: boolean;
  }
  interface LargeImageContainerProps {
    image?: string;
    className?: string;
  }
  const ImageContainer = ({ isFlexible, image, className }: ImageContainerProps) => (
    <div
      className={`
      ${isFlexible ? "flex-1" : ""}
      aspect-[3/1]
      md:h-[96px]
      rounded-[40px]
      relative
      overflow-hidden
      ${className ? className : ""}
    `}
    >
      <Image
        src={image ? image : imageUrl}
        alt="Gallery image"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 25vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  const LargeImageContainer = ({ className, image }: LargeImageContainerProps) => (
    <div
      className={`
      aspect-[1/1.7]
      h-[100%]
      md:h-[300px]
      rounded-[40px]
      relative
      overflow-hidden
      ${className ? className : "flex-1"}
    `}
    >
      <Image
        src={image ? image : imageUrl}
        alt="Gallery image"
        fill
        className="object-cover"
        priority
        sizes="(max-width:480) 20vw,(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  const StatBadge = ({ count, label }: { count: string; label: string }) => (
    <Badge
      variant={"primary"}
      size={"lg"}
      className="flex flex-col h-12 w-24 md:h-[4.2rem] md:w-36 text-xs md:text-lg font-body font-extrabold cursor-none text-white bg-transparent hover:bg-transparent"
    >
      <span>{count}</span>
      <span>{label}</span>
    </Badge>
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-secondary-950/80 z-10" />
      <div className="flex flex-col items-start gap-4 md:gap-2 w-full p-4 md:p-4 md:px-8 overflow-hidden z-[-1]">
        <div className="hidden md:flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
          <ImageContainer image="/IMG_0776.JPG" className="w-full lg:w-[430px]" />
          <ImageContainer isFlexible image="/IMG_0440.JPG" className="hidden lg:block" />
          <ImageContainer image="/IMG_0442.JPG" className="w-full lg:w-[373px]" />
          <ImageContainer isFlexible image="/IMG_0454.JPG" className="hidden lg:block" />
        </div>

        <div className="flex md:h-[300px] flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
          <LargeImageContainer className="hidden md:block" image="/IMG_0451.JPG" />
          <LargeImageContainer className="w-full md:w-[917px]" image="/IMG_0446.JPG" />
          <LargeImageContainer className="hidden md:flex" image="/IMG_0463.JPG"/>
        </div>

        <div className="hidden md:flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
          <ImageContainer image="/IMG_0459.JPG" className="w-full lg:w-[476px]" />
          <ImageContainer isFlexible image="/IMG_0470.JPG" className="hidden lg:block" />
          <ImageContainer image="/IMG_0455.JPG" className="w-full lg:w-[423px]" />
        </div>
      </div>

      <div className="flex absolute inset-0 flex-col items-center gap-2 z-20">
        <h1 className="mt-36 font-header font-extrabold text-3xl md:text-6xl text-primary-500">
          Featured Photography
        </h1>
        <p className="mt-2 md:mt-4 font-body font-semibold text-2xl text-white">
          Capturing Moments That Matter
        </p>

        <div className="flex gap-8 mt-4">
          <Link href="/#contact">
            <Button size="lg" variant="secondary">
              Book a session
            </Button>
          </Link>
        </div>

        <div className="flex mt-16 md:mt-2 justify-around w-full">
          <StatBadge count="8+" label="Experience" />
          <StatBadge count="1000+" label="Clients" />
          <StatBadge count="100+" label="Projects" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;