import Link from "next/link";
import { AboutProfileCard } from "../AboutProfileCard/AboutProfileCard";
import { Button } from "../ui/button";
import { aboutProfiles } from "@/constants";


export const AboutSection = () => {
  const title = "About Us";
  const description =
    "We are passionate about capturing life's precious moments through our lens. With years of experience and dedication to our craft, we bring creativity and professionalism to every shoot.";

  return (
    <section className="mt-8 w-full">
      <h1 className="w-full justify-center flex items-center font-header font-extrabold text-3xl text-center">
        {title}
      </h1>
      <p className="mt-4 w-full justify-center flex items-center font-body text-xl text-center">
        <span>{description} <Button variant={'link'} className="-ml-4 text-blue-700 font-body text-lg"asChild><Link href={'/About'}>Learn More</Link></Button></span>
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8 px-4 w-[80vw] md:max-w-7xl mx-auto">
        {aboutProfiles.map((profile) => (
          <AboutProfileCard
            key={profile.name}
            image={profile.image}
            name={profile.name}
            role={profile.role}
          />
        ))}
      </div>
    </section>
  );
};